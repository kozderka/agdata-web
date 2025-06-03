<template>
  <nav class="navbar-sticky">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <NuxtLink to="/" class="text-3xl font-bold text-green-600">Agdata</NuxtLink>
      <div class="hidden md:flex space-x-6 items-center">
        <NuxtLink to="/#features" class="text-gray-600 hover:text-green-600 transition-colors duration-300">Funkce</NuxtLink>
        <NuxtLink to="/#target-audience" class="text-gray-600 hover:text-green-600 transition-colors duration-300">Pro koho</NuxtLink>
        <NuxtLink to="/#references" class="text-gray-600 hover:text-green-600 transition-colors duration-300">Reference</NuxtLink>
        <NuxtLink to="/blog" class="text-gray-600 hover:text-green-600 transition-colors duration-300">Blog</NuxtLink> 
        <NuxtLink to="/#contact" class="text-gray-600 hover:text-green-600 transition-colors duration-300">Kontakt</NuxtLink>
        <NuxtLink to="/vyzadat-demo" class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-5 rounded-lg transition-colors duration-300">Vyžádat demo</NuxtLink>
      </div>
      <div class="md:hidden">
        <button @click="toggleMobileMenu" class="text-gray-600 focus:outline-none">
          <i class="fas" :class="isMobileMenuOpen ? 'fa-times' : 'fa-bars'"></i>
        </button>
      </div>
    </div>
    <div v-show="isMobileMenuOpen" class="md:hidden bg-white border-t border-gray-200">
      <NuxtLink @click="closeMobileMenu" to="/#features" class="block px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-green-600 transition-colors duration-300">Funkce</NuxtLink>
      <NuxtLink @click="closeMobileMenu" to="/#target-audience" class="block px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-green-600 transition-colors duration-300">Pro koho</NuxtLink>
      <NuxtLink @click="closeMobileMenu" to="/#references" class="block px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-green-600 transition-colors duration-300">Reference</NuxtLink>
      <NuxtLink @click="closeMobileMenu" to="/blog" class="block px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-green-600 transition-colors duration-300">Blog</NuxtLink> 
      <NuxtLink @click="closeMobileMenu" to="/#contact" class="block px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-green-600 transition-colors duration-300">Kontakt</NuxtLink>
      <NuxtLink @click="closeMobileMenu" to="/vyzadat-demo" class="block px-6 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold text-center rounded-b-lg transition-colors duration-300">Vyžádat demo</NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>