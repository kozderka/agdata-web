<template>
  <div>
    <Navbar />
    <main>
      <slot />
    </main>
    <PageFooter />
  </div>
</template>

<script setup lang="ts">
import Navbar from '~/components/Navbar.vue';
import PageFooter from '~/components/PageFooter.vue';
</script>