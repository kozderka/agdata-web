<template>
  <div class="bg-white rounded-xl p-6 border border-gray-200 text-center">
    <img :src="imageSrc" :alt="title" class="rounded-lg mb-4 mx-auto h-40 object-contain" onerror="this.onerror=null;this.src='https://placehold.co/300x200/cccccc/ffffff?text=Hardware';">
    <h4 class="text-xl font-semibold text-emerald-600">{{ title }}</h4>
  </div>
</template>

<script setup lang="ts">
defineProps({
  imageSrc: String,
  title: String,
})
</script>