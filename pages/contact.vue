<template>
	<section class="bg-gray-light pt-32 lg:py-20 lg:px-20 px-8">
		<div class="text-center py-10">
			<h1 class="header2">Get In Touch!</h1>
			<p class="headline">Fill out the form and our Team will get back to you within 24 hours</p>
		</div>
		<div class="rounded-3xl bg-primary text-white px-10 shadow py-10 my-8">
			<form action="" class="">
				<div class="md:flex justify-between gap-x-20">
					<div class="md:w-5/12">
						<div class="form-group pb-10">
							<label for="name">Name: *</label>
							<input type="text" required class=" rounded-lg" name="name" placeholder="Your full name" id="">
						</div>
						<div class="form-group pb-10">
							<label for="email">Email Address: *</label>
							<input type="email" required class=" rounded-lg" name="email" placeholder="Your email address" id="">
						</div>
						<div class="form-group pb-10">
							<label for="phone">Phone Number: *</label>
							<input type="tel" required class="rounded-lg" name="phone" placeholder="Your phone number" id="">
						</div>
					</div>
					<div class="form-group md:w-5/12 h-full">
						<label for="phone">Your Message: *</label>
						<textarea required cols="30" rows="10" class=" rounded-lg" name="phone" placeholder="Type a message...."
							id=""></textarea>
					</div>
				</div>
				<div class="flex justify-center my-10">
					<button href="" class="btn-secondary mr-10 px-10 lg:px-16 py-4">
						Send Message
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
	input, textarea{
		background: none;
		border: 1px solid white;
		display: block;
		padding: 8px;
		margin-top: 0.75rem;
		width: 100%;
	}
	input:focus{
		outline: none;
	}
	input::placeholder{
		color: white;
	}
	textarea:focus{
		outline: none;
	}
	textarea::placeholder{
		color: white;
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