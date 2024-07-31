<script setup>
import { defineProps } from "vue";
defineProps({
  text: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <i class="shadow-md rounded-md p-3">
    <solt />
  </i>
</template>
