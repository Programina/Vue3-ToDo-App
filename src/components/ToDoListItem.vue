<script setup>
import { defineProps } from 'vue'

const emit = defineEmits(['delete']) 

const props = defineProps({
  todo: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <li class="item">
      <input type="checkbox" v-model="todo.done" />
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="$emit('delete', index)"> Delete</button>
  </li>
</template>

<style scoped>
.done {
  text-decoration: line-through;
}

.item {
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 500px;
  margin-top: 2rem;

  input {
    margin-right: 1rem;
    width: 20px;
    height: 20px;
  }

  button {
    margin-left: auto;
    padding: 0;
    background-color: transparent;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }


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
    /* padding: 0.4rem 0 1rem calc(var(--section-gap) / 2); */
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
