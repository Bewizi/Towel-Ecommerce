<script setup>
import { defineProps } from "vue";
defineProps({
  foods: {
    type: Array,
    default: () => ["Rice", "Beans", "Bread"],
  },
});
</script>

<template>
  <ul>
    <li v-for="(food, index) in foods" :key="index">{{ food }}</li>
  </ul>
</template>
