import axios from 'axios';
export const baseUrl = 'https://chuuse-node.herokuapp.com'
export const newUser = (data) => {
	const { newEmail } = data
	const thisEmail = { newEmail }
	window.localStorage.setItem('e-l-user', JSON.stringify(thisEmail))
}
const state = {
	userEmail: "hey",
	details: {},
	loader: false,
	accessToken: null,
	loginErr: null,
	registering: false,
	registerErr: null
}
const getters = {
	getToken: (state) => state.accessToken,
	getUser: (state) => state.userEmail,
	getDetail: (state) => state.details,
	logging: (state) => state.loader,
	getErrMessage: (state) => state.loginErr,
	registering: (state) => state.registering,
	registeringUser: (state) => state.registerErr,
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
		context.commit("setRegistering", true);
		newUser(data.email)
		window.localStorage.setItem('e-l-user', JSON.stringify(data.email))
		context.commit('setUser', window.localStorage.getItem('e-l-user'))
		axios.post(`${baseUrl}/api/v1/user/register`,
			data)
			.then((res) => {
				context.commit("setErrRegister", false)
			})
			.catch((err) => {
				context.commit("setErrRegister", err.response.data.message)
			})
			.finally(() => {
				context.commit("setRegistering", false);
			})
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
		context.commit("setLoading", true);
		const { email, password } = loginDetails
		const loginData = { email, password }
		return axios.post(`${baseUrl}/api/v1/user/login`, loginData)
			.then((res) => {
				const key = res.headers["x-id-key"]
				window.localStorage.setItem('e-l-key', JSON.stringify(key));
				context.commit('setKey', window.localStorage.getItem('e-l-key'))
				context.commit("setErrMessage", false)
			})
			.catch((err) => {
				context.commit("setErrMessage", err.response.data.message)
			})
			.finally(() => {
				context.commit("setLoading", false);
			})
	},
	logout({ commit }) {
		localStorage.removeItem('e-l-key');
		commit('logout');
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
	setErrMessage: (state, errMessage) => {
		state.loginErr = errMessage
	},
	setUser: (state, kem) => {
		state.userEmail = kem;
	},
	setKey: (state, key) => {
		state.identification = key;
	},
	userDetails: (state, detail) => {
		state.details = detail
	},
	setLoading: (state, loading) => {
		state.loader = loading
	},
	setRegistering: (state, loading) => {
		state.registering = loading
	},
	setErrRegister: (state, errMessage) => {
		state.registerErr = errMessage
	},
	logout: (state) => {
		state.accessToken = null;
	}
};
export default {
	state,
	mutations,
	getters,
	actions,

};