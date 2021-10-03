<template>
<div class="container mx-auto text-center px-14 my-16">
  <img class="rounded-full h-40 w-40 mx-auto" src="/square.png" alt="">
  <h1 class="text-xl tracking-light font-extrabold sm:text-5xl md:text-md">
    👋 Mohammad Sulthan
  </h1>
  <vue-typed-js :strings="['Frontend Developer ^1500', 'iOS Developer']" :loop="true" :showCursor="false" :smartBackspace="true">
    <h3 class="text-2xl mt-5 text-gray-400 mx-auto">
      I'm a <span class="typing text-primary dark:text-primary"></span> living in Indonesia with 2 years of experiences.
    </h3>
  </vue-typed-js>
  <h3 class="text-2xl mt-5 text-gray-400 mx-auto">I'm <NuxtLink to="/stats" class="text-primary dark:text-primary">constantly learning</NuxtLink> how to build things with frontend stack and swift. Currently, I'm qualified to actively improving as iOS developer at <a class="text-primary dark:text-primary" target="_blank" href="https://infinitelearning.id">Apple Developer Academy Batam</a>.</h3>
</div>
</template>
