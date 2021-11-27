<template>
	<section class="bg-gray-light pt-32 lg:py-20 lg:px-20 px-8">
		<div class="pb-10 my-8">
			<form class="" @submit="editProfile">
				<div class="">
					<div class="form-group mb-5">
							<label class="file-holder relative flex justify-center items-center cursor-pointer" for="poster">
							<div class="flex justify-center items-center flex-col">
								<span v-if="!pict" class="absolute flex flex-col justify-center items-center">
								<p>Select Profile Photo</p>
								<i class="uil uil-camera-plus text-4xl"></i>
								</span>
								<img v-if="pict" id="iimm" class="poster" :src="pict" alt="">
							</div>
							<input id="poster" name="image" type="file" @change="selectImage">
							</label>
						</div>
					<div class="grid md:grid-cols-2 md:justify-between gap-x-20">
						<div class="form-group pb-10">
							<label for="firstname">First Name: *</label>
							<input id="" v-model="firstName" type="text" required class=" rounded-lg" name="firstname"
								placeholder="Your first name">
						</div>
						<div class="form-group pb-10">
							<label for="lastname">Last Name: *</label>
							<input id="" v-model="lastName" type="text" required class=" rounded-lg" name="lastname" placeholder="Your last name">
						</div>
						<div class="form-group pb-10">
							<label for="email">Email Address: *</label>
							<input id="" v-model="email" type="email" required class=" rounded-lg"
								name="email" placeholder="Your email address">
						</div>
						<div class="form-group pb-10">
							<label for="phone">Phone Number: *</label>
							<input id="" v-model="phone" type="phone" required class="rounded-lg"
								name="phone" placeholder="Phone Number">
						</div>
						<div class="form-group pb-10">
							<label for="Nationality">Nationality: *</label>
							<select v-model="nationality">
								<option value="" disabled selected>Select Your Country</option>
								<option v-for="country in countries" :key="country.index" :value="country.value">
								{{ country.label }}
								</option>
							</select>
						</div>
						<div class="form-group pb-10">
							<label for="location">Locationion: *</label>
							<input id="" v-model="location" type="text" required class=" rounded-lg"
								name="location" placeholder="Location">
						</div>
						<div class="form-group pb-10">
							<label for="experience">Years of Working Experience: *</label>
							<select v-model="yearsOfWorkingExperience">
								<option value="" disabled selected>Select an option</option>
								<option value="1">1 year</option>
								<option value="2">2 years</option>
								<option value="3-4">3 - 4 years</option>
								<option value="5-more">5 - more years</option>>
							</select>
						</div>
						<div class="form-group pb-10">
							<label for="years">Years of Experience With Primary Stack: *</label>
							<select v-model="yearsOfExperienceWithPrimaryStack">
								<option value="" disabled selected>Select an option</option>
								<option value="1">1 year</option>
								<option value="2">2 years</option>
								<option value="3-4">3 - 4 years</option>
								<option value="5-more">5 - more years</option>>
							</select>
						</div>
						<div class="form-group pb-10">
							<label for="stack">Primary Stack: *</label>
							<select v-model="primaryStack">
								<option value="" disabled selected>Select an option</option>
								<option value="Web development">Web development</option>
								<option value="Mobile App">Mobile App. development</option>
								<option value="UI/UX">UI/UX</option>
								<option value="Data Science">Data Science</option>
								<option value="Cloud Computing">Cloud Computing</option>
								<option value="Machine Learning">Machine Learning</option>
							</select>
						</div>
						<div class="form-group pb-10">
							<label for="language">English Proficiency: *</label>
							<select v-model="englishProficiency">
								<option value="" disabled selected>Select an option</option>
								<option value="Beginner">Beginner</option>
								<option value="Intermediate">Intermediate</option>
								<option value="Advanced">Advanced</option>
								<option value="Native">Native</option>
							</select>
						</div>
						<div class="form-group pb-10">
							<label for="phone">Your Portfolio Link: *</label>
							<input id="" v-model="portfolioLink" type="url" placeholder="Your Portfolio Link" required name="">
						</div>
						<div class="form-group pb-10">
							<label for="Resume">Resume: *</label>
							<input id="" v-model="resumeFileUrl" type="url" name="Resume" placeholder="Upload Resume Link">
						</div>
					</div>
				</div>
				<div class="form-group pb-10 flex">
					<input id="" type="checkbox" name="file" placeholder="Drag files here or click to add files">
					<span class="para1 pl-3">
						I agree to Chuuse's <a href="#" class="text-primary"> Terms & Conditions</a>
					</span>
				</div>
				<div class="form-group pb-10 flex">
					<input id="" type="checkbox" name="file" placeholder="Drag files here or click to add files">
					<p class="para1 pl-3">
						I understand that Chuuse will process my information in accordance with their <a href="#" class="text-primary"> Privacy
						Policy </a> . I may withdraw my consent
					through unsubscribe links at any time.</p>
				</div>
				<div class="flex justify-center my-10 gap-x-5 md:gap-x-10">
					<button class="btn-primary px-10 lg:px-32 py-4">
						Update Profile
					</button>
				</div>
			</form>
		</div>
	</section>
