<script setup>
import { defineProps } from "vue";
defineProps({
  text: {
    type: String,
    default: "",
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <i
    :class="{
      'shadow-md rounded-md p-3': true,
      'text-red-500': isActive,
      '': !isActive,
    }"
  >
    <slot />
  </i>
</template>
