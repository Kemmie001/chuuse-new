import axios from 'axios';
export const baseUrl = 'https://chuuse-node.herokuapp.com'
const state = () => ({
	data: {}
})
const getters = {
	getData: (state) => state.data
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
				context.commit('userDetails', userDetails.data.data)
				return { status: "success", message: "successful registration!" }
			})
	},
	editUser: (context, editPayload) => {
		const { nationality,
			portfolioLink,
			firstName,
			lastName,
			email,
			englishProficiency,
			yearsOfWorkingExperience,
			yearsOfExperienceWithPrimaryStack,
			resumeFileUrl,
			primaryStack,
			phone,
			location } = editPayload;

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
			primaryStack,
			phone,
			location
		}
		axios.patch(`${baseUrl}/api/v1/user/edit`, data, {
			headers: {
				"x-id-key": JSON.parse(window.localStorage.getItem('e-l-key'))
			}
		})
			.then((res) => {
				return { status: "success", message: "successful registration!" }
			})
	}
};
const mutations = {
	userDetails: (state, data) => {
		state.data = data
	}
};

export default {
	state,
	mutations,
	getters,
	actions,
};