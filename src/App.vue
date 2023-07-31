<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import Sidebar from './components/Sidebar.vue'
import MainView from './views/MainView.vue'
</script>

<template>
  <div id="page">
    <div id="content">
      <Sidebar />
      <MainView />
    </div>
    <Footer />
  </div>
</template>

<style scoped></style>
