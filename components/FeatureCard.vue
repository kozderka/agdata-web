<template>
  <div class="bg-gray-50 p-8 rounded-xl flat-card-hover transition-all duration-300 border border-gray-100">
    <div class="flex items-start mb-4">
      <div class="bg-green-100 p-4 rounded-lg mr-5 inline-flex items-center justify-center">
        <i :class="iconClass" class="fa-2x text-green-500"></i>
      </div>
      <div>
        <h3 class="text-2xl font-semibold text-emerald-700 mb-1">{{ title }}</h3>
        <p class="text-gray-600">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  iconClass: String,
  title: String,
  description: String,
})
</script>