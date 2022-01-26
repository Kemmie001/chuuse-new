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
          Login <loader :loading="loading" class="self-center" />
        </button>

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
import toastr from 'toastr'
import loader from '../components/loading.vue'
import { isLoggedIn } from '../util/user'
import 'toastr/build/toastr.css'
export default {
  components: {
    loader
  },
  data() {
    return {
      email: '',
      password: '',
      signIn: false
    }
  },
  computed: {
    loading() {
      return this.$store.getters.logging
    },
    errMessage() {
      return this.$store.getters.getErrMessage
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
      this.isLoading = true
      this.signIn = true
      const loginData = {
        email: this.email,
        password: this.password
      }
      await this.$store.dispatch('loginUser', loginData)
      if (this.errMessage) {
        this.signIn = false
        toastr.error(`${this.errMessage}`, 'Login Error')
        this.email = ''
        this.password = ''
      } else {
        this.signIn = false
        this.$router.push('/user-dashboard')
      }
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
#toast-container > div {
  color: #727070;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  z-index: 999999;

  /* &:hover {
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.07);
  } */
}

.toast-error {
  background-color: #fddddd;
}
#toast-container > .toast-error {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHLSURBVHgBpVRdUsJADE52/BnfOEI9gFjwwfqknkA9gXADbwCcgOEEcAPxBMoTjA+wo/hMvUHfHEfcmLRTKW1A0W+mw/Jl8202mwRBwcQ/KxnzVjMAp0joE4InPK8toQsJ8K48HvU0X8wTT0cnl0iuy6YSrAE7hg6glRc2S2LVkzYS3f4kJiAAj0W7z9WgoQq+sAGBbmBzNKfV4zYsIpfIgpqcBv8AObwq22E/FpxWg5lcobiLIsDc9TUuiS2au919I9FpYpLwOWGFCMKFFoTC8bKlxMiV8V4zCHihneYc9Cp2FH4SnIuQfLIWbs42FogKXuTODKDztNO2DdxP/MBLRVMx4cSmVYJBPER+doIVkFr7cImQ/E/F1HynorAGjn7HLUcJi6Rnkc2ZRJa9fvahck7WcF/aogWjfM7yOdUehYN/NQ7cQDmqtGXgOpsz+VLRHbap7UnYx4nvs/PuTO9fiSLPa1ySovJktG8q1kbkqA4q1I7QBwclxR6/ctk+9nljB/6IeIzZZIwtzUOuySb/NGAjYOdgPPyeUsUB6wc1ZhuIq4s3Bg8JIlOXCbMkv2q/CKOhC86Nx9PFjzdLTyNZ7vOBgz3u9YdC6XwBwf7zAmlxT4EAAAAASUVORK5CYII=') !important;
}
.toast-success {
  background-color: #d9ffec;
}
#toast-container > .toast-success {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGXSURBVHgBpVTNUcJAFP52QcdjOjBWYIYGDBUIenJETajCm1CB2IAEhavgTW9YgemA0AF3xqzfJowQCCSRbyY7m/fyvrx/gTR0HQMHcCDkGaAsKJgLjQ8hAvyE77j1vDRTsSF5dWoUd6kxsBsBQtVeJy4lPuk3H0nU4XOEbBj0tobLCvD2/bVJOGg+MLx7FIeNi4pB0k/9Eof84jiQDHMfKFXHjTeKCfvuhKeJQlBj+mOvCGaYqxMZeVecrIeGV2VR3BVh1BmSrXGOQojInOhaksdrSpuEykyxCljB0U4yXUSlWkm9OJU8rTUrnYsqrp/rvPfyk0UwZYrQwKG8i26NrhOT5iKLfcSAFVYpRRGiRS/bCVkGGeFLhMJPVWnDqNlzk2mjaRki5NhwhLaTLu9ZCMHG1pulLCY5lkEWAuacje16M/7exb7Qm4eIq8wZZEhP+C/Uco0tt83Q/0DdEqyujSIQdKTh/W2p5D4c+mPUrClJdbPvzqmCTtUVyToJ/q0GemmUOOcqGk1r8XXAw4diZ8zhxflP4heefaBbVuhCHwAAAABJRU5ErkJggg==') !important;
}
</style>