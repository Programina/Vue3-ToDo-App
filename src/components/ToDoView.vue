<script setup>
import ToDoListItem from './ToDoListItem.vue'
import ToDoInput from './ToDoInput.vue';
import { todos, doneTodos, activeTodos } from '../stores/todos'


// Funktion: Aufgabe entfernen
function deleteTodo(index) {
  todos.value.splice(index, 1);
}
</script>

<template>
  <div class="todo-view">

    <div class="left-view-wrapper">
      <p>Manage your tasks efficiently!</p>
      <!-- ToDoInput component for adding new tasks -->
      <ToDoInput />
    </div>

    <div class="right-view-wrapper">
      <h2>Active ToDos</h2>
      <ul v-if="activeTodos.length > 0">
        <!-- If the to-do exists, display it; if not, show a placeholder text. -->

        <ToDoListItem v-for="(todo, index) in activeTodos" :key="index" :todo="todo" :index="index"
          @delete="deleteTodo" />
      </ul>
      <p v-else class="placeholder-text">
        There are no to dos yet. Please add a task using the input above.
      </p>

      <br />

      <h2 v-if="doneTodos">Done ToDos</h2>
      <ul>
        <div class="doneitems">
          <ToDoListItem v-for="(todo, index) in doneTodos" :key="index" :todo="todo" :index="index"
            @delete="deleteTodo" />
        </div>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.todo-view {
  max-width: 1280px;
  min-width: 600px;
  display: flex;
  flex-direction: row;
}

.left-view-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
}

.right-view-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-left: 2rem;
}

.placeholder-text {
  font-style: italic;
  color: #888;
}
</style>