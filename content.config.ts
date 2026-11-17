import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const link = z.object({
  label: z.string(),
  icon: z.string().optional(),
  trailing: z.boolean().optional(),
  to: z.string(),
  size: z.enum(['xs', 'sm', 'md', 'lg', 'xl']).optional(),
  color: z.enum(['primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral']).optional(),
  variant: z.enum(['solid', 'outline', 'soft', 'subtle', 'ghost', 'link']).optional(),
  target: z.enum(['_blank', '_parent', '_self', '_top']).optional()
})

export default defineContentConfig({
  collections: {
    landing: defineCollection({
      type: 'data',
      source: 'index.yml',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        hero: z.object({
          title: z.string(),
          description: z.string(),
          orientation: z.enum(['horizontal', 'vertical']).optional(),
          links: z.array(link),
          code: z.string()
        }),
        features: z.object({
          title: z.string(),
          items: z.array(z.object({
            title: z.string(),
            description: z.string(),
            icon: z.string()
          }))
        }),
        basic_usages: z.array(z.object({
          title: z.string(),
          description: z.string().optional(),
          terminal: z.string().optional(),
          code: z.string()
        })),
        get_started: link
      })
    }),
    docs: defineCollection({
      type: 'page',
      source: {
        include: '**',
        exclude: ['index.yml']
      }
    })
  }
})
