<template>
	<section class="lg:flex">
		<div class="bg-gray-dark text-white py-32 px-10 lg:px-20">
		<h1 class="header4 pb-4">Login to your account</h1>
		<h2 class="headline py-5">Login to your account and manage all your jobs and gigs assigned to you.</h2>
		<form action="" class="pt-5">
			<div class="form-group pb-10">
				<label for="email">Email address</label>
				<input type="email" name="email" placeholder="Enter your email address" id="">
			</div>
			<div class="form-group pb-10">
				<label for="Password">Password</label>
				<input type="password" name="password" placeholder="Enter your password" id="">
			</div>
			<button class="btn-primary w-full py-4">
				Submit
			</button>
			<div class="form-group flex lg:hidden pt-10 self-center">
				<p class="headline self-center">Do not have an account yet?</p>
				<nuxt-link to="/getStarted" class="text-primary header7 pl-5">
					Get Started &rightarrow;
				</nuxt-link>
			</div>
		</form>
		</div>
			<div class="hidden lg:flex lg:justify-end login-side pt-32">
				<nuxt-link to="/getStarted" class="btn-secondary pt-4 h-12 md:mr-10 px-10 hover:text-white">
					Get Started &rightarrow;
				</nuxt-link>
			</div>
		</section>
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