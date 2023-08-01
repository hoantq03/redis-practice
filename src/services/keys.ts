export const pageCacheKey = (id: string) => `pagecache#${id}`;
export const usersKey = (userId: string) => `users#${userId}`;
export const sessionsKey = (sessionId: string) => `sessions#${sessionId}`;
export const usernamesUniqueKey = () => 'usernames:unique';
export const userLikesKey = (userId: string) => `users:likes#${userId}`;
export const usernamesKey = () => 'usernames';
export const userViewItemUniqueKey = () => 'users:views:Unique';
// items
export const itemsViewKey = () => 'items:views';
export const itemsKey = (itemId: string) => `items#${itemId}`;
export const itemsEndingAtKey = () => `items:endingAt`;
