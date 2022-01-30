<template>
  <section class="bg-gray-light pt-24 md:pt-32 lg:py-20 lg:px-20 px-8">
    <div class="text-center py-10">
      <h1 class="header3 py-3">
        Build A <span class="text-primary">Tech Career</span> Today
      </h1>
      <p class="headline">
        Provide your details below and we will follow up in less than 24Hrs.
      </p>
    </div>
    <div class="md:px-10 pb-10 my-8">
      <form class="" @submit.prevent="applyCohort">
        <div class="">
          <div class="grid md:grid-cols-2 md:justify-between gap-x-20">
            <div class="form-group pb-10">
              <label for="name">First Name: *</label>
              <input
                id=""
                v-model="apply.firstName"
                type="text"
                required
                class="rounded-lg"
                name="name"
                placeholder="Your first name"
              />
            </div>
            <div class="form-group pb-10">
              <label for="name">Last Name: *</label>
              <input
                id=""
                v-model="apply.lastName"
                type="text"
                required
                class="rounded-lg"
                name="name"
                placeholder="Your last name"
              />
            </div>
            <div class="form-group pb-10">
              <label for="email">Email Address: *</label>
              <input
                id=""
                v-model="apply.email"
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
                v-model="apply.phoneNumber"
                type="tel"
                required
                class="rounded-lg"
                name="phone"
                placeholder="Your Phone Number"
              />
            </div>
            <div class="form-group pb-10">
              <label for="level">Highest Level of Education: *</label>
              <select v-model="apply.highestLevelOfEdu">
                <option value="" disabled selected>Select an option</option>
                <option value="ssce">SSCE</option>
                <option value="Tertiary Education">Tertiary Education</option>
                <option value="masters">Masters</option>
                <option value="phd">Phd.</option>
              </select>
            </div>
            <div class="form-group pb-10">
              <label for="course">Course Option: *</label>
              <select v-model="apply.course">
                <option value="" disabled selected>Select Course</option>
                <option value="React">React</option>
                <option value="NodeJs">NodeJs</option>
                <option value="Java">Java</option>
                <option value="Python">Python</option>
                <option value="C#">C#</option>
                <option value="JavaScript">JavaScript</option>
              </select>
            </div>
            <div class="form-group pb-10">
              <label for="stack">Stack you want to learn: *</label>
              <select id="stack" v-model="apply.stack" name="stack">
                <option value="" disabled selected>Select Stack</option>
                <option value="Web development">Web development</option>
                <option value="Mobile App development">
                  Mobile App development
                </option>
                <option value="UI/UX">UI/UX</option>
                <option value="Data Science">Data Science</option>
                <option value="Cloud Computing">Cloud Computing</option>
                <option value="Machine Learning">Machine Learning</option>
              </select>
            </div>
            <div class="form-group pb-10">
              <label for="phone">Where did you hear about us? :</label>
              <select v-model="apply.whereYouHearAboutUs">
                <option value="" disabled selected>
                  Select where you heard about us
                </option>
                <option value="Whatsapp">Whatsapp</option>
                <option value="friend">A friend</option>
                <option value="Facebook">Facebook</option>
                <option value="Instagram">Instagram</option>
                <option value="others">others</option>
              </select>
            </div>
          </div>
        </div>
        <div class="flex justify-center my-5">
          <button href="" class="btn-primary mr-10 px-10 lg:px-32 py-4">
            Submit <loader :loading="loading" class="self-center" />
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
import axios from 'axios'
import toastr from 'toastr'
import loader from '../components/loading.vue'
import 'toastr/build/toastr.css'
export default {
  components: {
    loader
  },
  data() {
    return {
      loading: false,
      apply: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        highestLevelOfEdu: '',
        course: '',
        stack: '',
        whereYouHearAboutUs: ''
      }
    }
  },
  methods: {
    async applyCohort() {
      this.loading = true
      await axios
        .post('https://chuuse-node.herokuapp.com/api/v1/apply-form', {
          firstName: this.apply.firstName,
          lastName: this.apply.lastName,
          email: this.apply.email,
          phoneNumber: this.apply.phoneNumber,
          highestLevelOfEdu: this.apply.highestLevelOfEdu,
          course: this.apply.course,
          stack: this.apply.stack,
          whereYouHearAboutUs: this.apply.whereYouHearAboutUs
        })
        .then(() => {
          toastr.success('Successfully applied please await a response from us')
        })
        .catch((err) => {
          toastr.error(err.response.data.message, 'Application Error')
        })
        .finally(() => {
          this.apply.firstName = ''
          this.apply.lastName = ''
          this.apply.email = ''
          this.apply.phoneNumber = ''
          this.apply.highestLevelOfEdu = ''
          this.apply.course = ''
          this.apply.stack = ''
          this.apply.whereYouHearAboutUs = ''
          this.loading = false
          this.$router.push('/')
        })
    }
  }
}
</script>
<style lang="scss" scoped>
@import './assets/scss/mixin.scss';

.header3 {
  @include sm {
    font-size: 32px;
    line-height: 44px;
  }
}
input,
textarea,
select {
  background: white;
  border: 1px solid rgba(127, 126, 126, 1);
  color: #222121;
  display: block;
  padding: 10px;
  margin-top: 0.75rem;
  width: 100%;
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