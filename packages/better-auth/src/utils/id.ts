const { nanoid } = require('nanoid');

export const generateId = (size?: number) => {
	return nanoid(size);
};
