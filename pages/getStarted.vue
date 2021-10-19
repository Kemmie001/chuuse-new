<template>
	<section class="bg-gray-light pt-32 lg:py-20 lg:px-20 px-8">
		<section class="justify-between banner lg:flex py-10">
			<div class="self-center lg:w-5/12 text-neutral">
				<h1 class="header2">
					Work With The World’s
					Leading Companies
				</h1>
				<p class="para1 pt-8">
					By applying to join our Talent pool, you are getting closer to getting your next role, advancing your career, and
					connecting with other talented engineers in our community. Cheers to that 🥂!
				</p>
				<div class="pt-5">
					<p class="para1">Here's what you should expect after you submit this form:</p>
					<ul class="list-disc para1 pl-5 pt-5">
						<li class="pb-3">A short assessment to test your fluency in English (15 mins)</li>
						<li class="pb-3">A HackerRank coding challenge (1 hour)</li>
						<li class="pb-3">A live technical interview with a senior developer (1 hour)</li>
					</ul>
				</div>
			</div>
			<div class="hidden lg:flex lg:w-6/12">
				<img class="hm-hero" src="../assets/img/hero2.png" alt />
			</div>
		</section>
		<h2 class="header7 mt-10">By applying to join our Talent pool, you are getting closer to getting your next role, advancing
			your career, and
			connecting with other talented engineers in our community. Cheers to that 🥂!</h2>
		<div class="pb-10 my-8">
			<form action="" class="">
				<div class="md:flex justify-between gap-x-20">
					<div class="md:w-5/12">
						<div class="form-group pb-10">
							<label for="name">First Name: *</label>
							<input type="text" required class=" rounded-lg" name="name" placeholder="Your full name"
								id="">
						</div>
						<div class="form-group pb-10">
							<label for="email">Email Address: *</label>
							<input type="email" required class=" rounded-lg" name="email"
								placeholder="Your email address" id="">
						</div>
						<div class="form-group pb-10">
							<label for="phone">English Proficiency: *</label>
							<Select placeholder="Select an option">
								<option value="ssce">Beginner</option>
								<option value="tet">Intermediate</option>
								<option value="masters">Advanced</option>
								<option value="phd">Native</option>
							</Select>
						</div>
						<div class="form-group pb-10">
							<label for="phone">Primary Stack: *</label>
							<Select placeholder="Select an option">
								<option value="web">Web development</option>
								<option value="Mobile">Mobile App. development</option>
								<option value="ui">UI/UX</option>
								<option value="data">Data Science</option>
								<option value="cloud">Cloud Computing</option>
								<option value="ml">Machine Learning</option>
							</Select>
						</div>
						<div class="form-group pb-10">
							<label for="file">Resume: *</label>
							<input type="file" name="file" id="" placeholder="Drag files here or click to add files">
						</div>
					</div>
					<div class="md:w-5/12">
						<div class="form-group pb-10">
							<label for="name">Last Name: *</label>
							<input type="text" required class=" rounded-lg" name="name" placeholder="Your full name"
								id="">
						</div>
						<div class="form-group pb-10">
							<label for="phone">Nationality: *</label>
							<input type="text" required class=" rounded-lg" name="phone" placeholder="Your Nationality"
								id="">
						</div>
						<div class="form-group pb-10">
							<label for="phone">Years of Working Experience: *</label>
							<Select>
								<option value="be">1 year</option>
								<option value="node">2 years</option>
								<option value="java">3 - 4 years</option>
								<option value="Python">5 - more years</option>>
							</Select>
						</div>
						<div class="form-group pb-10">
							<label for="phone">Years of Experience With Primary Stack: *</label>
							<Select>
								<option value="be">1 year</option>
								<option value="node">2 years</option>
								<option value="java">3 - 4 years</option>
								<option value="Python">5 - more years</option>>
							</Select>
						</div>
						<div class="form-group pb-10">
							<label for="phone">Years of Working Experience: *</label>
							<input type="url" placeholder="Your portfolio link" required name="" id="">
						</div>
					</div>
				</div>
				<div class="form-group pb-10 flex">
					<input type="checkbox" name="file" id="" placeholder="Drag files here or click to add files">
					<span class="para1">
						I agree to Chuuse's <a href="#" class="text-primary"> Terms & Conditions</a>
					</span>
				</div>
				<div class="form-group pb-10 flex">
					<input type="checkbox" name="file" id="" placeholder="Drag files here or click to add files">
					<p class="para1">I understand that Chuuse will process my information in accordance with their <a href="#" class="text-primary"> Privacy
						Policy </a>. I may withdraw my consent
					through unsubscribe links at any time.</p>
				</div>
				<div class="flex justify-center my-10 gap-x-5 md:gap-x-10">
					<button class="btn-primary px-10 lg:px-32 py-4">
						Submit
					</button>
					<div class="form-group flex self-center">
						<p class="headline self-center">Already have an account setup?</p>
						<nuxt-link to="/login" class="text-primary header7 pl-5">
							Login &rightarrow;
						</nuxt-link>
					</div>
				</div>
			</form>
		</div>
	</section>
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