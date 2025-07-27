<script setup>
import { defineProps, defineEmits } from 'vue';

const emit = defineEmits(['done', 'remove']);

const props = defineProps({
  todo: {
    type: Object,
    required: true
  },
  isChecked: {
    type: Boolean,
    default: false
  }
});

function remove() {
  emit('remove');
}

function done(event) {
  emit('done', event.target.checked);
}
</script>

<template>
  <div>
    <input type="checkbox" @change="done" :checked="isChecked"/>
    <span>{{ props.todo.text }}</span>
    <button @click.prevent="remove" class="link-button green">🗑️ Delete</button>
  </div>
</template>
