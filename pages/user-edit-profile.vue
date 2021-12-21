<template>
  <section class="bg-gray-light pt-32 lg:py-20 lg:px-20 px-8">
    <div class="pb-10 my-8">
      <form class="" @submit.prevent="editProfile">
        <div class="">
          <div class="form-group mb-5">
            <label
              class="
                file-holder
                relative
                flex
                justify-center
                items-center
                cursor-pointer
              "
              for="poster"
            >
              <div class="flex justify-center items-center flex-col">
                <span
                  v-if="!pict"
                  class="absolute flex flex-col justify-center items-center"
                >
                  <p>Select Profile Photo</p>
                  <i class="uil uil-camera-plus text-4xl"></i>
                </span>
                <img v-if="pict" id="iimm" class="poster" :src="pict" alt="" />
              </div>
              <input
                id="poster"
                name="image"
                type="file"
                @change="selectImage"
              />
            </label>
          </div>
          <div class="grid md:grid-cols-2 md:justify-between gap-x-20">
            <div class="form-group pb-10">
              <label for="firstname">First Name: *</label>
              <input
                id=""
                v-model="user.firstName"
                type="text"
                required
                class="rounded-lg"
                name="firstname"
                placeholder="Your first name"
              />
            </div>
            <div class="form-group pb-10">
              <label for="lastname">Last Name: *</label>
              <input
                id=""
                v-model="user.lastName"
                type="text"
                required
                class="rounded-lg"
                name="lastname"
                placeholder="Your last name"
              />
            </div>
            <div class="form-group pb-10">
              <label for="email">Email Address: *</label>
              <input
                id=""
                v-model="user.email"
                type="email"
                required
                class="rounded-lg"
                name="email"
                placeholder="Your email address"
              />
            </div>
            <div class="form-group pb-10">
              <label for="phone">Phone Number: *</label>
              <input
                id=""
                v-model="user.phone"
                type="number"
                required
                class="rounded-lg"
                name="phone"
                placeholder="Phone Number"
              />
            </div>
            <div class="form-group pb-10">
              <label for="Nationality">Nationality: *</label>
              <select v-model="user.nationality">
                <option value="" disabled selected>Select Your Country</option>
                <option
                  v-for="country in countries"
                  :key="country.index"
                  :value="country.value"
                >
                  {{ country.label }}
                </option>
              </select>
            </div>
            <div class="form-group pb-10">
              <label for="location">Location: *</label>
              <input
                id=""
                v-model="user.location"
                type="text"
                required
                class="rounded-lg"
                name="location"
                placeholder="Location"
              />
            </div>
            <div class="form-group pb-10">
              <label for="experience">Years of Working Experience: *</label>
              <select v-model="user.yearsOfWorkingExperience">
                <option value="" disabled selected>Select an option</option>
                <option value="1">1 year</option>
                <option value="2">2 years</option>
                <option value="3-4">3 - 4 years</option>
                <option value="5-more">5 - more years</option>
                >
              </select>
            </div>
            <div class="form-group pb-10">
              <label for="years"
                >Years of Experience With Primary Stack: *</label
              >
              <select v-model="user.yearsOfExperienceWithPrimaryStack">
                <option value="" disabled selected>Select an option</option>
                <option value="1">1 year</option>
                <option value="2">2 years</option>
                <option value="3-4">3 - 4 years</option>
                <option value="5-more">5 - more years</option>
                >
              </select>
            </div>
            <div class="form-group pb-10">
              <label for="stack">Primary Stack: *</label>
              <select v-model="user.primaryStack">
                <option value="" disabled selected>Select an option</option>
                <option value="Web developer">Web development</option>
                <option value="Mobile App developer">
                  Mobile App. development
                </option>
                <option value="UI/UX Designer">UI/UX</option>
                <option value="Data Scienist">Data Science</option>
                <option value="Cloud Computing Engineer">
                  Cloud Computing
                </option>
                <option value="Machine Learning Expert">
                  Machine Learning
                </option>
              </select>
            </div>
            <div class="form-group pb-10">
              <label for="language">English Proficiency: *</label>
              <select v-model="user.englishProficiency">
                <option value="" disabled selected>Select an option</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Native">Native</option>
              </select>
            </div>
            <div class="form-group pb-10">
              <label for="phone"
                >Portfolio Link (E.g Github, Dribble, Behance and so on)</label
              >
              <input
                id=""
                v-model="user.portfolioLink"
                type="url"
                placeholder="Your Portfolio Link"
                required
                name=""
              />
            </div>
            <div class="form-group pb-10">
              <label for="Resume">Resume: *</label>
              <input
                id=""
                v-model="user.resumeFileUrl"
                type="url"
                name="Resume"
                placeholder="Upload Resume Link"
              />
            </div>
          </div>
        </div>
        <div class="form-group pb-10 flex">
          <input
            id=""
            type="checkbox"
            name="file"
            placeholder="Drag files here or click to add files"
          />
          <span class="para1 pl-3">
            I agree to Chuuse's
            <a href="#" class="text-primary"> Terms & Conditions</a>
          </span>
        </div>
        <div class="form-group pb-10 flex">
          <input
            id=""
            type="checkbox"
            name="file"
            placeholder="Drag files here or click to add files"
          />
          <p class="para1 pl-3">
            I understand that Chuuse will process my information in accordance
            with their <a href="#" class="text-primary"> Privacy Policy </a> . I
            may withdraw my consent through unsubscribe links at any time.
          </p>
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
export default {
  layout: 'empty',
  data() {
    return {
      pict: null,
      user: {
        nationality: '',
        portfolioLink: '',
        firstName: '',
        lastName: '',
        email: '',
        englishProficiency: '',
        phone: '',
        location: '',
        yearsOfWorkingExperience: '',
        yearsOfExperienceWithPrimaryStack: '',
        resumeFileUrl: '',
        primaryStack: ''
      },
      id: this.$store.getters['user/getData']._id
    }
  },
  computed: {
    countries() {
      const list = countries.getNames('en', { select: 'official' })
      return Object.keys(list).map((key) => ({ value: key, label: list[key] }))
    }
  },
  mounted() {
    this.getUserData()
    this.$store.dispatch('user/getUser')
  },
  methods: {
    selectImage(x) {
      const vm = this
      const input = x.target.files
      // eslint-disable-next-line prefer-destructuring
      this.profileImage = input[0]
      if (input && input[0]) {
        const reader = new FileReader()
        reader.onload = (e) => {
          vm.pict = e.target.result
        }
        reader.readAsDataURL(input[0])
      }
    },
    getUserData() {
      axios
        .get(`https://chuuse-node.herokuapp.com/api/v1/user/${this.id}`, {
          headers: {
            'x-id-key': JSON.parse(window.localStorage.getItem('e-l-key'))
          }
        })
        .then((res) => {
          this.user = res.data.data
        })
    },
    // not working yaet
    async editProfile() {
      const editPayload = {
        nationality: this.user.nationality,
        portfolioLink: this.user.portfolioLink,
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email,
        englishProficiency: this.user.englishProficiency,
        yearsOfWorkingExperience: this.user.yearsOfWorkingExperience,
        yearsOfExperienceWithPrimaryStack:
          this.user.yearsOfExperienceWithPrimaryStack,
        resumeFileUrl: this.user.resumeFileUrl,
        primaryStack: this.user.primaryStack,
        location: this.user.location,
        phone: this.user.phone
      }
      await this.$store.dispatch('user/editUser', editPayload)
      this.user.firstName = ''
      this.user.lastName = ''
      this.user.email = ''
      this.user.englishProficiency = ''
      this.user.yearsOfWorkingExperience = ''
      this.user.yearsOfExperienceWithPrimaryStack = ''
      this.user.resumeFileUrl = ''
      this.user.primaryStack = ''
      this.user.nationality = ''
      this.user.portfolioLink = ''
      this.user.location = ''
      this.user.phone = ''
      this.$router.push('/user-dashboard')
    }
  }
}
</script>
<style lang="scss" scoped>
@import './assets/scss/mixin.scss';

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
input[type='file'] {
  display: none;
}

input[type='text'],
input[type='number'],
input[type='email'],
input[type='url'],
input[type='password'],
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
input[type='checkbox'] {
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