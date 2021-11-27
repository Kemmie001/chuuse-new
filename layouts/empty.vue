<template>
  <div class="">
	   <div class="bg-black flex justify-between  w-full
        fixed
        top-0
        left-0
        overflow-hidden
        header
        xl:px-20
        px-8
        py-3">
		  <nuxt-link class="flex flex-nowrap items-center" to="/">
			<img class="flex logo-text" src="../assets/img/Logo.png" alt="" />
		  </nuxt-link>
		  <div class="">
			  <button class="bg-error py-2 px-5 font-semibold cursor-pointer rounded-md text-white">
				  Log Out <i class="uil uil-signout"></i>
			  </button>
		  </div>
	  </div>
	  <div class="">
		  <Nuxt />
	  </div>
  </div>
</template>

<script>
export default {
	name: "User",
	components:{
	}

}
</script>

<style>
 .logo-text {
	width: auto;
	height: 30px;
	margin-left: 9px;
	margin-top: 5px;
	object-fit: contain;
}
</style>