export default defineAppConfig({
  ui: {
    primary: 'red',
    gray: 'slate',
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    }
  },
  seo: {
    siteName: 'Nuxt UI Pro - Docs template'
  },
  header: {
    logo: {
      alt: '',
      light: '/xefi-light.svg',
      dark: '/xefi-dark.svg'
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/xefi/faker-php',
      'target': '_blank',
      'aria-label': 'Find the project on GitHub'
    }]
  },
  footer: {
    credits: 'Copyright © 2024',
    colorMode: false,
    links: [{
      'icon': 'i-heroicons-ellipsis-horizontal-circle',
      'to': 'https://xefi.com',
      'target': '_blank',
      'aria-label': 'XEFI'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/xefi/faker-php',
      'target': '_blank',
      'aria-label': 'Find the project on GitHub'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/xefi/faker-php',
      links: [{
        icon: 'i-heroicons-star',
        label: 'Star on GitHub',
        to: 'https://github.com/xefi/faker-php',
        target: '_blank'
      }]
    }
  }
})
