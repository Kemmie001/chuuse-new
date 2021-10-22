<template>
	<div class="layout">
		<div id="main-header" :class="{ open: isOpen }" class="
        w-full
        fixed
        top-0
        left-0
        justify-between
        overflow-hidden
		bg-gray-light
        header
        xl:px-20
        px-8
        py-10
      ">
			<div class="flex flex-nowrap items-center">
				<nuxt-link class="flex flex-nowrap items-center" to="/">
					<img class="lg:hidden flex logo-text" src="../assets/img/Logo.png" alt="" />
				</nuxt-link>
				<nuxt-link class="flex flex-nowrap items-center" to="/">
					<img class="hidden lg:flex logo-text" src="../assets/img/Logo.png" alt="" />
				</nuxt-link>
				<nav class="
				headline
            nav
            hidden
            lg:flex
            flex-col
            lg:flex-row
        	ml-16
            flex-no-wrap
            menu-links
          ">
					<nuxt-link to="/" class="focus:text-primary">Home</nuxt-link>
					<nuxt-link to="/about" class="focus:text-primary">About</nuxt-link>
					<nuxt-link class="focus:text-primary" to="/n">Blog</nuxt-link>
					<nuxt-link to="/contact" class="focus:text-primary">Contact</nuxt-link>
				</nav>
			</div>
			<div class="hidden lg:flex flex-col lg:flex-row lg:items-center menu">
				<nav class="flex flex-no-wrap xl:ml-30">
					<nuxt-link to="/career" class="focus:text-primary bold-button">Build your career in Tech</nuxt-link>
					<div class="py-10">
						<a href="" class="btn-primary hover:text-white">
							Join Talent Pool &rightarrow;
						</a>
					</div>
				</nav>
			</div>
			<a href="" class="mobile-menu" @click.prevent="toggleMenu">
				Bars
			</a>
		</div>
			<Nuxt />
		<publicFooter />
		<div class="flex lg:hidden flex-col items-center w-full slot-holder">
			<div :class="{ open: isOpen }" class="mobile-menu-new-holder" @click.self="toggleMenu">
				<div class="mobile-menu-new">
					<menu>
						<a href="" class="text-dark closecon flex w-full justify-end pr-5" @click.prevent="toggleMenu">
							X
						</a>
						<nav>
							<nuxt-link class="flex flex-nowrap items-center" to="/">
								<img class="logo" src="../assets/img/Logo.png" alt="" />
							</nuxt-link>
							<nuxt-link to="/about" class="pr-4 focus:text-primary">About</nuxt-link>
							<nuxt-link class="pr-4 focus:text-primary" to="/j">Blog</nuxt-link>
							<nuxt-link to="/contact" class="focus:text-primary">Contact</nuxt-link>
							<nuxt-link to="/career" class="focus:text-primary bold-button">Build your career in Tech</nuxt-link>
							<div class="">
								<nuxt-link to="/p" class="btn-primary text-white hover:text-white">
									Join Talent Pool &rightarrow;
								</nuxt-link>
							</div>
						</nav>
					</menu>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// import mainMenu from '@/components/menu.vue';
	import publicFooter from '../components/footer';
	export default {
		name: 'DefaultLayout',
		components: {
			publicFooter,
			// mainMenu,
		},
		data() {
			return {
				isOpen: false,
				showDropDown: false,
				tab: false,
			};
		},
		methods: {
			toggleMenu() {
				this.isOpen = !this.isOpen;
			},
			closeMenu() {
				this.showDropDown = false;
			},
			toggleShowDropDown() {
				this.showDropDown = !this.showDropDown;
			},
			showTab(tab) {
				this.tab = !this.tab;
			},
		},
	};
