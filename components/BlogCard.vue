<template>
  <NuxtLink :to="slug" class="block bg-white rounded-xl border border-gray-200 overflow-hidden group flat-card-hover transition-all duration-300">
    <img
      :src="image"
      :alt="title"
      class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      onerror="this.onerror=null;this.src='https://placehold.co/600x400/cccccc/ffffff?text=Obrázek+není+dostupný';"
    />
    <div class="p-6">
      <p v-if="date" class="text-sm text-gray-500 mb-2">{{ date }}</p>
      <h3 class="text-xl font-semibold mb-3 text-emerald-700 group-hover:text-green-600 transition-colors">{{ title }}</h3>
      <p class="text-gray-600 text-sm mb-4 line-clamp-3">{{ description }}</p>
      <div v-if="tags && tags.length" class="mb-4">
        <span v-for="tag in tags" :key="tag" class="inline-block bg-green-100 text-green-700 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
          {{ tag }}
        </span>
      </div>
      <span class="text-green-600 font-semibold group-hover:underline">Číst více &rarr;</span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  description: String,
  image: String,
  date: String,
  slug: String,
  tags: Array as () => string[],
})
</script>

<style scoped>
/* Omezení počtu řádků pro popis, pokud Tailwind plugin line-clamp není aktivní */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>