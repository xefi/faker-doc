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

  // The static site has no icon API: bundle every icon the browser may render,
  // or it falls back to the public Iconify API. The source scan misses the ones
  // referenced from app.config.ts, content/index.yml and Nuxt UI's own defaults.
  icon: {
    clientBundle: {
      scan: true,
      icons: [
        'fe:feather',
        'heroicons:arrow-right-20-solid',
        'heroicons:globe-alt',
        'heroicons:pencil-square',
        'heroicons:star',
        'mdi:auto-fix',
        'mdi:extension-outline',
        'mdi:flash-outline',
        'mdi:github',
        'mdi:link',
        'simple-icons:github',
        'lucide:arrow-down',
        'lucide:arrow-left',
        'lucide:arrow-right',
        'lucide:arrow-up',
        'lucide:arrow-up-right',
        'lucide:check',
        'lucide:chevron-down',
        'lucide:chevron-left',
        'lucide:chevron-right',
        'lucide:chevron-up',
        'lucide:chevrons-left',
        'lucide:chevrons-right',
        'lucide:circle-alert',
        'lucide:circle-check',
        'lucide:circle-x',
        'lucide:copy',
        'lucide:copy-check',
        'lucide:ellipsis',
        'lucide:eye',
        'lucide:eye-off',
        'lucide:file',
        'lucide:folder',
        'lucide:folder-open',
        'lucide:grip-vertical',
        'lucide:hash',
        'lucide:info',
        'lucide:lightbulb',
        'lucide:loader-circle',
        'lucide:menu',
        'lucide:minus',
        'lucide:monitor',
        'lucide:moon',
        'lucide:panel-left-close',
        'lucide:panel-left-open',
        'lucide:plus',
        'lucide:rotate-ccw',
        'lucide:search',
        'lucide:square',
        'lucide:star',
        'lucide:sun',
        'lucide:terminal',
        'lucide:triangle-alert',
        'lucide:upload',
        'lucide:x'
      ]
    }
  },

  ogImage: {
    zeroRuntime: true
  }
})
