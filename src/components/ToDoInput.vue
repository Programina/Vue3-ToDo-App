<script setup>
import { ref } from "vue";
import { todos } from "../stores/todos";

defineProps({
  msg: {
    type: String,
    required: true,
  },
});

// Reaktive Werte
const newTodo = ref("");

// Funktion: Aufgabe hinzufügen
function addTodo() {
  if (newTodo.value.trim()) {
    todos.value.push({ text: newTodo.value, done: false });
    newTodo.value = "";
  }
}

// Funktion: Aufgabe entfernen
function removeTodo(index) {
  todos.value.splice(index, 1);
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>Please create your first to do item:</h3>

    <form @submit.prevent="addTodo">
      <label for="todoitem"> To Do </label>
      <input
        type="text"
        name="todoitem"
        id="todoitem"
        v-model="newTodo"
        placeholder="Neue Aufgabe newTodo..."
        max-length="10"
      />

      <br />

      <button type="submit">Submit</button>
    </form>
    <ToDoList :todos="todos" @remove="removeTodo" />
 
  </div>
</template>

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

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
