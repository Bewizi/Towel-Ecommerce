<script setup>
import { defineProps } from "vue";
defineProps({
  type: String,
  default: "",
  style: {
    type: String,
    default: "text-4xl font-bold italic mt-0",
  },
});
</script>

<template>
  <h1>
    <slot />
  </h1>
</template>
