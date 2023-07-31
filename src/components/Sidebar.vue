<script setup lang="ts"></script>

<template>
  <div id="sidebar">
    <h1>Simple Flow</h1>
    <section class="content-block">
      <h2>Menu</h2>
      <nav>
        <ul>
          <li><a class="active" href="/">Auth</a></li>
          <li><a href="/">Add record</a></li>
          <li><a href="/">All records</a></li>
        </ul>
      </nav>
    </section>
  </div>
</template>

<style scoped>
#sidebar {
  display: flex;
  flex-flow: column nowrap;
  flex: 1 0 10rem;
  align-self: center;
}

#sidebar h2 {
  padding-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #f8f854;
}
</style>
