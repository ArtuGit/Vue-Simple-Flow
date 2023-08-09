<script setup lang="ts">
import { RouterLink} from 'vue-router'
</script>

<template>
  <section class="content-block">
    <h2>Menu</h2>
    <nav>
      <ul>
        <li><a class="active" href="/">Auth</a></li>
        <li><a href="/">Add record</a></li>
        <li><a href="/">All records</a></li>
      </ul>
    </nav>

    <nav>
      <RouterLink to="/">Auth</RouterLink>
      <RouterLink to="/add-record">Add record</RouterLink>
      <RouterLink to="/all-records">All records</RouterLink>
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

nav > ul li .active {
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
