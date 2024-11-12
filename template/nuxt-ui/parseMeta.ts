import * as fs from 'node:fs'
import matter from 'gray-matter'

const componentMds = fs.readdirSync('template/nuxt-ui/.repo/docs/content/2.components').filter(file => file.endsWith('.md'))

const components = componentMds
  .map((file) => {
    const componentName = file.split('.')[0]
    const { content, data: frontmatter } = matter(fs.readFileSync(`template/nuxt-ui/.repo/docs/content/2.components/${file}`, 'utf-8'))
    const usage = content.split(`## Usage`)[1]?.split(`##`)[0]?.trim().replace('```vue\n', '').replace('```', '')

    return {
      name: componentName,
      description: frontmatter.description ?? '',
      usage,
    }
  })
  // Only show component with usage/examples
  .filter(i => !!i.usage)

fs.writeFileSync(
  'template/nuxt-ui/metadata.json',
  JSON.stringify(components),
)
