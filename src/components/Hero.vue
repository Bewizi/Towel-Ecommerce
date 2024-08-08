<script setup>
import ElegantBathroomDecor from "@/assets/images/elegant-bathroom-decor.png";
import MainHeader from "@/components/MainHeader.vue";
</script>

<template>
  <figure class="relative mb-20 md:mb-28 overflow-hidden">
    <img
      :src="ElegantBathroomDecor"
      alt="Ornate silver wall panel beside gold rack with pastel towels"
      class="min-h-80 xl:w-full"
    />
    <figcaption
      class="absolute top-28 left-5 text-white md:top-24 md:left-20 lg:top-60 lg:left-20"
    >
      <MainHeader
        class="font-bold mb-1 whitespace-normal md:text-4xl md:mb-3 md:leading-tight lg:text-6xl lg:mb-5"
      >
        Beautiful Color <br class="hidden md:inline" />
        Contrast!
      </MainHeader>
      <p class="mb-5 md:text-xl md:mb-8 lg:mb-10">
        Over 50 Collections to Choose for!
      </p>
      <span
        class="bg-white text-wine-red text-xs p-2 rounded font-semibold md:px-5 md:py-2 md:text-lg"
      >
        <a href="/" class="">SHOP NOW <i class="pi pi-arrow-right ml-2"></i></a>
      </span>
    </figcaption>
  </figure>
</template>
