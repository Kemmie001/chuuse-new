<template>
	<h1 class="">
		Not Found
	</h1>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {}
	}
</script>
<style lang="scss">
	@import "./assets/scss/mixin.scss";

	/* .header2 {
		@include sm {
			font-size: 36px;
			line-height: 48px;
		}
	}
	.header3 {
		@include sm {
			font-size: 32px;
			line-height: 44px;
		}
	}
	.header4 {
		@include sm {
			font-size: 28px;
			line-height: 32px;
		}
	}
	.headline {
		@include sm {
			font-size: 18px;
			line-height: 24px;
		}
	}
	.para1 {
		@include sm {	
			font-size: 16px;
			line-height: 22px;
		}
	} */
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