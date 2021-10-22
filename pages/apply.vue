<template>
	<section class="bg-gray-light pt-24 md:pt-32 lg:py-20 lg:px-20 px-8">
		<div class="text-center py-10">
			<h1 class="header3 py-3">Build A <span class="text-primary">Tech Career</span> Today</h1>
			<p class="headline">Provide your details below and we will follow up in less than 24Hrs.</p>
		</div>
		<div class="md:px-10 pb-10 my-8">
			<form action="" class="">
				<div class="md:flex justify-between gap-x-20">
					<div class="md:w-5/12">
						<div class="form-group pb-10">
							<label for="name">First Name: *</label>
							<input type="text" required class=" rounded-lg" name="name" placeholder="Your full name" id="">
						</div>
						<div class="form-group pb-10">
							<label for="email">Email Address: *</label>
							<input type="email" required class=" rounded-lg" name="email" placeholder="Your email address" id="">
						</div>
						<div class="form-group pb-10">
							<label for="phone">Highest Level of Education: *</label>
							<Select placeholder="Select an option">
								<option value="ssce">SSCE</option>
								<option value="tet">Tertiary Education</option>
								<option value="masters">Masters</option>
								<option value="phd">Phd.</option>
							</Select>
						</div>
						<div class="form-group pb-10">
							<label for="phone">Stack you want to learn: *</label>
							<Select placeholder="Select an option">
								<option value="web">Web development</option>
								<option value="Mobile">Mobile App. development</option>
								<option value="ui">UI/UX</option>
								<option value="data">Data Science</option>
								<option value="cloud">Cloud Computing</option>
								<option value="ml">Machine Learning</option>
							</Select>
						</div>
					</div>
					<div class="md:w-5/12">
						<div class="form-group pb-10">
							<label for="name">Last Name: *</label>
							<input type="text" required class=" rounded-lg" name="name" placeholder="Your full name" id="">
						</div>
						<div class="form-group pb-10">
							<label for="phone">Phone Number: *</label>
							<input type="tel" required class=" rounded-lg" name="phone" placeholder="Your email address" id="">
						</div>
						<div class="form-group pb-10">
							<label for="phone">Course Option: *</label>
							<Select>
								<option value="be">React</option>
								<option value="node">NodeJs</option>
								<option value="java">Java</option>
								<option value="Python">Python</option>
								<option value="c">C#</option>
								<option value="JavaScript">JavaScript</option>
							</Select>
						</div>
						<div class="form-group pb-10">
							<label for="phone">Where did you hear from us? :</label>
							<Select placeholder="Select an option">
								<option value="whs">What's app</option>
								<option value="friend">A friend</option>
								<option value="fb">Facebook</option>
								<option value="ig">Instagram</option>
								<option value="others">others</option>
							</Select>
						</div>
					</div>
				</div>
				<div class="flex justify-center my-5">
					<button href="" class="btn-primary mr-10 px-10 lg:px-32 py-4">
						Submit
					</button>
				</div>
			</form>
		</div>
	</section>
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
		padding: 8px;
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