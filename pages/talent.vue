<template>
	<div class="">
		<section class="justify-between lg:pt-32 lg:pl-20 lg:px-0 px-8 bg-gray-dark text-white lg:flex pt-24">
			<div class="self-center lg:w-6/12">
				<h1 class="header3">
					Join a community of Software Engineers. Get hired by High paying companies
				</h1>
				<p class="headline pt-8">
					Gain access to top software engineering talents in the industry.
				</p>
				<div class="py-10 md:flex">
					<nuxt-link to="/getStarted" class="btn-primary md:mr-10 p-4 hover:text-white">
						Get Started
					</nuxt-link>
				</div>
			</div>
			<div class="hidden lg:flex justify-end lg:w-6/12 -mb-10">
				<img class="hm-hero w-5/6" src="../assets/img/talent.png" alt />
			</div>
		</section>
		<article class="lg:pt-24 pt-16 pb-20 lg:px-20 px-8">
			<div class="w-full text-center">
				<h3 class="header4 mx-auto md:w-3/4 py-5">
					Why you should join our community of the Chuuse’s Fellowship Programme
				</h3>
			</div>
			<div class="pt-5 md:flex md:gap-x-10 md:justify-between w-full">
				<div class="shadow-md rounded-xl p-3 mb-5 md:mb-0">
					<h6 class="header7 py-3">
						Fast-Tracked Hiring Process
					</h6>
					<p class="para1 pb-3">
						Save time and money we’ll match you with vetted companies in no time.
					</p>
				</div>
				<div class="shadow-md rounded-xl p-3 mb-5 md:mb-0">
					<h6 class="header7 py-3">
						Premium Engineering Talent
					</h6>
					<p class="para1 pb-3">
						Become a premium talent by undergoing series of assessments, intensive training and drills .
					</p>
				</div>
				<div class="shadow-md rounded-xl p-3">
					<h6 class="header7 py-3">
						Career Coaching & Guidance
					</h6>
					<p class="para1 pb-3">
						Our team is focused on your long-term career growth. Your profile is reviewed and role matched
					</p>
				</div>
			</div>
		</article>
		<section class="bg-gray-light lg:justify-between lg:flex py-5 pt-16 mb-16 lg:px-20 px-8">
			<div class="hidden lg:flex lg:w-5/12">
				<img class="hm-hero" src="../assets/img/talentw.png" alt />
			</div>
			<div class="self-center lg:w-6/12">
				<h1 class="header4">So how does this work?</h1>
				<ul class="para1 pt-5 list-disc ml-8">
					<li class="mb-3">
						<h5 class="header6">Register:</h5>
						<p class="para1 py-2">Register to join the Chuuse Talent Network</p>
					</li>
					<li class="mb-3">
						<h5 class="header6">Coding Challenge :</h5>
						<p class="para1 py-2">Test and demonstrate your technical ability by solving a coding challenge
							created by a team of experts.</p>
					</li>
					<li class="mb-3">
						<h5 class="header6">Technical Interview:</h5>
						<p class="para1 py-2">Talk through your decision-making and problem-solving methodologies with
							our team through a pair programming exercises
							and be sure we have just the right fit for you</p>
					</li>
					<li class="mb-3">
						<h5 class="header6">Personalized Matching :</h5>
						<p class="para1 py-2">Get matched to the best cultural and technical fit work opportunities that
							is suitable for you.</p>
					</li>
				</ul>
			</div>
		</section>
		<div class="bg-primary flex justify-center self-center py-10 lg:px-20 px-8">
			<div class="pt-5 text-center">
				<div class="w-full">
					<h1 class="header6 text-white mx-auto md:w-3/4 mb-3">Need some help or have some questions about
						joining the talent pool ?
						Request a call and we’ll be here to help you .</h1>
				</div>
				<div class="py-5 flex justify-center">
					<nuxt-link to="/apply" class="btn-white md:mr-10 p-4 text-primary">
						Request a Call
					</nuxt-link>
				</div>
			</div>
		</div>
		<section class="faq bg-white">
			<div class="lg:pt16 pt-10 pb-20 lg:px-20 px-8">
				<h1 class="header4 py-6 text-center">FAQ</h1>
				<div class="">
					<div class="collapsible-header flex py-3 justify-between" @click="toggleMenu">
						<h1 class="header7 cursor-pointer">
							Am I paying a subscription fee?
						</h1>
						<span class="cursor-pointer"><i class="uil uil-angle-down text-2xl"></i></span>
					</div>
					<p v-show="menuOpen" class="para1">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Minus fugit, odio eos similique perferendis dignissimos quasi quaerat ea qui dolore molestiae,
						alias quos,
						ullam officiis explicabo rem ab praesentium a.
					</p>
				</div>
				<div class="">
					<div class="collapsible-header flex py-3 justify-between" @click="toggleLed">
						<h1 class="header7 cursor-pointer">
							Can an engineer decide to opt-out of the employment contract?
						</h1>
						<span class="cursor-pointer"><i class="uil uil-angle-down text-2xl"></i></span>
					</div>
					<p v-show="showLed" class="para1">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minus perspiciatis omnis, id
						quasi qui, culpa consequuntur, possimus rem eaque aspernatur maxime veritatis voluptate
						temporibus.
						Aspernatur saepe voluptatem temporibus aliquam.
					</p>
				</div>
				<div class="">
					<div class="collapsible-header flex py-3 justify-between" @click="toggleCrash">
						<h1 class="header7 cursor-pointer">
							Can I terminate the employment with an engineer that has been promoted to full-time contract
							staff and get a
							replacement?
						</h1>
						<span class="cursor-pointer"><i class="uil uil-angle-down text-2xl"></i></span>
					</div>
					<p v-show="showCrash" class="para1">
						Accelerator programs are Instructor-Led programs spanning between 5-8
						weeks
					</p>
				</div>
				<div class="">
					<div class="collapsible-header flex py-3 justify-between" @click="toggleAccelerate">
						<h1 class="header7 cursor-pointer">
							Can I terminate the employment of an engineer immediately after the internship & training
							phase (not promote him/her to
							full-time contract staff)?
						</h1>
						<span class="cursor-pointer"><i class="uil uil-angle-down text-2xl"></i></span>
					</div>
					<p v-show="showAccelerate" class="para1">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus voluptates quidem id optio
						nulla fugiat nemo? Illum tempora placeat earum corrupti nostrum explicabo
						perferendis quis culpa, quidem dolores, dignissimos voluptates?
					</p>
				</div>
				<div class="">
					<div class="collapsible-header flex py-3 justify-between" @click="togglePro">
						<h1 class="header7 w-11/12 cursor-pointer">
							On what grounds can an engineer opt-out of the 2-year contract?
						</h1>
						<span class="cursor-pointer"><i class="uil uil-angle-down text-2xl"></i></span>
					</div>
					<p v-show="showPro" class="para1">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolore optio libero ab, cumque
						quasi, provident asperiores hic nam, vel id dolores neque?
						Sed repudiandae consectetur ea eum voluptate iste.
					</p>
				</div>
			</div>
		</section>
	</div>
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