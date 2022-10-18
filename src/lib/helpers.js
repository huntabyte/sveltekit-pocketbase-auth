export const serializeNonPOJOs = (obj) => {
	return JSON.parse(JSON.stringify(obj));
};
