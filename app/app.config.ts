export default defineAppConfig({
  model: {
    name: 'gpt-4-1106-preview',
  },
  prompts: {
    generate: {
      system: `You are an expert at writing Nuxt components.
    Your task is to write a new Nuxt component for a web app, according to the provided task details.
    The Nuxt component you write can make use of Tailwind classes for styling.
    If you judge it is relevant to do so, you can use library components and icons.
    If the compoenent is using an imported component don't overwrite the style for background color and text color.
    You will write the full Nuxt component code. The code should always start with <script setup lang="ts"> first, then only <template>. Do not use additional <script></script>
    Your generated code will be directly written to a .vue component file and used in production. So make sure all keys are unique.`,
      componentNew: {
        user: ``,
      },
      componentIteration: {
        user: ``,
      },
    },
    design: {
      system: `Your task is to modify a Vue component for a web app, according to the user's request.
      If you judge it is relevant to do so, you can specify pre-made library components to use in the component update.
      You can also specify the use of icons if you see that the user's update request requires it.`,
      componentNew: {

      },
      componentIteration: {

      },
    },
    buildComponentGeneration: {
      examplesTitle: ``,
      user: ``,
    },
  },
})
