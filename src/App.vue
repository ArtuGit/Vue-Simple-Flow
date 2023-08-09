<script setup lang="ts">
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <div id="page">
    <div id="content">
      <Sidebar />
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<style scoped></style>
