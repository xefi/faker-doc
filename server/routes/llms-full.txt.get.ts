import { serverQueryContent } from '#content/server'

export default eventHandler(async (event) => {
  const documents = await serverQueryContent(event)
    .where({ _type: 'markdown', navigation: { $ne: false } })
    .sort({ _id: 1 })
    .find()

  const lines = [
    '# Faker PHP documentation',
    '',
    '> Faker PHP (`xefi/faker-php`) generates fake data for PHP 8.3+ applications. This file concatenates the whole documentation site for consumption by language models.',
    `> Source: ${SITE_URL}`,
    ''
  ]

  let currentSection = ''

  for (const document of documents) {
    const section = sectionOf(document._path || '')

    if (section !== currentSection) {
      currentSection = section
      lines.push(`# ${sectionTitle(section)}`, '')
    }

    lines.push(
      `## ${document.title}`,
      '',
      `Source: ${SITE_URL}${document._path}`,
      ''
    )

    if (document.description) {
      lines.push(document.description, '')
    }

    lines.push(renderBody(document.body, 1), '', '---', '')
  }

  setHeader(event, 'content-type', 'text/plain; charset=utf-8')

  return lines.join('\n')
})
