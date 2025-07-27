<script setup>
import ListItem from "./ToDoListItem.vue";
import { todos, doneTodos } from "../stores/todos";

// Funktion: Aufgabe entfernen
function removeTodo(index) {
  todos.value.splice(index, 1);
}

function removeDoneTodo(index) {
  doneTodos.value.splice(index, 1);
}

function doneTodo(index) {
  doneTodos.value.push(todos.value[index]);
  todos.value.splice(index, 1);
}

function undoneTodo(index) {
  todos.value.push(doneTodos.value[index]);
  doneTodos.value.splice(index, 1);
}
</script>

<template>
  <div class="details">
    <h2>
      <slot name="heading">Open ToDos</slot>
    </h2>
    <p class="description">
      <slot name="description"> </slot>
    </p>
  </div>
  <ul v-for="(todo, index) in todos" :key="index">
    <ListItem :todo="todo" @done="doneTodo(index)" @remove="removeTodo(index)"/>
  </ul>
    <div class="details">
    <h2>
      <slot name="heading">Done ToDos</slot>
    </h2>
    <p class="description">
      <slot name="description"> </slot>
    </p>
  </div>
  <ul v-for="(doneTodo, index) in doneTodos" :key="index">
    <ListItem :todo="doneTodo" isChecked="true" @done="undoneTodo(index)" @remove="removeDoneTodo(index)"/>
  </ul>
</template>

<style scoped></style>
