<template>
	<div class="">
		Not Found
	</div>
</template>
<script>

</script>
<style lang="scss" scoped>
	@import "./assets/scss/mixin.scss";

	input[type="text"],
	input[type="number"],
	input[type="file"],
	input[type="email"],
	input[type="url"],
	textarea,
	select {
		background: none;
		border: 1px solid rgba(127, 126, 126, 1);
		display: block;
		padding: 8px;
		margin-top: 0.75rem;
		width: 100%;
		border-radius: 8px;
	}
	input[type="checkbox"]{
		align-self: center;
		background: none;
		border: 1px solid rgba(127, 126, 126, 1);
		display: block;
		padding: 16px;
		width: 2rem;
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