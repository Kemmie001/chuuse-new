<template>
	<section class="pt-24 lg:py-20 lg:px-20 px-8">
		<section class="justify-between banner lg:flex py-10">
			<div class="w-full flex lg:w-6/12 md:pb-0 pb-5">
				<img class="hm-hero" src="../assets/img/about.gif" alt />
			</div>
			<div class="self-center lg:w-5/12 text-neutral">
				<h1 class="header2 text-2xl sm:text-3xl font-extrabold">
					Opportunity is everywhere. The key is to develop the vision to see it.
				</h1>
				<p class="headline pt-6">
					We are a Technology Talent Development company that helps people learn premium technological skills
					virtually.
					We also
					partner with companies to hire the best talents and invest in talent development.
				</p>
			</div>
		</section>
		<div class="rounded-lg bg-white px-4 md:px-0 shadow justify-around md:flex py-5 my-8">
			<div class="text-center pb-10 md:pb-4">
				<h1 class="text-primary header2 md:pb-4">
					1k+
				</h1>
				<p class="header6 text-base">Members in the Chuuse <br> Learning Community</p>
			</div>
			<div class="text-center self-center pb-10 md:pb-4">
				<h1 class="text-primary header2 md:pb-4">
					50+
				</h1>
				<p class="header6 text-base">Engineers Placed</p>
			</div>
			<div class="text-center self-center">
				<h1 class="text-primary header2 md:pb-4">
					20+
				</h1>
				<p class="header6 text-base">Participating Companies</p>
			</div>
		</div>
		<article class="justify-between lg:flex lg:flex-row-reverse pt-10 pb-10">
			<div class="w-full flex lg:w-4/12 pb-10">
				<img class="hm-hero" src="../assets/img/what.png" alt />
			</div>
			<div class="self-center lg:w-6/12">
				<h1 class="header3 text-2xl sm:text-3xl text-primary">
					What is Chuuse About ?
				</h1>
				<p class="headline pt-6">
					Chuuse is an elite technology development company that equips high potential individuals with
					world-class technological
					and leadership skills as well as combined practical exposure through real-life projects and
					corporate placements. Also
					ensuring that our talents are enabled to launch their careers in tech world successfully. We are
					also helping
					professionals from all over the world learn skills and develop capabilities to thrive in their
					respective workplaces and
					also stay relevant.
				</p>
				<p class="headline pt-6">
					Today we have people from all facet of life join our virtual learning programs, our talent
					incubation and talent pool
					from all over . With an ecosystem of over 10000 talents,we are serving as the bridge to educate and
					connect talents. We
					are a leading tech talent development company for emerging economies.
				</p>
			</div>
		</article>
	</section>
</template>
<script>

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

	.shadow {
		box-shadow: rgba(24, 15, 18, 0.12);
	}
</style>