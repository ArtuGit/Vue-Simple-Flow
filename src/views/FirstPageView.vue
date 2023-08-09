<script setup lang="ts">
import { useConfigStore } from '@/stores/config'

const store = useConfigStore()
const { appDescription } = store
</script>

<template>
  <main class="content-block">
    <h2>Authentication</h2>
    <p>{{ appDescription }}</p>
  </main>
</template>

<style scoped></style>
