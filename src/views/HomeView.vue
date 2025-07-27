<script setup>
import ToDoInput from "../components/ToDoInput.vue";
import ToDoList from "../components/ToDoList.vue";
</script>

<template>
  <main class="todo-container">
    <h1 class="heading">Meine barrierefreie To-Do-Liste</h1>
    <div class="todo-content">
      <ToDoInput msg="To Do List App" />
      <ToDoList />
    </div>
  </main>
</template>

<style scoped>
.todo-container {
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  font-family: system-ui, sans-serif;
}

.heading {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
  font-weight: 600;
}

.todo-content {
  width: 100%;
  grid-template-columns: 1fr;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}
</style>

