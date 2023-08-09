<script setup lang="ts">
import { useConfigStore } from '@/stores/config'

const store = useConfigStore()
const { appName } = store
</script>

<template>
  <footer>
    <p>{{ appName }}<span id="year">, 2023</span></p>
  </footer>
</template>

<style scoped>
footer {
  flex-shrink: 0;
  background: #fafafb;
  height: 1.8rem;
}

footer > p {
  color: #af0000;
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
}

#year {
  color: black;
  font-weight: normal;
}
</style>
