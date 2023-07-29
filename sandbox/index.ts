import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
	await client.set('hoan', 'hien');
	await client.set('hoan1', 'hien');
	await client.set('hoan2', 'hien');

	const command = [3].map((id) => {
		return client.get(`hoan${id}`);
	});
	const data = await Promise.all(command);
	if (data[0] === null) console.log('null');
	console.log(data);
};
run();
