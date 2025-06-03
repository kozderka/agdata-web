<template>
  <div class="section-padding">
    <div class="container mx-auto px-6">
      <article v-if="article" class="prose prose-lg lg:prose-xl max-w-3xl mx-auto">
        <NuxtLink to="/blog" class="text-green-600 hover:text-green-700 mb-8 inline-block">
          &larr; Zpět na blog
        </NuxtLink>
        <h1 class="text-emerald-700">{{ article.title }}</h1>
        <p v-if="article.date" class="text-gray-500 text-sm">
          Publikováno: {{ formatDate(article.date) }}
        </p>
        <img
            v-if="article.image"
            :src="article.image"
            :alt="article.title || 'Obrázek článku'"
            class="rounded-lg my-8 shadow-md"
            onerror="this.style.display='none'"
        />
        <ContentRenderer :value="article" />
      </article>
      <div v-else-if="pending" class="text-center">
        <p>Načítání článku...</p>
      </div>
      <div v-else class="text-center">
        <h1 class="text-3xl font-bold mb-4">Článek nenalezen</h1>
        <p class="text-gray-600 mb-8">Omlouváme se, ale požadovaný článek nebyl nalezen.</p>
        <NuxtLink to="/blog" class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-5 rounded-lg">
          Zpět na blog
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug.join('/') // Získáme celý slug

const { data: article, pending, error } = await useAsyncData(`blog-post-${slug}`, () =>
  queryContent('/blog', slug).findOne()
)

if (error.value && process.client) {
  console.error("Chyba při načítání článku:", error.value)
  // Můžete zvážit přesměrování na 404 stránku
  // throw createError({ statusCode: 404, statusMessage: 'Článek nenalezen', fatal: true })
}

// Nastavení meta tagů pro SEO na základě článku
useHead(() => {
  if (article.value) {
    return {
      title: `${article.value.title || 'Blogový článek'} - Agdata`,
      meta: [
        { name: 'description', content: article.value.description || 'Přečtěte si více o tomto tématu na blogu Agdata.' }
      ]
    }
  }
  return {
    title: 'Článek nenalezen - Agdata'
  }
})

const formatDate = (dateString: string | undefined) => {
  if (!dateString) return '';
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('cs-CZ', options);
};
</script>