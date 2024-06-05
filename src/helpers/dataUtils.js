export const getFromLocalStorage = (key) => {
	const JSONdata = localStorage.getItem(key);
	if (JSONdata) {
		const data = JSON.parse(JSONdata);
		return data;
	}
};

export const setToLocalStorage = (key, data) => {
	const initalData = JSON.parse(localStorage.getItem(key)) || [];
	localStorage.setItem(key, JSON.stringify([...initalData, data]));
};
