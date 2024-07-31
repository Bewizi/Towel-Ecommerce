<script setup>
import IconCard from "@/components/IconCard.vue";
</script>

<template>
  <section class="max-w-7xl mx-auto">
    <nav class="flex items-center justify-between p-5">
      <Header class="font-semibold text-xl md:text-3xl my-8">
        <a href="/" class="text-wine-red"> CONCETTI DI-LUSSO </a>
      </Header>
      <ul class="flex invisible lg:visible lg:space-x-10 lg:items-center">
        <li class="">
          <a href="/" class="text-off-dark">Home</a>
        </li>
        <li>
          <a href="/" class="text-dim-gray"
            >Towels
            <i class="pi pi-sort-down-fill"></i>
          </a>
        </li>
        <li>
          <a href="/" class="text-dim-gray">Robes</a>
        </li>
        <li>
          <a href="/" class="text-dim-gray">Bathroom Sets</a>
        </li>
      </ul>

      <!-- icons -->
      <div class="hidden lg:flex lg:items-center lg:gap-10 lg:visible">
        <div class="space-x-5">
          <!-- search icon -->

          <IconCard class="pi pi-search"> Search </IconCard>

          <!-- heart icon -->
          <IconCard class="pi pi-heart"></IconCard>
          <!-- chart icon -->
          <IconCard class="pi pi-shopping-cart"></IconCard>
        </div>

        <!-- sign in link -->
        <a
          href="/"
          class="uppercase bg-wine-red text-white text-lg font-semibold px-5 py-2 rounded-md"
          >Sign In</a
        >
      </div>
    </nav>
  </section>
</template>
