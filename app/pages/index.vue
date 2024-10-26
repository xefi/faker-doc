<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

useSeoMeta({
  titleTemplate: '',
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})
</script>

<template>
  <div>
    <ULandingHero
      v-if="page.hero"
      v-bind="page.hero"
    >
      <template #headline>
        <UBadge
          v-if="page.hero.headline"
          variant="subtle"
          size="lg"
          class="relative rounded-full font-semibold"
        >
          <NuxtLink
            :to="page.hero.headline.to"
            target="_blank"
            class="focus:outline-none"
            tabindex="-1"
          >
            <span
              class="absolute inset-0"
              aria-hidden="true"
            />
          </NuxtLink>

          {{ page.hero.headline.label }}

          <UIcon
            v-if="page.hero.headline.icon"
            :name="page.hero.headline.icon"
            class="ml-1 w-4 h-4 pointer-events-none"
          />
        </UBadge>
      </template>

      <template #title>
        <MDC :value="page.hero.title" />
      </template>

      <MDC
        :value="page.hero.code"
        tag="pre"
        class="prose prose-primary dark:prose-invert mx-auto"
      />
    </ULandingHero>

    <ULandingSection
      :title="page.features.title"
      :links="page.features.links"
      :ui="{wrapper: 'pt-0 sm:pt-0 pb-10 sm:pb-10'}"
    >
      <UPageGrid>
        <ULandingCard
          v-for="(item, index) of page.features.items"
          :key="index"
          v-bind="item"
        />
      </UPageGrid>
    </ULandingSection>

    <span class="w-0 sm:pt-0 pt-0" id="first-setup"></span>

    <ULandingSection :ui="{wrapper: 'pb-0 mb-0 sm:pb-7 pb-5'}"
                     title="Basic usage"
    />

    <template v-for="(basic_usage, index) in page.basic_usages">
      <ULandingSection v-bind="basic_usage" :align="index % 2 === 0 ? 'left' : 'right'" :ui="{wrapper: 'pt-0 sm:pt-0 pb-8 sm:pb-5'}">
        <template #description>
          <span v-if="basic_usage.description" v-html="basic_usage.description" />
          <MDC v-if="basic_usage.terminal" :value="basic_usage.terminal" tag="div" class="prose prose-primary dark:prose-invert mx-auto" />
        </template>
        <MDC :value="basic_usage.code" tag="pre" class="prose prose-primary dark:prose-invert max-w-none"  />
      </ULandingSection>
    </template>

    <ULandingSection :ui="{wrapper: 'pt-0 mt-0 sm:pt-7 pt-5'}"
                     title="Get Started !"
    >
      <div class="text-center">
        <UButton v-bind="page.get_started" />
      </div>
    </ULandingSection>

  </div>
</template>
