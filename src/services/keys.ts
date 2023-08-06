export const pageCacheKey = (id: string) => `pagecache#${id}`;
export const usersKey = (userId: string) => `users#${userId}`;
export const sessionsKey = (sessionId: string) => `sessions#${sessionId}`;
export const usernamesUniqueKey = () => 'usernames:unique';
export const userLikesKey = (userId: string) => `users:likes#${userId}`;
export const usernamesKey = () => 'usernames';
export const userViewItemUniqueKey = () => 'users:views:Unique';
// items
export const itemsByViewKey = () => 'items:views';
export const itemsKey = (itemId: string) => `items#${itemId}`;
export const itemsEndingAtKey = () => `items:endingAt`;
export const itemsViewKey = (itemId: string) => `items:views#${itemId}`;
export const bidsHistoryKey = (itemId: string) => `history:${itemId}`;
export const itemsByPriceKey = () => `items:price`;
export const itemsIndexKey = () => 'idx:items';
