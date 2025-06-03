<template>
  <div class="bg-white p-8 rounded-xl border border-gray-200 text-center flat-card-hover transition-all duration-300">
    <i :class="iconClass" class="fa-3x text-green-500 mb-5"></i>
    <h3 class="text-xl font-semibold mb-2 text-emerald-700">{{ title }}</h3>
    <p class="text-gray-600 text-sm">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  iconClass: String,
  title: String,
  description: String,
})
</script>