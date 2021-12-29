import axios from 'axios';
export const baseUrl = 'https://chuuse-node.herokuapp.com'
const state = () => ({
	data: {},
	loader: false,
})
const getters = {
	getData: (state) => state.data,
	editing: (state) => state.loader
};
const actions = {
	getUser: (context) => {
		axios.get(`${baseUrl}/api/v1/user/me`, {
			headers: {
				"x-id-key": JSON.parse(window.localStorage.getItem('e-l-key'))
			}
		})
			.then((res) => {
				const userDetails = res
				window.localStorage.setItem('e-l-id', JSON.stringify(userDetails.data.data._id));
				context.commit('userDetails', userDetails.data.data)
				return { status: "success", message: "successful registration!" }
			})
	},
	editUser: (context, editPayload) => {
		const { nationality,
			portfolioLink,
			firstName,
			lastName,
			englishProficiency,
			yearsOfWorkingExperience,
			yearsOfExperienceWithPrimaryStack,
			resumeFileUrl,
			primaryStack,
			phoneNumber,
			location } = editPayload;

		const data = {
			nationality,
			portfolioLink,
			firstName,
			lastName,
			englishProficiency,
			yearsOfWorkingExperience,
			yearsOfExperienceWithPrimaryStack,
			resumeFileUrl,
			primaryStack,
			phoneNumber,
			location
		}
		context.commit("setLoading", true);
		axios.patch(`${baseUrl}/api/v1/user/edit`, data, {
			headers: {
				"x-id-key": JSON.parse(window.localStorage.getItem('e-l-key'))
			}
		})
			.then((res) => {
				return { status: "success", message: "successful registration!" }
			})
			.finally(() => {
				context.commit("setLoading", false);
			})
	}
};
const mutations = {
	userDetails: (state, data) => {
		state.data = data
	},
	setLoading: (state, loading) => {
		state.loader = loading
	},
};

export default {
	state,
	mutations,
	getters,
	actions,
};