<template>
	<div class="">
		Not Found
	</div>
</template>
<script>

</script>
<style lang="scss" scoped>
	@import "./assets/scss/mixin.scss";

	input,
	textarea {
		background: none;
		border: 1px solid white;
		display: block;
		padding: 8px;
		margin-top: 0.75rem;
		width: 100%;
		border-radius: 8px;
	}

	input:focus {
		outline: none;
	}

	input::placeholder {
		color: white;
	}

	textarea:focus {
		outline: none;
	}

	textarea::placeholder {
		color: white;
	}

	.login-side{
		background:  linear-gradient(#24beca4d, #24beca4d), url('../assets/img/login.png');
		background-size: cover;
		width: 50%;
	}

	.shadow {
		box-shadow: rgba(24, 15, 18, 0.12);
	}
</style>