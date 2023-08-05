import { randomBytes } from 'crypto';
import { client } from './client';
export const withLock = async (key: string, cb: () => any) => {
	const retryDelayMs = 100;
	let retries = 20;

	// generate a random value to store at the lock key
	const token = randomBytes(6).toString('hex');
	//create the lock key
	const lockKey = `lock:${key}`;
	//set up the wile loop to implement the retry behavior
	while (retries >= 0) {
		//try to do a SETNX operation
		const acquired = await client.set(lockKey, token, { NX: true, PX: 2000 });

		if (!acquired) {
			await pause(retryDelayMs);
			retries--;
			continue;
			// else brief pause(retryDelayMs) and then retry
		}
		//if the set us successfully, then run the callback
		try {
			const result = await cb();
			return result;
		} finally {
			// unset the locked key
			await client.unlock(lockKey, token);
		}
	}
};

const buildClientProxy = () => {};

const pause = (duration: number) => {
	return new Promise((resolve) => {
		setTimeout(resolve, duration);
	});
};
