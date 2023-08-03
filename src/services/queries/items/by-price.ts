import { itemsByPriceKey, itemsKey } from '$services/keys';
import { client } from '$services/redis';
import { deserialize } from './deserialize';

export const itemsByPrice = async (order: 'DESC' | 'ASC' = 'DESC', offset = 0, count = 10) => {
	let results: any = await client.sort(itemsByPriceKey(), {
		GET: [
			'#',
			`${itemsKey('*')}->name`,
			`${itemsKey('*')}->views`,
			`${itemsKey('*')}->imageUrl`,
			`${itemsKey('*')}->endingAt`,
			`${itemsKey('*')}->price`
		],
		BY: 'nosort',
		DIRECTION: order,
		LIMIT: {
			offset,
			count
		}
	});
	const items = [];
	while (results.length) {
		const [id, name, views, imageUrl, endingAt, price, ...rest] = results;
		const item = deserialize(id, {
			name,
			endingAt,
			views,
			imageUrl,
			price
		});
		items.push(item);
		results = rest;
	}
	return items;
};
