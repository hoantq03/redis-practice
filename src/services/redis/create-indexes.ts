import { itemsIndexKey, itemsKey } from '$services/keys';
import { SchemaFieldTypes } from 'redis';
import { client } from './client';

export const createIndexes = async () => {
	const indexes = await client.ft._list();
	const existed = indexes.find((index) => index === itemsIndexKey());
	if (existed) {
		return;
	}
	return client.ft.create(
		itemsIndexKey(),
		{
			name: { type: SchemaFieldTypes.TEXT },
			description: { type: SchemaFieldTypes.TEXT }
		},
		{
			ON: 'HASH',
			PREFIX: itemsKey('')
		}
	);
};
