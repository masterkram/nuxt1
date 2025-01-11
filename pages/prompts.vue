<script setup lang="ts">
const appConfig = useAppConfig().prompts
</script>

<template>
  <div class="max-w-2xl mx-auto mt-20 text-lg space-y-8">
    <div class="border rounded px-8 py-8">
      <p class="text-white font-medium mb-4">
        Generate System Prompt
      </p>
      <p class="text-gray-300 leading-8">
        {{ appConfig.generate.system }}
      </p>
    </div>

    <div class="border rounded px-5 py-8">
      <p class="text-white font-medium mb-4">
        Generate New User Prompt
      </p>
      <p class="text-gray-300">
        {{ appConfig.generate.componentNew.user }}
      </p>
    </div>

    <div class="border rounded px-5 py-8">
      <p class="text-white font-medium mb-4">
        Generate Iteration Component User Prompt
      </p>
      <p class="text-gray-300">
        {{ appConfig.generate.componentIteration.user }}
      </p>
    </div>

    <div class="border rounded px-5 py-8">
      <p class="text-white font-medium mb-4">
        Generate Design System Prompt
      </p>
      <p class="text-gray-300">
        {{ appConfig.design.system }}
      </p>
    </div>

    <div class="border rounded px-5 py-8">
      <p class="text-white font-medium mb-4">
        Generate Design New Component User Prompt
      </p>
      <p class="text-gray-300">
        {{ appConfig.design.componentNew }}
      </p>
    </div>

    <div class="border rounded px-5 py-8">
      <p class="text-white font-medium mb-4">
        Generate System Prompt
      </p>
      <p class="text-gray-300">
        {{ appConfig.generate.system }}
      </p>
    </div>

    <div class="border rounded px-5 py-8">
      <p class="text-white font-medium mb-4">
        Generate System Prompt
      </p>
      <p class="text-gray-300">
        {{ appConfig.generate.system }}
      </p>
    </div>
  </div>
</template>
