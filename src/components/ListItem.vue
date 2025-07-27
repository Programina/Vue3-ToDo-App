<script setup>
import { ref } from "vue";
import { todos, doneTodos } from "../stores/todos";
import { defineProps, defineEmits } from 'vue'

const emit = defineEmits(['remove']) // <- das fehlt

const props = defineProps({
  todos: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="item">
    <div class="details">
      <h2>
        <slot name="heading">Open ToDos</slot>
      </h2>
      <p class="description">
        <slot name="description"> </slot>
      </p>

      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <button @click="$emit('remove', index)">🗑️</button>
      </li>
    </div>
    <br />
    <br />
    <div class="doneitems">
      <h2>
        <slot name="headingdone">Done ToDos</slot>
      </h2>
      <li v-for="(doneTodo, index) in doneTodos" :key="'done-' + index">
        <span :class="{ done: doneTodo.done }">{{ doneTodo.text }}</span>
      </li>
    </div>
  </div>
</template>

<style scoped>
.done {
  text-decoration: line-through;
}

.item {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
