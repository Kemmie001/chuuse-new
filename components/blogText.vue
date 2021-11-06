<template>
	<div class="">
		<h1 class="header4">
			Lorem ipsum dolor sit amet
		</h1>
		<div class="">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eget erat pulvinar scelerisque mattis. Ipsum sollicitudin
			pellentesque nulla proin pellentesque. Pharetra vitae, in habitasse libero integer ipsum at eget. Leo, enim lacinia
			pretium tincidunt adipiscing purus. Aliquet vitae netus non quam auctor. Sapien eros, nec blandit magna. Eget ipsum
			integer fringilla duis. Dolor aliquet pretium aliquet sed ac, elit.
		</div>
		<div class="flex justify-between py-8">
			<div class="flex">
				<img src="../assets/img/author.png" alt="">
				<span class="self-center pl-4">
					<h3 class="label">
						Daniel Olowokere
					</h3>
					<p class="caption">
						Author
					</p>
				</span>
			</div>
			<p class="">5 mins read</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {},
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