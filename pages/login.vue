<template>
  <section class="lg:flex">
    <div class="bg-gray-dark text-white py-32 px-10 lg:px-20">
      <h1 class="header4 pb-4">Login to your account</h1>
      <h2 class="headline py-5">
        Login to your account and manage all your jobs and gigs assigned to you.
      </h2>
      <form action="" class="pt-5" @submit.prevent="loginUser">
        <div class="form-group pb-10">
          <label for="email">Email address</label>
          <input
            v-model="email"
            type="email"
            name="email"
            placeholder="Enter your email address"
            />
        </div>
        <div class="form-group pb-10">
          <label for="Password">Password</label>
          <input
            v-model="password"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <button class="btn-primary w-full py-4 flex justify-center">
          <template v-if="!isLoading">
            Login <loader :loading="loading" class="self-center" />
          </template>
          <template v-else>
            <spinner/>
          </template>
        </button>
        <!-- error message -->
        <div v-if="message" class="p-6 mt-6 bg-white rounded text-red-700">
              {{message}}
        </div>
        <div class="form-group flex lg:hidden pt-10 self-center">
          <p class="headline self-center">Do not have an account yet?</p>
          <nuxt-link to="/getStarted" class="text-primary header7 pl-5">
            Get Started &rightarrow;
          </nuxt-link>
        </div>
      </form>
    </div>
    <div class="hidden lg:flex lg:justify-end login-side pt-32">
      <nuxt-link
        to="/getStarted"
        class="btn-secondary pt-4 h-12 md:mr-10 px-10"
      >
        Get Started &rightarrow;
      </nuxt-link>
    </div>
  </section>
</template>
<script>
import loader from '../components/loading.vue'
import Spinner from '../components/spinner.vue'
import { isLoggedIn } from '../util/user'
export default {
  components: {
    loader,
    Spinner
  },
  data() {
    return {
      email: '',
      password: '',
      isLoading: false,
      message: ''
    }
  },
  computed: {
    loading() {
      return this.$store.getters.logging
    }
  },
  mounted() {
    const x = isLoggedIn()
    if (x) {
      this.$router.push('/user-dashboard')
    }
  },
  methods: {
    async loginUser() {
      // this.isLoading = true
      const loginData = {
        email: this.email,
        password: this.password
      }
      await this.$store.dispatch('loginUser', loginData)
      this.$router.push('/user-dashboard')
    },
    loginUserNew(){
      this.isLoading = true;
      const baseURL = 'https://chuuse-node.herokuapp.com/api/v1/user/login'
      const data = {
        email: this.email,
        password: this.password
      }
      fetch( baseURL, {
              method: 'POST', // or 'PUT'
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(payload => {
              this.isLoading = false
              this.message = payload.message
            })
    }
  }
}
</script>
<style lang="scss" scoped>
@import './assets/scss/mixin.scss';

input,
textarea {
  background: white;
  border: 1px solid white;
  color: #222121;
  display: block;
  padding: 8px;
  margin-top: 0.75rem;
  width: 100%;
  border-radius: 8px;
}

input:focus {
  outline: none;
}

input::placeholder {
  color: #383737;
}

textarea:focus {
  outline: none;
}

textarea::placeholder {
  color: #383737;
}

.login-side {
  background: linear-gradient(#24beca4d, #24beca4d),
    url('../assets/img/login.png');
  background-size: cover;
  width: 50%;
}

.shadow {
  box-shadow: rgba(24, 15, 18, 0.12);
}
</style>