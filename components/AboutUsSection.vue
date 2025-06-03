<template>
  <section id="about-us" class="section-padding bg-white">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6 text-emerald-700">Jsme Agdata. Vaši partneři pro chytré zemědělství.</h2>
      <!-- <ContentDoc path="/o-nas" v-slot="{ doc }">
        <div class="prose prose-lg max-w-3xl mx-auto mb-10 text-gray-700" v-html="doc.body"></div>
      </ContentDoc> -->
      <p class="text-lg text-gray-700 max-w-3xl mx-auto mb-10">Jsme česká technologická firma s vášní pro zemědělství. Vyvíjíme inovativní řešení, která pomáhají českým farmářům hospodařit efektivněji, udržitelněji a s lepším přehledem. Náš tým kombinuje znalosti z oblasti IT a zemědělské praxe.</p>
      <div class="flex flex-wrap justify-center gap-4">
        <span class="bg-green-100 text-green-700 px-5 py-2 rounded-full font-medium text-sm">Inovace</span>
        <span class="bg-green-100 text-green-700 px-5 py-2 rounded-full font-medium text-sm">Spolehlivost</span>
        <span class="bg-green-100 text-green-700 px-5 py-2 rounded-full font-medium text-sm">Partnerství</span>
        <span class="bg-green-100 text-green-700 px-5 py-2 rounded-full font-medium text-sm">Porozumění potřebám</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Příklad, jak byste mohli načíst obsah pro tuto sekci z Markdown souboru /content/o-nas.md
// Pro aktivaci byste museli odkomentovat <ContentDoc> v šabloně.
// const { data: aboutContent } = await useAsyncData('about-us', () => queryContent('/o-nas').findOne())
</script>