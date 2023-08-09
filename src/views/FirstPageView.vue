<script setup lang="ts">
import { useConfigStore } from '@/stores/config'

const store = useConfigStore()
const { appDescription } = store
</script>

<template>
  <main class="content-block">
    <h2>Authentication</h2>
    <p>{{ appDescription }}</p>

    <h2>Form</h2>
    <form action="#" method="post">
      <div class="form-fields">
        <div class="form-field">
          <label class="label" for="text">Username:</label>
          <input id="text" name="username" type="text" />
        </div>
        <div class="form-field">
          <label class="label" for="password">Password:</label>
          <input id="password" name="password" type="password" />
        </div>
      </div>

      <div class="buttons-margin">
        <button class="btn" onclick="dummyHandler()">Submit</button>
        <button class="btn" onclick="dummyHandler()">Cancel</button>
      </div>
    </form>
  </main>
</template>

<style scoped></style>
