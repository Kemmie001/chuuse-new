<template>
	<h1 class="">
		Not Found
	</h1>
</template>
<script>

</script>
<style lang="scss" scoped>
	@import "./assets/scss/mixin.scss";

	.header3 {
		@include sm {
			font-size: 32px;
			line-height: 44px;
		}
	}
	input,
	textarea,
	select {
		background: none;
		border: 1px solid rgba(127, 126, 126, 1);
		display: block;
		padding: 10px;
		margin-top: 0.75rem;
		width: 100%;
		border-radius: 8px;
	}

	select:focus {
		outline: none;
	}

	input:focus {
		outline: none;
	}
	input::placeholder {
		@apply text-gray-medDark;
	}

	textarea:focus {
		outline: none;
	}

	textarea::placeholder {
		@apply text-gray-medDark;
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