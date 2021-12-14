<template>
	<section class="pt-24 md:pt-32 lg:py-20 lg:px-20 px-8">
		<div class="md:text-center md:pt-5">
			<h1 class="header3 py-4">Verify your email address</h1>
			<p class="headline">We emailed you a five-digit code to <i class="font-semibold">{{user}}</i>. <br> 
				Enter the code below to confirm your email address</p>
		</div>
		<div class="rounded-xl bg-primary text-white p-4 md:px-10 shadow md:py-10 my-8">
			<form action="" class="" @submit.prevent="verifyEmail">
				<div class="flex justify-center">
					<ClientOnly>
						<!-- <CodeInput class="input" :loading="true" :fields="5" @change="onChange" @complete="onComplete" /> -->
					</ClientOnly>
				</div>
				<div class="flex justify-center my-10">
					<button href="" class="btn-secondary px-10 lg:px-16 py-4">
						Verify Email
					</button>
				</div>
			</form>
		</div>
	</section>
</template>
<script>
// import { mapGetters} from 'vuex';
// import CodeInput from "vue-verification-code-input"
export default {
	components: {
		// CodeInput,
	},
	data() {
		return{
			fields: {
				type: Number,
				default: 6
			}
		}
	},
	computed: {
		// ...mapGetters({
		// 	user: "getEmail"
		// })

	},
	methods: {
	onChange(v) {
    //   console.log("onChange ", v);
    },
    onComplete(v) {
    //   console.log("onComplete ", v);
    }
	}

}

</script>
<style lang="scss" scoped>
	@import "./assets/scss/mixin.scss";
	.header3 {
		@include sm {
			font-size: 32px;
			line-height: 44px;
		}
	}
	input, textarea{
		background: none;
		border: 2px solid white;
		display: block;
		padding: 8px;
		margin-top: 0.75rem;
		width: 40px;
		height: 40px;
	}
	input:focus{
		outline: none;
	}
	input::placeholder{
		color: white;
	}
	textarea:focus{
		outline: none;
	}
	textarea::placeholder{
		color: white;
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