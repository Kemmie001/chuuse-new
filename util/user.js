export const isLoggedIn = () => {
	let user = window.localStorage.getItem('e-l-key');
	user = user ? JSON.parse(user) : false;
	return user;
};