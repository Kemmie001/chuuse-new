<template>
	<h1 class="">Not Found</h1>
</template>

<script>
	export default {
		data() {
			return {
				menuOpen: false,
				showPro: false,
				showAccelerate: false,
				showLed: false,
				showCrash: false,
			};
		},
		methods: {
			toggleMenu() {
				this.menuOpen = !this.menuOpen;
			},
			togglePro() {
				this.showPro = !this.showPro;
			},
			toggleAccelerate() {
				this.showAccelerate = !this.showAccelerate;
			},
			toggleLed() {
				this.showLed = !this.showLed;
			},
			toggleCrash() {
				this.showCrash = !this.showCrash;
			},
		},
	};
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
</style>