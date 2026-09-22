import { serverQueryContent } from '#content/server'

export default eventHandler(async (event) => {
  const documents = await serverQueryContent(event)
    .where({ _type: 'markdown', navigation: { $ne: false } })
    .sort({ _id: 1 })
    .find()

  const sections = new Map<string, string[]>()

  for (const document of documents) {
    const section = sectionOf(document._path || '')
    const description = document.description ? `: ${document.description}` : ''

    if (!sections.has(section)) {
      sections.set(section, [])
    }

    sections.get(section)!.push(`- [${document.title}](${SITE_URL}${document._path})${description}`)
  }

  const lines = [
    '# Faker PHP',
    '',
    '> Faker PHP (`xefi/faker-php`) generates fake data for PHP 8.3+ applications: tests, fixtures, database seeding and anonymisation. It is a standalone library, not a fork of `fakerphp/faker`, with a modular design where locales, extra generators and framework bridges are installed as separate Composer packages.',
    '',
    '```bash',
    'composer require --dev xefi/faker-php',
    '```',
    '',
    'Usage: `$faker = new Xefi\\Faker\\Faker();` then call any generator, for example `$faker->name()`, `$faker->number(1, 10)` or `$faker->iban()`.',
    'Chain `unique()`, `valid()`, `regex()` to constrain a value, and `nullable()`, `uppercase()`, `lowercase()`, `ucfirst()` to transform it.',
    ''
  ]

  for (const [section, entries] of sections) {
    lines.push(`## ${sectionTitle(section)}`, '', ...entries, '')
  }

  lines.push(
    '## Optional',
    '',
    `- [Full documentation as a single file](${SITE_URL}/llms-full.txt): every page above, concatenated`,
    '- [Source repository](https://github.com/xefi/faker-php): core package, issues and contribution guide',
    '- [Packagist](https://packagist.org/packages/xefi/faker-php): releases and the `xefi/faker-php-*` extension packages',
    ''
  )

  setHeader(event, 'content-type', 'text/plain; charset=utf-8')

  return lines.join('\n')
})
