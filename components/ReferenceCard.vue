<template>
  <div class="bg-gray-50 p-8 rounded-xl border border-gray-200">
    <p class="text-gray-600 italic mb-6 text-lg">"{{ quote }}"</p>
    <div class="flex items-center">
      <img :src="authorImage" :alt="`Logo/foto ${authorName}`" class="w-12 h-12 rounded-full mr-4" onerror="this.onerror=null;this.src='https://placehold.co/50x50/cccccc/ffffff?text=Logo';">
      <div>
        <p class="font-semibold text-emerald-700">{{ authorName }}</p>
        <p class="text-sm text-gray-500">{{ authorTitle }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  quote: String,
  authorName: String,
  authorTitle: String,
  authorImage: String,
})
</script>