</script>
<style lang="scss" scoped>
	@import "./assets/scss/mixin.scss";


	.poppins {
		font-family: 'Poppins', sans-serif;
	}

	.closecon {
		display: none;
		visibility: hidden;
		outline: none;
	}

	.layout {
		margin: 0 auto;
	}

	.headerless {
		height: 60px;
	}

	.header {
		display: flex;
		align-items: center;
		height: 50px;
		box-shadow: 0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%);
		z-index: 9999999;
	}

	.slot-holder {
		margin-top: 50px;
	}

	.mobile-menu-new-holder {
		display: none;
		z-index: 999999999;
		background: rgba(0, 0, 0, 0.5);
		height: 100vh;
		min-width: 100%;

		&.open {
			display: flex;
			position: fixed;
			top: 0;
			left: 0;
		}

		.mobile-menu-new {
			position: fixed;
			top: 0;
			width: 80%;
			height: 100vh;
			background: #ffffff;

			menu {
				margin-left: 0;
				padding-left: 0;
			}

			a {
				color: #454545;
			}
		}
	}

	.profile-box {
		width: 50px;
	}

	.profile-img {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background: #ececec;
	}

	.input-border {
		width: 60%;
		height: 35px;
		border-radius: 15px;
		background-color: #ffffff;
		color: #a0aec0;
	}

	.search-input {
		background-color: transparent;
		outline: none;
	}

	.search-input:focus {
		outline: none;
	}

	.bg-footer {
		background: #010165;
	}

	.header-color {
		color: #f2994a;
		text-transform: uppercase;
	}

	.menu>.menu-links {
		padding: 20px 5px;
	}

	.link-text {
		color: #4cc36f;
		font-style: normal;
		font-size: 13.5px;
	}

	.submenu-text {
		font-size: 13.5px;
	}

	.drop-card {
		height: 270px;
		background: #f3f3f3;
		border-radius: 7px;
	}

	.drop-img {
		height: 120px;
		width: 120px;
	}

	nav>div>a,
	nav>a,
	.like-link {
		display: flex;
		padding: 12px 27px;
		align-items: center;
		letter-spacing: 1px;
		cursor: pointer;
	}

	/* home route and active route will show in bold as it matches / and /about */
	a.nuxt-link-active {
		@apply header7;
	}

	/* exact link will show the primary color for only the exact matching link */
	a.nuxt-link-exact-active {
		@apply text-primary;
	}

	/* exact link will show the primary color for only the exact matching link */
	a,
	a:visited {
		text-decoration: none;

	}

	a:hover {
		@apply text-primary
	}

	.nav>a.notActive {
		border-bottom: none;
	}

	.btn-nav {
		border-radius: 5px;
		padding: 7px 15px;
		background-color: #ffffff;
		color: #010165;
	}

	.logo {
		width: 40px;
		object-fit: contain;
	}

	.logo-text {
		width: auto;
		height: 30px;
		margin-left: 9px;
		margin-top: 5px;
		object-fit: contain;
	}

	.footer-logo {
		width: 95px;
		object-fit: contain;
	}

	.menu-backdrop,
	.mobile-menu {
		display: none;
	}

	.list {
		position: absolute;
		padding: 0;
		z-index: 9999999999999;
		list-style-type: none;
		transform-origin: top;
		transition: transform 0.4s ease-in-out;

		li {
			padding: 10px;
			background: white;
			border-bottom: solid thin #eee;
			border-left: solid medium #cbc;
		}
	}

	.slide-enter,
	.slide-leave-to {
		transform: scaleY(0);
	}

	footer a:hover {
		text-decoration: underline;
		color: #c8c8ff;
	}

	.drop-down-holder {
		background: #f9f9ff;
		display: none;
		position: fixed;
		width: 700px;
		height: auto;
		overflow: hidden;
		top: 60px;
		left: 350px;
		border-radius: 10px;

		@include sm {
			width: 100%;
			height: 100vh;
			overflow: scroll;
			left: 10px;
		}
	}

	.menu-backdrop {
		display: none;
	}

	.has-drop:hover {
		.drop-down-holder {
			display: flex;
		}

		.menu-backdrop {
			display: flex;
			position: fixed;
			border-top: 10px solid #ffffff;
			top: 69px;
			left: 250px;
			width: auto;
			height: auto;
			background: rgba(0, 0, 0, 0);
			z-index: 9999999999;

			.menu1 {
				height: 300px;
				width: 300px;
				@apply bg-gray-100;

				h4 {
					padding: 5px 27px;
				}
			}

			.menu2 {
				height: 300px;
				width: 600px;
				@apply bg-gray-200;

				h4 {
					padding: 5px 27px;
				}
			}

			.ins-led {
				&:hover {
					.submenu-holder {
						display: flex;
					}
				}
			}

			.roll {
				transform: rotate(-90deg);
			}
		}
	}

	.submenu-holder {
		display: none;
		position: absolute;
		right: -600px;
		top: -129px;
	}

	.view_all_link {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 16px 32px;
		background: #ededed;
		border-radius: 61px;
		font-size: 16px;
		font-weight: bold;
	}

	.link_colored {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 8px 24px;
		background: #ff6600;
		border-radius: 10px;
		font-weight: bold;
	}

	.link_colored-orange {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 8px 24px;
		border-radius: 61px;
		background: #ff6600;
		font-weight: bold;

		@include sm {
			@apply text-xs;
			padding: 6px 16px;

			&.mobile {
				width: 50px;
				height: 50px;
				border-radius: 50%;
				padding: 0;
			}
		}
	}

	.link_colored-green {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 16px 24px;
		background: #2ecc71;
		border-radius: 61px;
		font-weight: bold;

		@include sm {
			@apply text-xs;
			padding: 6px 16px;

			&.mobile {
				width: 50px;
				height: 50px;
				border-radius: 50%;
				padding: 0;
			}
		}
	}

	@media only screen and (max-width: 1028px) {
		.logo {
			width: 80px;
			object-fit: contain;
		}

		.closecon {
			display: flex;
			visibility: visible;
			@apply mb-3;
			@apply text-4xl;

			i {
				padding: 0 !important;
			}
		}

		.mobile-menu {
			display: flex;
			margin-left: 500px;
		}

		.menu {
			position: fixed;
			top: 0;
			right: 0;
			height: 100vh;
			overflow: hidden;
			width: 100%;
			margin-right: -100%;
			background-color: #000066;
			color: #fff;
			z-index: 999999;
			padding-top: 30px;
		}

		.menu.open {
			margin-right: 0;
		}

		.menu-backdrop.open {
			display: flex;
			width: 100%;
			position: fixed;
			height: 100vh;
			top: 0;
			left: 0;
			z-index: 999;
			background: rgba(0, 0, 0, 0.5);
		}

		.social-icons>a {
			padding: 25px 10px;
			@apply text-2xl;
		}

		.menu>.menu-links {
			padding: 25px 20px;
			@apply font-bold;
			@apply text-2xl;
		}
	}

	.header2 {
		font-family: Poppins;
		font-style: normal;
		font-weight: bold;
		font-size: 30px;
		line-height: 44px;
		@apply text-primary;

		@include sm {
			font-size: 26px;
			line-height: 38px;
		}
	}

	@media only screen and (max-width: 1028px) {
		.mobile-menu {
			display: flex;
			margin-left: 170px;
		}

		.logo {
			width: 80px;
			object-fit: contain;
		}
	}
</style>