<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="content-block">
    <h2>Menu</h2>
    <nav>
      <ul>
        <li><RouterLink to="/">Auth</RouterLink></li>
        <li><RouterLink to="/add-record">Add record</RouterLink></li>
        <li><RouterLink to="/all-records">All records</RouterLink></li>
      </ul>
    </nav>
  </section>
</template>

<style scoped>
nav {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  list-style: none;
}

nav > ul li a {
  display: block;
  padding: 0.3rem 1.5rem;
  font-size: 1.4rem;
  color: whitesmoke;
  text-decoration: none;
}

nav > ul li:hover {
  background: black;
}

nav > ul li .router-link-active {
  background-color: #aaaaaa;
  color: #040402;
  font-weight: bold;
}
@media all and (max-width: 900px) {
  nav {
    flex-flow: row wrap;
    justify-content: space-around;
  }

  nav > ul li {
    display: inline-block;
  }
}

h2 {
  padding-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #f8f854;
}
</style>
