<script setup>
import { ref } from "vue";
import { todos } from "../stores/todos";

// Reaktive Werte
const newTodo = ref("");

// Funktion: Aufgabe hinzufügen
function addTodo() {
  if (newTodo.value.trim()) {
    todos.value.push({ text: newTodo.value, done: false });
    newTodo.value = "";
  }
}

</script>

<template>

  <h3></h3>

  <form @submit.prevent="addTodo" class="mt-5 mb-2">
    <label for="todoitem">Enter a task: </label>
    <input type="text" name="todoitem" id="todoitem" v-model="newTodo" placeholder="Neue Aufgabe newTodo..."
      max-length="10" />

    <br />

    <button type="submit" role="button">Submit</button>
  </form>

</template>

<style>
/* Global Styles */
button {
  /* These styles are inherited from main.css */
}
</style>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

:deep(button) {
  /* Erlaubt globale Button-Styles */
}

#todoitem
{
  width: 100%;
  margin: 0.5rem 0;
  border: 1px solid var(--color-border);
}

form {
  display: flex;
  flex-direction: column;
}
</style>
