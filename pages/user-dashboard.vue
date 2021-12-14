<template>
  <div class="pt-24 md:pt-32 lg:py-20 lg:px-20 px-8 bg-gray-light lg:h-screen">
	 <div class="md:flex gap-x-10 mt-5">
		 <div class="bg-white rounded-lg px-4 py-5 text-gray-medDark lg:w-6/12">
			 <div class="lg:flex justify-around">
				 <div class="flex">
				 <div class="flex">
					 <div class="flex justify-center bg-gray-medium w-20 h-20 rounded-full text-white">
					 <i class="uil uil-user text-4xl self-center font-bold"></i>
				 </div>
				 <div class="self-center pl-5">
					 <h1 class="font-bold">Babatunde Daniel</h1>
					 <p class="text-gray-medium">
						 ba******123@gmail.com
					 </p>
				 </div>
				 </div>
				 </div>
				 <div class="self-center mt-4">
					 <nuxt-link to="/user-edit-profile" class="rounded-md font-semibold p-2 cursor-pointer
					  hover:border-primary
					  hover:bg-primary hover:text-white border-2 border-gray-medDark">
					 Edit Profile
					 </nuxt-link>
				 </div>
			 </div>
			 <div class="md:flex justify-around">
				 <ul class="mt-3">
					 <li class="pt-3">Phone Number: Nil</li>
					 <li class="py-3">Nationality: Nigeria</li>
					 <li class="pb-3">Location: Nigeria</li>
				 </ul>
				 <div class="flex">
				<div class="line-gray md:mx-5 bg-gray-medium hidden md:block"></div>
				 <ul class="mt-3">
					 <li class="pt-3">English Profieciency: Beginner</li>
					 <li class="py-3">Compay Matched with: Chuuse</li>
					 <li class="pb-3">Company Website: www.chuuse.org</li>
				 </ul>
				 </div>
			 </div>
			 <div class="text-center flex my-5 justify-center">
				 <h1 class="font-bold mr-4 self-center">Status:</h1>
				 <button class="bg-info px-5 py-1 rounded-md text-white font-semibold">
					 Awaiting Match
				 </button>
			 </div>
		 </div>
		 <div class="lg:w-5/12 mt-10 md:mt-0">
		 <div class="bg-white rounded-lg text-gray-medDark mb-10 p-4">
		   <div class="flex justify-between mt-3">
			   <h1 class="font-semibold">My Resume</h1>
			   <a href="" class="text-primary font-medium">Update Document</a>
		   </div>
		   <div class="flex my-4">
			   <span class="w-10">
				   <img src="PDF.png" alt="">
			   </span>
			   <span class="ml-5">
				   <p class="font-semibold text-md">
					   My Cv-2021
				   </p>
				   <p class="text-sm text-gray-medium">Sept 12, 2021</p>
			   </span>
		   </div>
		 </div>
		 <div class="bg-white rounded-lg text-gray-medDark mb-10 p-4">
		   <div class="flex justify-between ty-5">
			   <h1 class="font-semibold">Full stack Developer</h1>
			   <p class="font-medium">2 years Experience</p>
		   </div>
		   <div class="">
			   <p class="py-3">Total Work Experience: 4years</p>
			   <span class="mb-5">
				   Portfolio Link: <a href="" class="text-primary ml-3">www.chuuse.org/portfolio/babsdan12</a>
			   </span>
		   </div>
		 </div>
		 </div>
	 </div>
  </div>
</template>

<script>
export default {
	layout: "empty"

}
</script>

<style>
.line-gray{
	width: 1px;
	height: 100px;
	align-self: center;
}
</style>