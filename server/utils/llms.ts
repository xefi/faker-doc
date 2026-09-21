export const SITE_URL = 'https://faker-php.xefi.com'

export const SECTION_TITLES: Record<string, string> = {
  'getting-started': 'Getting Started',
  extensions: 'Extensions',
  locales: 'Locales'
}

interface AstNode {
  type?: string
  tag?: string
  value?: string
  props?: Record<string, any>
  children?: AstNode[]
}

export function sectionOf(path: string): string {
  return path.split('/').filter(Boolean)[0] || 'documentation'
}

export function sectionTitle(section: string): string {
  return SECTION_TITLES[section] || section.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

function inline(nodes: AstNode[] = []): string {
  return nodes.map((node) => {
    if (node.type === 'text') {
      return node.value || ''
    }

    switch (node.tag) {
      case 'code':
        return `\`${inline(node.children)}\``
      case 'a':
        return `[${inline(node.children)}](${absolute(node.props?.href)})`
      case 'strong':
        return `**${inline(node.children)}**`
      case 'em':
        return `_${inline(node.children)}_`
      case 'br':
        return '\n'
      default:
        return inline(node.children)
    }
  }).join('')
}

function absolute(href = ''): string {
  return href.startsWith('/') ? `${SITE_URL}${href}` : href
}

function listItems(nodes: AstNode[] = [], marker: (index: number) => string): string {
  return nodes
    .filter(node => node.tag === 'li')
    .map((node, index) => `${marker(index)}${block(node.children).replace(/\n/g, '\n  ')}`)
    .join('\n')
}

function block(nodes: AstNode[] = [], headingOffset = 0): string {
  return nodes.map((node) => {
    if (node.type === 'text') {
      return (node.value || '').trim()
    }

    const heading = node.tag?.match(/^h([1-6])$/)
    if (heading) {
      const level = Math.min(Number(heading[1]) + headingOffset, 6)

      return `${'#'.repeat(level)} ${inline(node.children)}`
    }

    switch (node.tag) {
      case 'pre':
        return `\`\`\`${node.props?.language || ''}\n${(node.props?.code || inline(node.children)).replace(/\n+$/, '')}\n\`\`\``
      case 'ul':
        return listItems(node.children, () => '- ')
      case 'ol':
        return listItems(node.children, index => `${index + 1}. `)
      case 'li':
      case 'p':
        return inline(node.children)
      case 'blockquote':
        return block(node.children, headingOffset).split('\n').map(line => `> ${line}`).join('\n')
      case 'hr':
        return '---'
      default:
        // Unknown tags (Nuxt UI components used in markdown, tables, ...) still
        // carry their text content, which is what a model needs.
        return block(node.children, headingOffset)
    }
  }).filter(Boolean).join('\n\n').replace(/\n{3,}/g, '\n\n')
}

export function renderBody(body?: AstNode, headingOffset = 0): string {
  return block(body?.children, headingOffset).trim()
}
