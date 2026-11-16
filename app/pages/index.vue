<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryCollection('landing').first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  titleTemplate: '',
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})
</script>

<template>
  <div v-if="page">
    <UPageHero
      :title="page.hero.title"
      :description="page.hero.description"
      :links="page.hero.links"
      :orientation="page.hero.orientation"
    >
      <MDC
        :value="page.hero.code"
        tag="div"
        class="max-w-none"
      />
    </UPageHero>

    <UPageSection
      :title="page.features.title"
      :ui="{ container: 'pt-0 sm:pt-0 lg:pt-0 pb-10 sm:pb-10 lg:pb-10' }"
    >
      <UPageGrid>
        <UPageCard
          v-for="(item, index) of page.features.items"
          :key="index"
          v-bind="item"
        />
      </UPageGrid>
    </UPageSection>

    <UPageSection
      id="first-setup"
      title="Basic usage"
      :ui="{ container: 'pb-0 sm:pb-0 lg:pb-0 pt-5 sm:pt-7 lg:pt-7' }"
    />

    <UPageSection
      v-for="(basicUsage, index) in page.basic_usages"
      :key="index"
      :title="basicUsage.title"
      orientation="horizontal"
      :reverse="index % 2 === 1"
      :ui="{ container: 'pt-0 sm:pt-0 lg:pt-0 pb-8 sm:pb-5 lg:pb-5' }"
    >
      <template #description>
        <MDC
          v-if="basicUsage.description"
          :value="basicUsage.description"
          tag="div"
        />
        <MDC
          v-if="basicUsage.terminal"
          :value="basicUsage.terminal"
          tag="div"
          class="max-w-none"
        />
      </template>

      <MDC
        :value="basicUsage.code"
        tag="div"
        class="max-w-none"
      />
    </UPageSection>

    <UPageSection
      title="Get Started !"
      :ui="{ container: 'pt-5 sm:pt-7 lg:pt-7' }"
    >
      <div class="text-center">
        <UButton v-bind="page.get_started" />
      </div>
    </UPageSection>
  </div>
</template>
