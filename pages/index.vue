<template>
  <div class="">
    <section
      class="justify-between lg:pt-32 lg:px-20 px-8 banner lg:flex pt-24"
    >
      <div class="self-center lg:w-6/12 my-10 md:my-0">
        <h1 class="header1">
          Ready to build a <span class="text-primary">Career</span> in
          <i class="underlined">Tech</i>?
        </h1>
        <p class="headline pt-6">
          Join a well curated network of top-notch experts, by getting trained
          and recruited for remote and freelance projects from various
          high-paying businesses, top cutting-edge startups, and global
          corporations.
        </p>
        <div class="py-10 md:flex">
          <nuxt-link
            to="/getStarted"
            class="btn-primary md:mr-10 p-4 hover:text-white"
          >
            Get Started
          </nuxt-link>
          <div class="flex pt-10 md:pt-0">
            <a
              href="#"
              class="
                flex
                justify-center
                self-center
                shadow-md
                rounded-full
                h-12
                w-12
                bg-white
              "
            >
              <img class="w-3 mx-auto" src="../assets/img/play.svg" alt="" />
            </a>
            <nuxt-link
              to="talent"
              class="pl-4 text-primary self-center cursor-pointer bold-button"
              >Learn More on our Talent Pool</nuxt-link
            >
          </div>
        </div>
      </div>
      <div class="lg:flex hidden lg:w-6/12 w-full">
        <img class="hm-hero" src="../assets/img/hero.png" alt />
      </div>
    </section>
    <section class="bg-gray-medDark lg:px-20 px-8 py-8">
      <div class="md:flex gap-x-10">
        <h2 class="header7 self-center text-primary">Experience with:</h2>
        <carousel
          :pagination-enabled="false"
          :loop="true"
          :per-page-custom="[
            [120, 3],
            [1080, 4],
          ]"
          class="
            w-full
            mt-5
            md:mt-0
          "
          :autoplay="true"
          :mouse-drag="false"
        >
          <slide class="self-center">
            <div>
              <img
                src="../assets/img/partner1.png"
                alt=""
                class="w-20 md:w-32"
              />
            </div>
          </slide>
          <slide class="self-center">
            <div class="">
              <img
                src="../assets/img/partner6.png"
                alt=""
                class="w-14 md:w-20 md:h-20"
              />
            </div>
          </slide>
          <slide class="self-center">
            <div class="">
              <img
                src="../assets/img/partner5.png"
                alt=""
                class="w-20 md:w-32"
              />
            </div>
          </slide>
          <slide class="self-center">
            <div class="">
              <img
                src="../assets/img/partner4.png"
                alt=""
                class="w-20 md:w-32"
              />
            </div>
          </slide>
          <slide class="self-center">
            <div class="">
              <img
                src="../assets/img/partner3.png"
                alt=""
                class="w-20 md:w-32"
              />
            </div>
          </slide>
          <slide class="self-center">
            <div class="">
              <img
                src="../assets/img/partner2.png"
                alt=""
                class="w-20 md:w-32"
              />
            </div>
          </slide>
        </carousel>
      </div>
    </section>
    <section class="justify-between py-20 lg:px-20 px-8 lg:flex">
      <div class="w-3/4 sm:mx-auto md:mx-0 pb-10 lg:pb-0 flex lg:w-4/12">
        <img class="hm-hero" src="../assets/img/why.png" alt />
      </div>
      <div class="lg:w-7/12 lg:self-center">
        <h1 class="header2">Why CHUUSE?</h1>
        <div class="pt-10 grid md:grid-cols-2 gap-10">
          <div class="">
            <h1 class="text-primary header6 pb-3">Virtual Service 💻</h1>
            <p class="para1">
              Register and be a part of chuuse on the go using your internet
              with no physical distance coverage required. Get access to
              everyone of our services at the comfort of your homes anywhere in
              the world
            </p>
          </div>
          <div class="">
            <h1 class="text-primary header6 pb-3">Talent Quality ✨</h1>
            <p class="para1">
              There is an 100% assurance of the quality of talents you get from
              chuuse. We also train, select and recruit the top tech talents in
              each cities we source from.
            </p>
          </div>
          <div class="">
            <h1 class="text-primary header6 pb-3">Service Reliability 🚀</h1>
            <p class="para1">
              Expect reliability not just from our talents but also from chuuse
              as a whole. We ensure consistency there is consistency in results
              given because we only have the best talents to offer here at
              chuuse
            </p>
          </div>
          <div class="">
            <h1 class="text-primary header6 pb-3">
              Diversification of Talents 🎨
            </h1>
            <p class="para1">
              Our talent recruitment focuses on sourcing, recruiting,
              interviewing and hiring high quality talents in underrepresented
              groups, including women, people with disabilities and individuals
              from different racial and ethnic groups.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-primary text-white lg:px-20 px-8 pt-10 pb-16">
      <h1 class="header4 py-5 sm:text-center">
        Tech Skills you want to build a career in
      </h1>
      <h2 class="header7 mb-14 sm:text-center">
        Access a variety of courses that will make you Job-ready and earn cool
        cash in Tech
      </h2>
      <div class="flex px-10 justify-between flex-wrap gap-y-10 gap-x-5 pb-20">
        <div class="">
          <ul class="list-disc">
            <li class="header7 pb-2">Backend engineer</li>
            <li class="header7 pb-2">Front-end engineer</li>
            <li class="header7 pb-2">Fullstack engineer</li>
            <li class="header7 pb-2">Mobile engineer</li>
          </ul>
        </div>
        <div class="">
          <ul class="list-disc">
            <li class="header7 pb-2">QA engineer</li>
            <li class="header7 pb-2">React developer</li>
            <li class="header7 pb-2">Android developer</li>
            <li class="header7 pb-2">IOS developer</li>
          </ul>
        </div>
        <div class="">
          <ul class="list-disc">
            <li class="header7 pb-2">React Native developer</li>
            <li class="header7 pb-2">NodeJs developer</li>
            <li class="header7 pb-2">Python developer</li>
            <li class="header7 pb-2">JavaScript developer</li>
          </ul>
        </div>
        <div class="">
          <ul class="list-disc">
            <li class="header7 pb-2">Java developer</li>
            <li class="header7 pb-2">C# developer</li>
            <li class="header7 pb-2">Devops engineer</li>
            <li class="header7 pb-2">UI/UX developer</li>
          </ul>
        </div>
      </div>
      <div class="flex sm:justify-center mb-5">
        <nuxt-link to="/apply" class="btn-secondary mr-10 px-10 lg:px-16 py-4">
          Get Access Now &rightarrow;
        </nuxt-link>
      </div>
    </section>
    <section class="bg-gray-light sm:text-center py-10 lg:px-20 px-8 banner">
      <h1 class="text-tertiary header6 py-5">Our Partnership</h1>
      <div class="lg:flex justify-center pb-10">
        <div
          class="
            grid grid-cols-2
            md:flex md:justify-between md:flex-wrap
            gap-4 p-4 bg-white rounded shadow-sm
          "
        >
          <div class="mx-auto">
            <img src="../assets/img/bio1.png" alt="" class="" />
          </div>
          <div class="mx-auto">
            <img src="../assets/img/bio2.png" alt="" class="" />
          </div>
          <div class="mx-auto">
            <img src="../assets/img/bio3.png" alt="" class="" />
          </div>
          <div class="mx-auto">
            <img src="../assets/img/bio4.png" alt="" class="" />
          </div>
        </div>
      </div>
      <h1 class="text-primary header3 py-5">Testimonies</h1>
      <div class="lg:mx-28 mb-20">
        <ClientOnly>
          <carousel
            class="flex justify-center w-full"
            :pagination-enabled="false"
            :per-page-custom="[
              [320, 1],
              [1020, 1],
            ]"
          >
            <slide
              v-for="testimonial in testimonials"
              :key="testimonial.id"
              class="slide-content"
            >
              <div class="flex flex-nowrap mt-16 lg:mt-5 items-center">
                <div class="md:z-10">
                  <img
                    class="hidden md:flex lg:w-full rounded-lg"
                    :src="testimonial.image"
                    :alt="testimonial.name"
                  />
                </div>
                <span
                  class="md:-ml-5 px-10 lg:py-10 bg-white shadow-md rounded-xl"
                >
                  <img
                    class="
                      md:hidden
                      flex
                      w-28
                      h-28
                      mx-auto
                      -mt-10
                      mb-10
                      rounded-full
                      lg:w-full
                      rounded-lg
                    "
                    :src="testimonial.image"
                    :alt="testimonial.name"
                  />
                  <p class="pb-16 text-left para1">{{ testimonial.message }}</p>
                  <span class="flex pb-5">
                    <p class="font-bold text-primary">
                      {{ testimonial.name }}
                    </p>
                    <p class="text-medDark px-3 font-bold">-</p>
                    <p class="text-sm para1">{{ testimonial.program }}</p>
                  </span>
                  <div class="flex justify-end">
                    <button
                      class="text-primary pr-3 headline"
                      @click="previous"
                    >
                      &#60;
                    </button>
                    <button class="text-primary headline" @click="next">
                      &#62;
                    </button>
                  </div>
                </span>
              </div>
            </slide>
          </carousel>
        </ClientOnly>
      </div>
      <div
        class="
          md:flex
          w-full
          md:justify-between
          my-5
          py-8
          border-t-2 border-b-2 border-gray-medium
        "
      >
        <div class="text-left md:w-8/12">
          <h1 class="header6">
            Get hired with global companies today with your tech skills
          </h1>
          <p class="headline pt-2">
            Tell us what you do, we’ll take care of the rest.
          </p>
        </div>
        <div class="self-center pt-8 md:pt-0 text-left">
          <nuxt-link
            to="/talent"
            class="btn-primary text-white px-10 lg:px-16 py-4 hover:text-white"
          >
            Join Talent Pool
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          name: 'Fiona Ibhazoboa',
          message:
            'So far it’s been good, It helped me learn Java with the latest features, exposed me to new opportunities in app development',
          program: 'Talent Incubation',
          image: 'test1.png'
        }
      ]
    }
  },
  methods: {
    next() {
      const first = this.testimonials.shift()
      this.testimonials = this.testimonials.concat(first)
    },
    previous() {
      const last = this.testimonials.pop()
      this.testimonials = [last].concat(this.testimonials)
    }
  }
}
</script>
<style lang="scss" scoped>
@import './assets/scss/mixin.scss';

i.underlined {
  position: relative;
  width: auto;
  font-style: normal;

  &::after {
    content: ' ';
    display: inline;
    position: absolute;
    left: 0;
    bottom: -80%;
    width: 100%;
    height: 100%;
    background: url('../assets/img/underline.svg');
    background-size: contain;
    background-repeat: no-repeat;
  }

  /* &.ulong::after {
    background: url('/underline-long.svg');
    background-size: contain;
    background-repeat: no-repeat;
  } */
}

.header1 {
  @include sm {
    font-size: 40px;
    line-height: 50px;
  }
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
</style>