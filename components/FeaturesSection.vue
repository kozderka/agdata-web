<template>
  <section id="features" class="section-padding bg-white">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 text-emerald-700">Vše, co potřebujete pro efektivní řízení vašeho podniku</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          iconClass="fas fa-tractor"
          title="Efektivní řízení farmy"
          description="Plánování plodin, automatický záznam prací, správa nemovitostí, zákonné a dotační evidence. Mobilní aplikace pro práci v terénu."
        />
        <FeatureCard
          iconClass="fas fa-satellite-dish"
          title="Precizní zemědělství"
          description="Satelitní snímky (NDVI), tvorba aplikačních map pro variabilní hnojení a postřiky, polní navigace."
        />
        <FeatureCard
          iconClass="fas fa-thermometer-half"
          title="Pokročilé senzorické sítě"
          description="Meteostanice, půdní sondy, senzory ovlhčení listu, sondy do obilí. Upozornění na kritické změny."
        />
        <FeatureCard
          iconClass="fas fa-gas-pump"
          title="Optimalizace zdrojů"
          description="Řízení PHM, sledování pohybu a vytížení strojů, docházkový systém pro zaměstnance."
        />
        <FeatureCard
          iconClass="fas fa-warehouse"
          title="Skladové hospodářství"
          description="Automatické sledování pohybů na skladu na základě GPS dat a provedených prací."
        />
        <FeatureCard
          iconClass="fas fa-paw"
          title="Monitoring zvířat"
          description="GPS obojky pro ochranu a lokalizaci pasených zvířat."
        />
      </div>
      <div class="text-center mt-16">
        <NuxtLink to="/o-modulech" class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 transform hover:scale-105">Zjistit více o modulech</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import FeatureCard from './FeatureCard.vue';
// V budoucnu by data pro FeatureCard mohla pocházet z Nuxt/Content
// const { data: features } = await useAsyncData('features', () => queryContent('/features').find())
</script>