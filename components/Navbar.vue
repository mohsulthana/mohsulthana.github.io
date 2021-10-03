<template>
<div>
  <nav class="bg-transparent shadow-xl sm:px-7">
    <div class="max-w-12xl mx-auto px-10 ">
      <div class="flex justify-between">
        <div class="flex space-x-7">
          <div>
            <NuxtLink to="/" class="flex items-center py-4 px-2 text-primary" style="border-bottom: 0px solid transparent">
              <img v-if="$colorMode.preference == 'dark'" src="/mohsulthana-black.png" alt="" class="h-20 w-20">
              <img v-else src="/mohsulthana-white.png" alt="" class="h-20 w-20">
            </NuxtLink>
          </div>
          <div class="hidden md:flex items-center space-x-1">
            <NuxtLink to="/" class="py-4 px-2 text-gray-800 hover:text-primary-light dark:text-white font-semibold hover:text-400 transition duration-300">Home</NuxtLink>
            <NuxtLink to="/blog" class="py-4 px-2 text-gray-800 hover:text-primary-light dark:text-white font-semibold hover:text-400 transition duration-300">Blog</NuxtLink>
            <NuxtLink to="/stats" class="py-4 px-2 text-gray-800 hover:text-primary-light dark:text-white font-semibold hover:text-400 transition duration-300">Stats</NuxtLink>
            <NuxtLink to="/portfolio" class="py-4 px-2 text-gray-800 hover:text-primary-light dark:text-white font-semibold hover:text-400 transition duration-300">Portfolio</NuxtLink>
          </div>
        </div>
        <!-- Secondary Navbar items -->
        <div class="hidden md:flex items-center py-4 px-10">
          <div class="
                relative
                flex
                mr-2
                transition
                duration-200
                ease-in
              ">
            <button class="bg-grey-light hover:bg-grey dark:text-white text-primary font-bold py-2 px-4 rounded inline-flex items-center">
              <IconDark v-if="$colorMode.preference == 'light'" @click="$colorMode.preference = 'dark'" />
              <IconLight v-else @click="$colorMode.preference = 'light'" />
            </button>
            <GithubSVG v-if="$nuxt.$route.path != '/'" />
            <LinkedInSVG v-if="$nuxt.$route.path != '/'" />
          </div>
        </div>
        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button class="bg-grey-light hover:bg-grey dark:text-white text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <IconDark v-if="$colorMode.preference == 'light'" @click="$colorMode.preference = 'dark'" />
            <IconLight v-else @click="$colorMode.preference = 'light'" />
          </button>
          <button class="outline-none mobile-menu-button" @click="mobileView = !mobileView">
            <svg class="w-6 h-6 text-primary hover:text-400" x-show="!showMenu" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- mobile menu -->
    <div class="mobile-menu" :class="{ hidden: mobileView }">
      <ul class="">
        <NuxtLink to="/" class="block
                text-sm
                px-16
                py-4
                dark:text-white text-primary hover:text-primary-dark
                font-semibold hover:text-primary-dark transition duration-300" style="border: none">Home</NuxtLink>
        <NuxtLink to="/blog" class="block
                text-sm
                px-16
                py-4
                dark:text-white text-primary hover:text-primary-dark
                font-semibold hover:text-primary-dark transition duration-300" style="border: none">Blog</NuxtLink>
        <NuxtLink to="/stats" class="block
                text-sm
                px-16
                py-4
                dark:text-white text-primary hover:text-primary-dark
                font-semibold hover:text-primary-dark transition duration-300" style="border: none">Stats</NuxtLink>
      </ul>
    </div>
  </nav>
</div>
</template>

<script>
import IconLight from '@/static/light.svg?inline';
import IconDark from '@/static/dark.svg?inline';

export default {
  data: () => ({
    mobileView: true,
  }),
  components: {
    IconDark,
    IconLight
  },
}
</script>

<style>
/* home route and active route will show in bold as it matches / and /about */
a.nuxt-link-active {
  font-weight: bold;
}

body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}

.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}

input:checked~.dot {
  transform: translateX(100%);
  background-color: #48bb78;
}

/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #158876;
  border-bottom: 1px solid #158876;
}
</style>
