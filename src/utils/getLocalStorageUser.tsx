const getLocalStorage = () => {
	const user = localStorage.getItem("user");
	if (user) {
		return JSON.parse(user);
	} else {
		return null;
	}
};

export default getLocalStorage;
