import axios from 'axios';
export const baseUrl = 'https://chuuse-node.herokuapp.com'
export const newUser = (data) => {
	const { newEmail } = data
	const thisEmail = { newEmail }
	window.localStorage.setItem('e-l-user', JSON.stringify(thisEmail))
}
const state = {
	userEmail: "hey",
	details: {}
}
const getters = {
	getUser: (state) => state.userEmail,
	getDetail: (state) => state.details
};
const actions = {
	register: (context, payload) => {
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
		newUser(data.email)
		window.localStorage.setItem('e-l-user', JSON.stringify(data.email))
		context.commit('setUser', window.localStorage.getItem('e-l-user'))
		axios.post(`${baseUrl}/api/v1/user/register`,
			data)
			.then((res) => {
				return { status: "success", message: "successful registration!" }
			})
		// return userData
	},
	verifyUser: (context, codeDetails) => {
		const { verificationCode, email } = codeDetails
		const codeData = { verificationCode, email }
		axios.post(`${baseUrl}/api/v1/user/verify/email`, codeData)
			.then((res) => {
				return "success"
			})
	},
	resendCode: (context, resendDetails) => {
		const { email } = resendDetails
		const codeData = { email }
		axios.post(`${baseUrl}/api/v1/user/resend-otp`, codeData)
			.then((res) => {
			})
	},
	loginUser: (context, loginDetails) => {
		const { email, password } = loginDetails
		const loginData = { email, password }
		return axios.post(`${baseUrl}/api/v1/user/login`, loginData)
			.then((res) => {
				const key = res.headers["x-id-key"]
				window.localStorage.setItem('e-l-key', JSON.stringify(key));
				context.commit('setKey', window.localStorage.getItem('e-l-key'))
			})
	},
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
	}
};


const mutations = {
	setUser: (state, kem) => {
		state.userEmail = kem;
	},
	setKey: (state, key) => {
		state.identification = key;
	},
	userDetails: (state, detail) => {
		state.details = detail
	}
};
export default {
	state,
	mutations,
	getters,
	actions,

};