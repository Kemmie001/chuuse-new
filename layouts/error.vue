<template>
  <div class="h-screen flex flex-col justify-center items-center">
    <h1 v-if="error.statusCode === 404">404 Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <br>
    <p>
        Go to <NuxtLink to="/" class="font-bold">Home page</NuxtLink>
    </p>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>