<script setup lang="ts"></script>

<template>
  <main class="content-block">
    <h2>Form</h2>
    <form action="#" method="post">
      <div class="form-fields">
        <div class="form-field">
          <label class="label" for="text">Text:</label>
          <input id="text" name="text" type="text" />
        </div>
        <div class="form-field">
          <label class="label" for="password">Password:</label>
          <input id="password" name="password" type="password" />
        </div>
      </div>

      <div class="form-fields">
        <div class="form-field">
          <label class="label" for="email">Email:</label>
          <input id="email" name="email" type="email" />
        </div>
        <div class="form-field">
          <label class="label" for="number">Number:</label>
          <input id="number" name="number" type="number" />
        </div>
      </div>

      <label class="label">Checkbox:</label>
      <input id="checkbox1" name="checkbox1" type="checkbox" />
      <label for="checkbox1">Checkbox 1</label>
      <input id="checkbox2" name="checkbox2" type="checkbox" />
      <label for="checkbox2">Checkbox 2</label>
      <input id="checkbox3" name="checkbox3" type="checkbox" />
      <label for="checkbox3">Checkbox 3</label>

      <label class="label">Radio buttons:</label>
      <input id="radio1" name="radio" type="radio" value="radio1" />
      <label for="radio1">Radio 1</label>
      <input id="radio2" name="radio" type="radio" value="radio2" />
      <label for="radio2">Radio 2</label>

      <label class="label" for="textarea">Textarea:</label>
      <textarea cols="50" id="textarea" name="textarea" rows="4"></textarea>

      <div class="buttons-margin">
        <button class="btn" onclick="dummyHandler()">Submit</button>
        <button class="btn" onclick="dummyHandler()">Cancel</button>
      </div>
    </form>
  </main>
</template>

<style scoped></style>
