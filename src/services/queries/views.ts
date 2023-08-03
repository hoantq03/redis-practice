import { itemsKey, itemsByViewKey, usernamesUniqueKey, itemsViewKey } from '$services/keys';
import { client } from '$services/redis';

export const incrementView = async (itemId: string, userId: string) => {
	const inserted = await client.pfAdd(itemsViewKey(itemId), userId);
	if (inserted) {
		return Promise.all([
			await client.hIncrBy(itemsKey(itemId), 'views', 1),
			await client.zIncrBy(itemsByViewKey(), 1, itemId)
		]);
	}
};
