<template>
	<div class="border-b-2 border-solid border-gray-medium">
		<div class="flex justify-between">
			<ul class="flex font-semibold">
				<li class="blog-list px-4">
					All Post
				</li>
				<li class="blog-list px-4">
					Programming
				</li>
				<li class="blog-list px-4">
					AI
				</li>
				<li class="blog-list px-4">
					Web Development
				</li>
		
				<li class="blog-list px-4">
					Tech News
				</li>
				<li class="px-4 blog-list">
					Forum
				</li>
			</ul>
			<div class="form-group  rounded-md flex md:justify-between border-gray border-solid border-2">
				<a href="" class="self-center"><i class="uil uil-search text-primary text-2xl"></i></a>
				<input class="focus:outline-none pt-2 para1 text-gray-medDark" type="search" name=""
					placeholder="Search">
					
			</div>
		</div>
	</div>
</template>
<style lang="scss">
.blog-list:hover{
	cursor: pointer;
	border-bottom: 2px solid #24BECA;
	color: #24BECA;
}
.blog-list:focus{
	cursor: pointer;
	border-bottom: 2px solid #24BECA;
	color: #24BECA;
}
</style>