<template>
  <section class="pt-24 md:pt-32 lg:py-20 lg:px-20 px-8">
    <div class="md:text-center md:pt-5">
      <h1 class="header3 py-4">Get In Touch!</h1>
      <p class="headline">
        Fill out the form and our Team will get back to you within 24 hours
      </p>
    </div>
    <div
      class="rounded-xl bg-primary text-white p-4 md:px-10 shadow md:py-10 my-8"
    >
      <form action="" class="" @submit.prevent="postContact">
        <div class="md:flex md:justify-between gap-x-20">
          <div class="md:w-5/12">
            <div class="form-group pb-10">
              <label for="name">Name: *</label>
              <input
                id=""
                v-model="contact.name"
                type="text"
                required
                class="rounded-lg"
                name="name"
                placeholder="Your full name"
              />
            </div>
            <div class="form-group pb-10">
              <label for="email">Email Address: *</label>
              <input
                id=""
                v-model="contact.email"
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
                v-model="contact.phone"
                type="tel"
                required
                class="rounded-lg"
                name="phone"
                placeholder="Your phone number"
              />
            </div>
          </div>
          <div class="form-group md:w-5/12 h-full">
            <label for="phone">Your Message: *</label>
            <textarea
              id=""
              v-model="contact.message"
              required
              cols="30"
              rows="10"
              class="rounded-lg"
              name="phone"
              placeholder="Type a message...."
            ></textarea>
          </div>
        </div>
        <div class="flex justify-center my-10">
          <button href="" class="btn-secondary mr-10 px-10 lg:px-16 py-4">
            Send Message
            <loader :loading="loading" class="self-center bg-primary" />
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
      contact: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    }
  },
  methods: {
    async postContact() {
      this.loading = true
      await axios
        .post('https://chuuse-node.herokuapp.com/api/v1/contact-form', {
          fullName: this.contact.name,
          email: this.contact.email,
          phoneNumber: this.contact.phone,
          message: this.contact.message
        })
        .then(() => {
          toastr.success(
            'We have recieved your message, we will reply you shortly'
          )
        })
        .catch((err) => {
          toastr.error(
            err.response.data.message,
            'An error occured please try again'
          )
        })
        .finally(() => {
          this.contact.name = ''
          this.contact.email = ''
          this.contact.phone = ''
          this.contact.message = ''
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
textarea {
  background: white;
  border: 1px solid white;
  color: #2e2e2e;
  display: block;
  padding: 8px;
  margin-top: 0.75rem;
  width: 100%;
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