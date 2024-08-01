<script setup>
import Header from "@/components/Header.vue";
import Button from "@/components/Button.vue";
</script>

<template>
  <section class="md:max-w-7xl md:mx-auto mb-20 px-5">
    <section class="mb-10">
      <Header class="text-center font-bold text-2xl md:text-5xl"
        >Get In Touch</Header
      >
    </section>
    <section class="grid place-content-center">
      <p class="text-dark-gray max-w-xl text-center mb-8">
        Subscribe to our weekly newsletter and receive exclusive offers on
        products you love!
      </p>
      <div>
        <input
          class="border-2 p-2 rounded-md min-w-60 border-wine-red/30 md:min-w-96"
          type="text"
          placeholder="Email Address"
        />
        <Button class="bg-wine-red md:px-10 md:py-2 md:text-2xl lg:text-lg"
          >Subscribe</Button
        >
      </div>
    </section>
  </section>
</template>
