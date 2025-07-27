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
    todos.value.push({ text: newTodo.value });
    newTodo.value = "";
  }
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>Enter your to dos here:</h3>

    <form @submit.prevent="addTodo" class="todo-form">
      <div class="input-group">
        <label for="todoitem" class="visually-hidden">To Do</label>
        <input
          type="text"
          name="todoitem"
          id="todoitem"
          v-model="newTodo"
          placeholder="Neue Aufgabe..."
          class="todo-input"
        />
        <button type="submit" class="submit-btn">Submit</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.todo-form {
  width: 100%;
}

.input-group {
  display: flex;
  gap: 1rem;
  width: 100%;
}

.todo-input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
}

.todo-input:focus {
  border-color: #42b883;
  box-shadow: 0 0 0 2px rgba(66, 184, 131, 0.2);
}

.submit-btn {
  padding: 0.75rem 1.5rem;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-btn:hover {
  background-color: #3aa876;
}

.submit-btn:active {
  background-color: #359469;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

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
