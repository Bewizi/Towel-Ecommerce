<script setup>
import { defineProps } from "vue";

defineProps({
  type: String,
  default: "",
});
</script>

<template>
  <button
    class="bg-black text-white px-3 py-2 font-semibold rounded-md uppercase md:text-xs"
  >
    <slot />
  </button>
</template>
