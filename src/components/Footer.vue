<script setup lang="ts"></script>

<template>
  <footer>
    <p>
      Simple Flow,
      <span id="year">2023</span>
    </p>
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
