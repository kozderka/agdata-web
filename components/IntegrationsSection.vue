<template>
  <section id="integrations" class="section-padding bg-gray-50">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-6 text-emerald-700">Komplexní ekosystém: Software i hardware</h2>
      <p class="text-lg text-center text-gray-600 mb-16 max-w-2xl mx-auto">Agdata není jen software. Nabízíme a integrujeme širokou škálu vlastních i partnerských hardwarových zařízení pro plynulý sběr dat.</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <HardwareCard
          imageSrc="https://placehold.co/300x200/A7F3D0/047857?text=GPS+Jednotka&font=inter"
          title="GPS Jednotky"
        />
        <HardwareCard
          imageSrc="https://placehold.co/300x200/A7F3D0/047857?text=Meteostanice&font=inter"
          title="Meteostanice"
        />
        <HardwareCard
          imageSrc="https://placehold.co/300x200/A7F3D0/047857?text=Půdní+Senzory&font=inter"
          title="Půdní Senzory"
        />
      </div>
      <p class="text-center text-gray-600 mt-10">Možnost propojení s dalšími systémy (účetní software, LPIS atd.) pro maximální efektivitu.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import HardwareCard from './HardwareCard.vue';
</script>