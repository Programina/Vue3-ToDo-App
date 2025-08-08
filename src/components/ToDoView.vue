<script setup>
import ToDoListItem from './ToDoListItem.vue'
import ToDoInput from './ToDoInput.vue';
import { todos, doneTodos, activeTodos } from '../stores/todos'
import EditableTitle from './atomicomponents/EditableTitle.vue';


// Funktion: Aufgabe entfernen
function deleteTodo(index) {
  todos.value.splice(index, 1);
}
</script>

<template>
  <div class="todo-view">

    <div class="left-view-wrapper">
      <h2>ToDoView.vue</h2>
      <!-- ToDoInput component for adding new tasks -->
      <ToDoInput />
    </div>

    <div class="right-view-wrapper">
      <h2>EDITABLe (ToDoView.vue)</h2>
      <EditableTitle/>

      <h3>Active </h3>
      <ul v-if="activeTodos.length > 0">
        <!-- If the to-do exists, display it; if not, show a placeholder text. -->

        <ToDoListItem v-for="(todo, index) in activeTodos" :key="index" :todo="todo" :index="index"
          @delete="deleteTodo" />
      </ul>
      <p v-else class="placeholder-text">
        There are no to dos yet. Please add a task using the input above.
      </p>

      <br />

      <h2 v-if="doneTodos.length > 0">Done ToDos</h2>
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
  height: 100%; 
  margin-top: 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: left;
}

.right-view-wrapper {
  width: 100%;
  height: 100%; 
  margin-top: 0;
  padding: 1rem;
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