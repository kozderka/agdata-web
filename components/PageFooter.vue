<template>
  <footer class="bg-gray-800 text-gray-400 py-16">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        <div>
          <h3 class="text-2xl font-bold text-white mb-4">Agdata</h3>
          <p class="text-sm leading-relaxed">Moderní řešení pro vaše zemědělství, které vám pomůže růst.</p>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-white mb-4">Rychlé odkazy</h3>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/#features" class="hover:text-green-400 transition-colors">Funkce</NuxtLink></li>
            <li><NuxtLink to="/cenik" class="hover:text-green-400 transition-colors">Ceník</NuxtLink></li> 
            <li><NuxtLink to="/#references" class="hover:text-green-400 transition-colors">Reference</NuxtLink></li>
            <li><NuxtLink to="/blog" class="hover:text-green-400 transition-colors">Blog</NuxtLink></li> 
            <li><NuxtLink to="/#contact" class="hover:text-green-400 transition-colors">Kontakt</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-white mb-4">Kontaktujte nás</h3>
          <ul class="space-y-3 text-sm">
            <li class="flex items-start"><i class="fas fa-map-marker-alt mr-3 mt-1 text-green-400"></i>Adresa firmy, Město, PSČ</li>
            <li class="flex items-start"><i class="fas fa-phone mr-3 mt-1 text-green-400"></i><a href="tel:+420123456789" class="hover:text-green-400 transition-colors">+420 123 456 789</a></li>
            <li class="flex items-start"><i class="fas fa-envelope mr-3 mt-1 text-green-400"></i><a href="mailto:info@agdata.ag" class="hover:text-green-400 transition-colors">info@agdata.ag</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-white mb-4">Sledujte nás</h3>
          <div class="flex space-x-5">
            <a href="#" aria-label="Facebook Agdata" class="text-gray-400 hover:text-green-400 transition-colors"><i class="fab fa-facebook-f fa-lg"></i></a>
            <a href="#" aria-label="LinkedIn Agdata" class="text-gray-400 hover:text-green-400 transition-colors"><i class="fab fa-linkedin-in fa-lg"></i></a>
            <a href="#" aria-label="YouTube Agdata" class="text-gray-400 hover:text-green-400 transition-colors"><i class="fab fa-youtube fa-lg"></i></a>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-700 pt-8 text-center text-sm">
        <p>&copy; <span id="currentYearFooter">{{ currentYearFooter }}</span> Agdata s.r.o. Všechna práva vyhrazena.</p>
        <p class="mt-2">
          <NuxtLink to="/obchodni-podminky" class="hover:text-green-400 transition-colors">Obchodní podmínky</NuxtLink> |
          <NuxtLink to="/ochrana-osobnich-udaju" class="hover:text-green-400 transition-colors">Zásady ochrany osobních údajů</NuxtLink>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const currentYearFooter = ref(new Date().getFullYear())
</script>