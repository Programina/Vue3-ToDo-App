<script setup>

// EditableTitle component, parents: ToDoList > ToDoListItem > EditableTitle
import { defineProps } from 'vue'

const props = defineProps({
    title: {
        type: Object,
        default: () => ({
            text: 'Editable Title',
            placeholder: 'Editable Title',
            maxLength: 50,
            editableTitleStyle: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold'
            }
        })
    }
});
</script>

<template>
    <div>
        <!--
      EditableHeader (Atomic Component)
      - A small, reusable UI element representing an editable title/header.
      - Receives styles from parent.
      - Emits the updated string back to the parent when changed by the user.
      - Editing mode can be toggled by pressing Enter (keyup.enter) or clicking the "Edit" button.
      - The component emits the edit function to the parent.
      - The title can be cleared and replaced with a placeholder text when empty.
      - Toggles between displaying the editable input field and the static header.
      - The result displays the header text with an inline Edit button next to it.
    -->
        <h1 v-if="!isEditingTitle" @click="startEditingTitle" :style="{ 'editable-title': title.editableTitleStyle }"
            :placeholder="title.placeholder">
            {{ title.text }}
            <button @click="startEditingTitle">Edit</button>
        </h1>
        <h1 v-else>
            <input v-model="listTitle" @blur="saveTitle" @keyup.enter="saveTitle" placeholder="Listentitel eingeben..."
                ref="titleInput" autofocus />
        </h1>
    </div>
</template>

<style scoped>
.editable-title {
    cursor: pointer;
    color: var(--color-heading);
}
</style>