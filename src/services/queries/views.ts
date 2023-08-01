import { itemsKey, itemsViewKey, usernamesUniqueKey } from '$services/keys';
import { client } from '$services/redis';

export const incrementView = async (itemId: string, userId: string) => {
	// const exist = await client.zScore(usernamesUniqueKey(), userId);
	// console.log(exist);
	// await client.zAdd(usernamesUniqueKey(), { value: userId, score: 0 });
	return Promise.all([
		await client.hIncrBy(itemsKey(itemId), 'views', 1),
		await client.zIncrBy(itemsViewKey(), 1, itemId),
		await client.zScore(itemsViewKey(), itemId)
	]);
};
