import { downloadTemplate } from 'giget'

downloadTemplate('gh:nuxt/ui#dev', {
  dir: 'nuxt-ui/.repo',
  force: true,
  forceClean: true,
})
