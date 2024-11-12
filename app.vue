<script setup lang="ts">
</script>

<template>
  <Body class="dark">
    <UiTooltipProvider>
      <NuxtLoadingIndicator color="hsl(var(--primary))" />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UiTooltipProvider>
  </Body>
</template>
