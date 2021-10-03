<template>
<div>
  <div class="container mx-auto text-center px-14 my-16">
    <h1 class="text-4xl tracking-light font-extrabold sm:text-5xl md:text-5xl mb-8">Drop Me A Line</h1>
    <form class="sm:mx-auto lg:mx-32">
      <div class="mb-6">
        <textarea class="dark:bg-gray-900 dark:text-white bg-shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Hi, how are you doing?"></textarea>
      </div>
    </form>
    <NuxtLink class="mt-2 rounded-full px-5 py-2 text-left inline-block my-4 bg-primary text-white" to="/work">Send Message</NuxtLink>
  </div>
</div>
</template>
