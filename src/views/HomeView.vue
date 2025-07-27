<script setup>
import ToDoList from "../components/ToDoList.vue";
</script>

<template>
  <main>
    <h1>Meine barrierefreie To-Do-Liste</h1>
    <ToDoList />
    <!-- // <TodoInput @add-task="addTask" /> -->
    <!-- <TodoList
      :tasks="tasks"
      @toggle-task="toggleTask"
      @delete-task="deleteTask"
    /> -->
  </main>
</template>