</template>
<script>
import axios from 'axios'
const countries = require('i18n-iso-countries')
countries.registerLocale(require('i18n-iso-countries/langs/en.json'))
export default{
	layout: "empty",
	data(){
		return{
			pict: null,
			nationality: '',
			portfolioLink: '',
			firstName: '',
			lastName: '',
			email: '',
			englishProficiency: '',
			yearsOfWorkingExperience: '',
			yearsOfExperienceWithPrimaryStack: '',
			resumeFileUrl: '',
			password: '',
			primaryStack: '',
		}
	},
	computed: {
    countries () {
      const list = countries.getNames('en', { select: 'official' })
      return Object.keys(list).map((key) => ({ value: key, label: list[key] }))
    }
  },
  methods: {
	selectImage(x) {
      const vm = this;
      const input = x.target.files;
      // eslint-disable-next-line prefer-destructuring
      this.profileImage = input[0];
      if (input && input[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          vm.pict = e.target.result;
        };
        reader.readAsDataURL(input[0]);
      }
    },
	  async editProfile(){
			await axios.put('https://localhost/api/v1/user/register',
			{
				nationality: this.nationality,
				portfolioLink: this.portfolioLink,
				firstName: this.firstName,
				lastName: this.lastName,
				email: this.email,
				englishProficiency: this.englishProficiency,
				yearsOfWorkingExperience: this.yearsOfWorkingExperience,
				yearsOfExperienceWithPrimaryStack: this.yearsOfExperienceWithPrimaryStack,
				resumeFileUrl: this.resumeFileUrl,
				password: this.password,
				primaryStack: this.primaryStack,
			})
			this.firstName = ''
			this.lastName =''
			this.email = ''
			this.password = ''
			this.englishProficiency = ''
			this.yearsOfWorkingExperience = ''
			this.yearsOfExperienceWithPrimaryStack = ''
			this.resumeFileUrl = ''
			this.primaryStack= ''
			this.nationality = ''
			this.portfolioLink = ''
		}
  }
}
</script>
<style lang="scss" scoped>
	@import "./assets/scss/mixin.scss";

	  .file-holder {
		display: flex;
		@apply bg-gray-medium;
		border: 1px solid #c4c4c4;
		color: #ffffff;
		border-radius: 50%;
		width: 170px;
		height: 170px;
		img.poster {
		border-radius: 50%;
		width: 170px;
		height: 170px;
		overflow: hidden;
		object-fit: cover;
		}
	}
	input[type="file"] {
		display: none;
	}

	input[type="text"],
	input[type="number"],
	input[type="email"],
	input[type="url"],
	input[type="password"],
	textarea,
	select {
		background: none;
		border: 1px solid rgba(127, 126, 126, 1);
		display: block;
		padding: 8px;
		margin-top: 0.75rem;
		width: 100%;
		border-radius: 8px;
	}
	input[type="checkbox"]{
		align-self: center;
		background: none;
		border: 1px solid rgba(127, 126, 126, 1);
		display: block;
		padding: 16px;
		width: 2rem;
		border-radius: 8px;
	}

	select:focus {
		outline: none;
	}

	input:focus {
		outline: none;
	}

	input::placeholder {
		@apply text-gray-medDark;
	}

	textarea:focus {
		outline: none;
	}

	textarea::placeholder {
		@apply text-gray-medDark;
	}

	.hm-hero {
		@include md {
			width: 500px;
			height: 100%;
			object-fit: contain;
		}

		@include xl {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}

	.shadow {
		box-shadow: rgba(24, 15, 18, 0.12);
	}
</style>