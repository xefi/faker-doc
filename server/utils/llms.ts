export const SITE_URL = 'https://faker-php.xefi.com'

const SECTION_TITLES: Record<string, string> = {
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

const BLOCK_TAGS = ['pre', 'ul', 'ol', 'table', 'blockquote']

function isBlock(node: AstNode): boolean {
  return BLOCK_TAGS.includes(node.tag || '') || /^h[1-6]$/.test(node.tag || '')
}

function listItems(nodes: AstNode[] = [], marker: (index: number) => string): string {
  return nodes
    .filter(node => node.tag === 'li')
    .map((node, index) => {
      // A tight list item stays on one line; only nested blocks get the block treatment.
      const content = (node.children || []).some(isBlock)
        ? block(node.children)
        : inline(node.children)

      return `${marker(index)}${content.replace(/\n/g, '\n  ')}`
    })
    .join('\n')
}

function tableRows(node: AstNode): string[][] {
  const rows: string[][] = []

  const walk = (current?: AstNode) => {
    if (!current) {
      return
    }

    if (current.tag === 'tr') {
      rows.push((current.children || [])
        .filter(cell => cell.tag === 'th' || cell.tag === 'td')
        .map(cell => inline(cell.children)))

      return
    }

    (current.children || []).forEach(walk)
  }

  walk(node)

  return rows
}

function table(node: AstNode): string {
  const [header, ...body] = tableRows(node)

  if (!header) {
    return ''
  }

  return [
    `| ${header.join(' | ')} |`,
    `| ${header.map(() => '---').join(' | ')} |`,
    ...body.map(row => `| ${row.join(' | ')} |`)
  ].join('\n')
}

function block(nodes: AstNode[] = [], headingOffset = 0): string {
  return nodes.map((node) => {
    if (node.type === 'text') {
      return (node.value || '').trim()
    }

    // The syntax highlighter injects its stylesheet in the document body.
    if (node.tag === 'style' || node.tag === 'script') {
      return ''
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
      case 'table':
        return table(node)
      case 'hr':
        return '---'
      default:
        // Unknown tags (Nuxt UI components used in markdown, wrappers, ...)
        // still carry their text content, which is what a model needs.
        return block(node.children, headingOffset)
    }
  }).filter(Boolean).join('\n\n').replace(/\n{3,}/g, '\n\n')
}

export function renderBody(body?: AstNode, headingOffset = 0): string {
  return block(body?.children, headingOffset).trim()
}
