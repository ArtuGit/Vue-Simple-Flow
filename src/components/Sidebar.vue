<script setup lang="ts">
import Menu from './Menu.vue'
</script>

<template>
  <div id="sidebar">
    <h1>Simple Flow</h1>
    <Menu />
  </div>
</template>

<style scoped>
#sidebar {
  display: flex;
  flex-flow: column nowrap;
  flex: 1 0 10rem;
  align-self: center;
}
</style>
