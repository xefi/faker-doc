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
    siteName: 'Faker PHP - Generate fake data on demand'
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
    credits: 'Copyright © ' + (new Date().getFullYear()),
    colorMode: false,
    links: [{
      'icon': 'i-mdi-github',
      'to': 'https://github.com/xefi/faker-php',
      'target': '_blank',
      'aria-label': 'Xefi Faker PHP on GitHub'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/xefi/faker-doc/edit/main/content',
      links: [{
        icon: 'i-heroicons-star',
        label: 'Star on GitHub',
        to: 'https://github.com/xefi/faker-php',
        target: '_blank'
      }]
    }
  }
})
