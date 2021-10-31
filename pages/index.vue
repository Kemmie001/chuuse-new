<template>
  <h1 class="">
    Not Found
  </h1>
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
            image: 'test1.png',
          },
          {
            name: 'Fiona Barnes',
            message:
              'So far it’s been good, It helped me learn Java with the latest features, exposed me to new opportunities in app development',
            program: 'Talent Incubation',
            image: 'test1.png',
          },
          {
            name: 'Fiona Barnes',
            message:
              'So far it’s been good, It helped me learn Java with the latest features, exposed me to new opportunities in app development',
            program: 'Talent Incubation',
            image: 'test1.png',
          },
        ],
      }
    },
    methods: {
      next() {
        const first = this.testimonials.shift();
        this.testimonials = this.testimonials.concat(first);
      },
      previous() {
        const last = this.testimonials.pop();
        this.testimonials = [last].concat(this.testimonials);
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "./assets/scss/mixin.scss";

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