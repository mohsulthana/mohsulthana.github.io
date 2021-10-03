<template>
<div class="my-16 px-7 lg:px-14 md:px-7">
  <h1 class="text-4xl tracking-light font-extrabold sm:text-5xl md:text-5xl my-5">
    Blog
  </h1>
  <h1 class="text-lg tracking-light font-light sm:text-5xl md:text-5xl my-5">
    Sources from Medium
  </h1>
  <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div class="transform motion-safe:hover:scale-110 rounded-lg overflow-hidden text-left border" v-for="(value, index) in posts.items" :key="index">
      <div class="mx-6 my-4">
        <img :src="value.thumbnail" class="w-full rounded mb-3 h-64 object-fill" alt="">
        <div class="font-light text-gray-darker mb-2 py-1 rounded-full inline-block text-xs">{{ value.pubDate }}</div>
        <div class="font-medium text-base text-gray-darker mb-4 cursor-pointer hover:text-gray-400" @click="goToArticle(value.link)">{{ value.title }}</div>
        <div class="font-medium text-base text-gray-darker mt-4 mb-1">Tags</div>
        <div v-for="(item, index) in value.categories" :key="index" class="inline-block">
        <div class="font-light text-gray-darker mb-2 py-1 rounded-full inline-block text-xs border px-2 mr-1">#{{ item }}</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data: () => ({
    posts: []
  }),
  methods: {
    goToArticle(args) {
      window.open(args)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      this.$axios.$get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mohsulthana')
        .then((response) => {
          console.log(response)
          this.posts = response
        })
        .finally(() => this.$nuxt.$loading.finish())
    })
  }
}
</script>
