<script setup>
import { defineProps } from "vue";

defineProps({
  // your props here
  bg: {
    type: String,
    default: "bg-light-gray",
  },
});
</script>

<template>
  <div :class="`${bg} px-5 pt-5 pb-8`">
    <slot />
  </div>
</template>
