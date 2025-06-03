<template>
  <div>
    <HeroSection />
    <ProblemSolutionSection />
    <FeaturesSection />
    <TargetAudienceSection />
    <ReferencesSection />
    <IntegrationsSection />
    <AboutUsSection />
    <CallToActionSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '~/components/HeroSection.vue';
import ProblemSolutionSection from '~/components/ProblemSolutionSection.vue';
import FeaturesSection from '~/components/FeaturesSection.vue';
import TargetAudienceSection from '~/components/TargetAudienceSection.vue';
import ReferencesSection from '~/components/ReferencesSection.vue';
import IntegrationsSection from '~/components/IntegrationsSection.vue';
import AboutUsSection from '~/components/AboutUsSection.vue';
import CallToActionSection from '~/components/CallToActionSection.vue';

useHead({
  title: 'Agdata - Moderní řízení farmy pro maximální efektivitu',
  meta: [
    { name: 'description', content: 'Agdata nabízí komplexní SaaS řešení pro střední a velké zemědělské podniky. Zvyšte efektivitu a maximalizujte výnosy s našimi nástroji.' },
    { name: 'keywords', content: 'řízení farmy, saas, zemědělství, precizní zemědělství, agdata, software pro farmáře, ndvi, senzory' }
  ]
})
</script>