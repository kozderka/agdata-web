<template>
  <section id="problem-solution" class="section-padding bg-gray-50">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-5 text-emerald-700">Máte plné ruce práce s řízením farmy?</h2>
      <p class="text-lg text-center text-gray-600 mb-16 max-w-2xl mx-auto">My vám ji usnadníme. Roztříštěná data, nepřehledné evidence, zdlouhavé plánování a kontrola nákladů? Moderní zemědělství vyžaduje moderní nástroje.</p>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ProblemSolutionCard
          iconClass="fas fa-database"
          title="Centralizujte svá data"
          description="Všechny informace o polích, strojích, skladech i financích na jediné platformě."
        />
        <ProblemSolutionCard
          iconClass="fas fa-cogs"
          title="Automatizujte procesy"
          description="Od záznamu prací strojů po sledování docházky – šetřete čas i peníze."
        />
        <ProblemSolutionCard
          iconClass="fas fa-chart-line"
          title="Optimalizujte náklady"
          description="Precizní zemědělství, satelitní snímky a data ze senzorů pro maximální výnosy."
        />
        <ProblemSolutionCard
          iconClass="fas fa-file-alt"
          title="Rozhodujte se na základě faktů"
          description="Přehledné reporty a analýzy pro informované manažerské rozhodování."
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProblemSolutionCard from './ProblemSolutionCard.vue';
</script>