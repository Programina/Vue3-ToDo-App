import { ref, computed } from "vue";

export const todos = ref([]);
export const doneTodos = computed(
  () =>
    todos.value
      .filter((todo) => todo.done)
      .map((todo) => ({ ...todo, done: true })) // force done = true for display
);
