<script setup lang="ts">
useHead({
  title: 'CRM',
})
</script>

<template>
  <div class="p-10">
    <h1 class="text-2xl font-bold mb-10">Nuxt 3 CRM</h1>
    <div>
      <UiCard class="mb-3" draggable="true">
        <UiCardHeader role="button">Card name</UiCardHeader>
        <UiCardContent>Company</UiCardContent>
        <UiCardFooter>Footer</UiCardFooter>
      </UiCard>
    </div>
  </div>
</template>

<style scoped>

</style>