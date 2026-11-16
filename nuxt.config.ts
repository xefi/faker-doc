// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-og-image',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    'nuxt-gtag'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://faker-php.xefi.com',
    name: 'Faker PHP - Generate fake data on demand'
  },

  content: {
    build: {
      markdown: {
        highlight: {
          langs: ['php', 'bash']
        }
      }
    },
    experimental: {
      sqliteConnector: 'native'
    }
  },

  // The landing page renders its code blocks with <MDC>, which highlights them
  // server side through this API route (disabled by default by Nuxt Content).
  // It only runs while prerendering, the result ships in the page payload.
  mdc: {
    highlight: {
      noApiRoute: false,
      langs: ['php', 'bash']
    }
  },

  routeRules: {
    '/': { prerender: true },
    // Entry points for language models and AI coding agents, see https://llmstxt.org
    '/llms.txt': { prerender: true },
    '/llms-full.txt': { prerender: true }
  },

  compatibilityDate: '2026-06-30',

  nitro: {
    prerender: {
      crawlLinks: true
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  ogImage: {
    zeroRuntime: true
  }
})
