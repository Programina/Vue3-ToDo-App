<script setup>
import ListItem from './ListItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import { todos } from '../stores/todos'


</script>

<template>
<ul>
  <ListItem>
    <template #heading></template>
    <template #headingdone></template>
    <template #description>Gib hier alle deine To Dos ein. </template>
  </ListItem>
</ul>
</template>

<style scoped>

</style>