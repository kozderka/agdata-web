<template>
  <section id="references" class="section-padding bg-white">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 text-emerald-700">Důvěřují nám přední zemědělské podniky</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ReferenceCard
          quote="Díky Agdata máme konečně všechna agronomická data pohromadě a můžeme efektivněji plánovat. Automatický sběr dat ze strojů nám ušetřil desítky hodin měsíčně."
          authorName="Ing. Jan Novák"
          authorTitle="Agronom, ZD Vysočina"
          authorImage="https://placehold.co/50x50/a0aec0/ffffff?text=JN&font=inter"
        />
        <ReferenceCard
          quote="Satelitní snímky a možnost tvorby aplikačních map přímo v systému jsou pro nás klíčové pro optimalizaci hnojení."
          authorName="Petr Svoboda"
          authorTitle="Jednatel, Farma Polabí a.s."
          authorImage="https://placehold.co/50x50/a0aec0/ffffff?text=PS&font=inter"
        />
        <ReferenceCard
          quote="Přehledné reporty a mobilní aplikace nám výrazně zjednodušily každodenní práci a kontrolu nad celým hospodářstvím."
          authorName="Marie Veselá"
          authorTitle="Agro Podnikatelka"
          authorImage="https://placehold.co/50x50/a0aec0/ffffff?text=MV&font=inter"
        />
      </div>
      <div class="mt-20 text-center">
        <h3 class="text-2xl font-semibold text-gray-700 mb-10">Naši partneři a podporovatelé</h3>
        <div class="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 md:gap-x-16">
          <img src="https://placehold.co/150x50/CBD5E0/64748B?text=Partner+Logo&font=inter" alt="Logo partnera 1" class="h-10 opacity-75 hover:opacity-100 transition-opacity" onerror="this.onerror=null;this.src='https://placehold.co/150x50/cccccc/ffffff?text=Logo';">
          <img src="https://placehold.co/150x50/CBD5E0/64748B?text=Partner+Logo&font=inter" alt="Logo partnera 2" class="h-10 opacity-75 hover:opacity-100 transition-opacity" onerror="this.onerror=null;this.src='https://placehold.co/150x50/cccccc/ffffff?text=Logo';">
          <img src="https://placehold.co/150x50/CBD5E0/64748B?text=Partner+Logo&font=inter" alt="Logo partnera 3" class="h-10 opacity-75 hover:opacity-100 transition-opacity" onerror="this.onerror=null;this.src='https://placehold.co/150x50/cccccc/ffffff?text=Logo';">
          <img src="https://placehold.co/150x50/CBD5E0/64748B?text=Partner+Logo&font=inter" alt="Logo partnera 4" class="h-10 opacity-75 hover:opacity-100 transition-opacity" onerror="this.onerror=null;this.src='https://placehold.co/150x50/cccccc/ffffff?text=Logo';">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ReferenceCard from './ReferenceCard.vue';
// Data pro ReferenceCard by také mohla pocházet z Nuxt/Content
// const { data: testimonials } = await useAsyncData('testimonials', () => queryContent('/testimonials').find())
</script>