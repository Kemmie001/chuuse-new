<template>
	<div class=" pt-24 lg:py-20 lg:px-20 px-8">
		<div class="pt-10">
			<blogNav /> 
		</div>
		<section class="justify-between banner lg:flex">
			<div class="self-center lg:w-5/12 my-10">
				<blogText />
			</div>
			<div class="hidden lg:flex lg:w-6/12 my-10">
				<div class="relative">
					<img class="hm-hero" src="../assets/img/blog1.png" alt />
					<button class="absolute bottom-4 left-4 btn-primary p-3">
						Programming
					</button>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import blogNav from "../components/blogNav";
	import blogText from "../components/blogText";
	export default {
		data() {
			return {}
		},
		methods: {},
		components: {
			blogNav,
			blogText
		}
	}
</script>
<style lang="scss">
	@import "./assets/scss/mixin.scss";

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

	.ready {
		background: linear-gradient(rgba(24, 15, 18, 0.75), rgba(24, 15, 18, 0.75)), url('../assets/img/ready.png');
		background-size: cover;
		width: 100%;
	}
</style>