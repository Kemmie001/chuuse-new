import axios from 'axios';
export const setUser = (data) => {
	const { user } = data
	const thisUser = { ...user }
	window.localStorage.setItem('e-l-user', JSON.stringify(thisUser))
	return thisUser;
}

export const isLoggedIn = () => {
	let user = window.localStorage.getItem('e-l-user');
	user = user ? JSON.parse(user) : false;
	return user
}
const state = () => ({
	// user: null
});
const getters = {

};
const actions = {
	async register(context, payload) {
		const { nationality,
			portfolioLink,
			firstName,
			lastName,
			email,
			englishProficiency,
			yearsOfWorkingExperience,
			yearsOfExperienceWithPrimaryStack,
			resumeFileUrl,
			primaryStack } = payload;
		console.log(payload)
		const data = {
			nationality,
			portfolioLink,
			firstName,
			lastName,
			email,
			englishProficiency,
			yearsOfWorkingExperience,
			yearsOfExperienceWithPrimaryStack,
			resumeFileUrl,
			primaryStack
		}
		await axios.post('https://chuuse-node.herokuapp.com/api/v1/user/register',
			data)
			.then((res) => {
				setUser(res.data.data)
			})
			.catch((err) => {
				console.log(err)
			})
		// commit("setUser", uerData)
		// return userData
	}
};
const mutations = {
	// setUser(state, userData) {
	// 	state.user = userData
	// }
};
export default {
	state,
	getters,
	actions,
	mutations
};