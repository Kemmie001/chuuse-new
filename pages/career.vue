<template>
	<div class="">
		<section class="justify-between lg:pt-32 lg:pl-20 lg:px-0 px-8 banner lg:flex pt-24">
			<div class="self-center lg:w-5/12 my-10">
				<h1 class="header2">
					Ready to build a <span class="text-primary">Career</span> in the Tech Space
				</h1>
				<p class="headline pt-8">
					Chuuse is all about giving you that riveting experience you need to launch your tech career.
				</p>
				<div class="py-10 md:flex">
					<nuxt-link to="/apply" class="btn-primary md:mr-10 p-4 hover:text-white">
						Apply Now
					</nuxt-link>
				</div>
			</div>
			<div class="hidden lg:flex lg:w-6/12 my-10">
				<img class="hm-hero" src="../assets/img/career.png" alt />
			</div>
		</section>
		<article class="justify-between lg:flex lg:pt-16 pt-5 pb-20 lg:px-20 px-8">
			<div class="w-full mx-auto md:mx-0 pb-10 lg::pb-0 flex lg:w-5/12">
				<img class="hm-hero" src="../assets/img/about.png" alt />
			</div>
			<div class="self-center lg:w-6/12">
				<h1 class="header3 md:pt-5">
					About the Institute
				</h1>
				<p class="headline pt-4 md:pt-8">
					Chuuse Institute is an elite technology development company that equips high potential individuals
					with world-class
					technological and leadership skills as well as combined practical exposure through real-life
					projects and corporate
					placements. Also ensuring that our talents are enabled to launch their careers in tech world
					successfully.
				</p>
				<p class="headline pt-4">
					Our training program is a 12 months intensive course programme that is a platform to launching a
					successful career as a
					tech talent. At the end of the program, we guarantee you will become a competitive, industry-ready
					to take up an
					entry-level to mid level software engineer job.
				</p>
				<ul class="list-disc para1 pl-5 pt-5">
					<li class="pb-3">We offer a one on one mentorship oppurtunity with top and established industry
						experts .</li>
					<li class="pb-3">We have a flexible payment options which allows you pay us after you graduate and
						secure a job.</li>
				</ul>
			</div>
		</article>
		<section class="bg-gray-light py-5 md:py-10">
			<h1 class="header3 pt-4 text-center">
				How it Works?
			</h1>
			<article class="justify-between lg:flex lg:pt-16 pt-5 pb-20 lg:px-20 px-5">
				<div class="self-center lg:w-6/12">
					<ul class="para1 pt-5">
						<li class="py-5 mb-8
						bg-white 
						shadow-md 
						hover:bg-gray-dark 
						hover:text-white 
						rounded-xl 
						px-4">
							<span class="flex">
								<div class="rounded-full p-2 flex justify-center self-center bg-white">
									<img src="../assets/img/recruitment.svg" alt="">
								</div>
								<h1 class="header4 self-center ml-4">Recruitment</h1>
							</span>
							<p class="para1 mt-2">We screen to identify fast and quick learners to become a part of
								Chuuse Software
								Engineers</p>
						</li>
						<li class="py-5 mb-8 bg-white shadow-md  hover:bg-gray-dark hover:text-white rounded-xl px-4">
							<span class="flex">
								<div class="rounded-full p-2 flex justify-center self-center bg-white">
									<img src="../assets/img/presentation.svg" alt="">
								</div>
								<h1 class="header4 self-center ml-4">Training</h1>
							</span>
							<p class="para1 mt-2">We deliver an intensive 12 months program (full-stack software
								development + soft skills)</p>
						</li>
						<li class="py-5 bg-white shadow-md  hover:bg-gray-dark hover:text-white rounded-xl px-4">
							<span class="flex">
								<div class="rounded-full p-2 flex justify-center self-center bg-white">
									<img src="../assets/img/startup.svg" alt="">
								</div>
								<h1 class="header4 self-center ml-4">Placement</h1>
							</span>
							<p class="para1 mt-2">We match Chuuse engineers and tech talents with our hiring
								organizations to join their engineering teams full-time</p>
						</li>
					</ul>
				</div>
				<div class="hidden lg:flex lg:w-4/12">
					<img class="hm-hero" src="../assets/img/work.png" alt />
				</div>
			</article>
		</section>
		<div class="ready flex justify-center self-center py-10">
			<div class="pt-5 text-center">
				<h1 class="header4 text-white">Ready to become the Chuuse’n dev ?</h1>
				<div class="py-5 flex justify-center">
					<nuxt-link to="/apply" class="btn-primary md:mr-10 p-4 hover:text-white">
						Apply Now
					</nuxt-link>
				</div>
			</div>
		</div>
	</div>
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