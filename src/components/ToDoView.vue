<script setup>
import ToDoListItem from './ToDoListItem.vue'
import ToDoInput from './ToDoInput.vue';
import { ref } from 'vue';
import { todos } from '../stores/todos'


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

  <h2>Open ToDos</h2>
  <ul>
    <ToDoListItem 
      v-for="(todo, index) in todos" 
      :key="index"
      :todo="todo"
      :index="index"
      @delete="deleteTodo" />
  </ul>

  <!-- <h2>Done ToDos</h2>
   <ul>
    <div class="doneitems">
      <li v-for="(doneTodo, index) in doneTodos" :key="'done-' + index">
        <span :class="{ done: doneTodo.done }">{{ doneTodo.text }}</span>
      </li>
    </div>
    <ToDoListItem :todos="todos" @delete="deleteTodo" />
  </ul> -->

  

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
</style>