<script setup lang="ts">
import Menu from './Menu.vue'
import { useConfigStore } from '@/stores/config'

const store = useConfigStore()
const { appName } = store
</script>

<template>
  <div id="sidebar">
    <h1>{{ appName }}</h1>
    <Menu />
  </div>
</template>

<style scoped>
#sidebar {
  display: flex;
  flex-flow: column nowrap;
  flex: 1 0 10rem;
}
</style>
