<template>
  <div class="section-padding">
    <div class="container mx-auto px-6">
      <h1 class="text-4xl md:text-5xl font-bold text-center mb-12 text-emerald-700">Náš Blog</h1>
      <div v-if="pending" class="text-center">
        <p>Načítání článků...</p>
      </div>
      <div v-else-if="error || !articles || articles.length === 0" class="text-center">
        <p class="text-xl text-gray-600">Zatím zde nejsou žádné články. Zkuste to prosím později.</p>
      </div>
      <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BlogCard
          v-for="article in articles"
          :key="article._path"
          :title="article.title || 'Bez názvu'"
          :description="article.description || 'Popis není k dispozici.'"
          :image="article.image || 'https://placehold.co/600x400/A7F3D0/047857?text=Blogový+Obrázek&font=inter'"
          :date="formatDate(article.date)"
          :slug="article._path || '/blog'"
          :tags="article.tags"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BlogCard from '~/components/BlogCard.vue';

useHead({
  title: 'Blog - Agdata',
  meta: [
    { name: 'description', content: 'Přečtěte si nejnovější články a novinky ze světa Agdata a moderního zemědělství.' }
  ]
})

// Načtení článků z Nuxt/Content
// Seřadíme je od nejnovějšího podle data
const { data: articles, pending, error } = await useAsyncData('articles', () =>
  queryCollection('blog')
    .where('_draft', '=', false ) // Zobrazit pouze publikované, ne koncepty nebo části
    .order('date', 'DESC') // Seřadit podle data sestupně (nejnovější první)
    .all()
);

console.log('------- articles',articles.value, error.value); // Pro debugování, můžete odstranit v produkci
const formatDate = (dateString: string | undefined) => {
  if (!dateString) return 'Neznámé datum';
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('cs-CZ', options);
};
</script>