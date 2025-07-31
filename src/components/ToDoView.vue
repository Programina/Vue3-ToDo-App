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
    <p>Manage your tasks efficiently!</p>
    <!-- ToDoInput component for adding new tasks -->
  <ToDoInput/>

<br/>

  <h2>Active ToDos</h2>
  <ul v-if="activeTodos.length > 0">
    <!-- If the to-do exists, display it; if not, show a placeholder text. -->
  
      <ToDoListItem 
      v-for="(todo, index) in activeTodos" 
      :key="index"
      :todo="todo"
      :index="index"
      @delete="deleteTodo" />
  </ul>
  <p class="placeholder-text" v-else>
        There are no to dos yet. Please add a task using the input above.
  </p>

  <h2 v-if="doneTodos">Done ToDos</h2>
   <ul>
    <div class="doneitems">
      <ToDoListItem 
      v-for="(todo, index) in doneTodos" 
      :key="index"
      :todo="todo"
      :index="index"
      @delete="deleteTodo" />

      <li v-for="(doneTodo, index) in doneTodos" :key="'done-' + index">
        <span :class="{ done: doneTodo.done }">{{ doneTodo.text }}</span>
      </li>
    </div>
    
  </ul>

  

     <!-- 
      @toggle-task="toggleTask"
    /> -->
  </div>  
</template>

<style scoped>
.todo-view {
  max-width: 1280px;
  min-width: 600px;
}

.placeholder-text {
  font-style: italic;
  color: #888;
}
</style>