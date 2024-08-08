<script setup>
import IconCard from "@/components/IconCard.vue";
import Header from "@/components/MainHeader.vue";
</script>

<template>
  <section class="md:max-w-4xl md:mx-auto mb-28">
    <section
      class="flex items-center flex-col justify-center md:flex-row md:space-x-20 lg:flex-row lg:space-x-36"
    >
      <!-- 1 -->
      <section class="mb-5">
        <div class="flex items-center justify-center">
          <IconCard
            class="pi pi-truck text-5xl text-wine-red p-5 mb-5"
          ></IconCard>
        </div>
        <figure>
          <Header class="text-off-dark text-2xl font-semibold mb-1 text-center"
            >Free Delivery</Header
          >
          <p class="text-dark-gray">For all orders above $35</p>
        </figure>
      </section>

      <!-- 2 -->
      <section class="mb-5">
        <div class="flex items-center justify-center">
          <IconCard
            class="pi pi-shield text-5xl text-wine-red p-5 mb-5"
          ></IconCard>
        </div>
        <figure>
          <Header class="text-off-dark text-2xl font-semibold mb-1 text-center"
            >Secure Payment</Header
          >
          <p class="text-dark-gray">100% Secure payment methods</p>
        </figure>
      </section>

      <!-- 3 -->
      <section>
        <div class="flex items-center justify-center">
          <IconCard
            class="pi pi-phone text-5xl text-wine-red p-5 mb-5"
          ></IconCard>
        </div>
        <figure>
          <Header class="text-off-dark text-2xl font-semibold mb-1 text-center"
            >24/7 Support</Header
          >
          <p class="text-dark-gray">We have dedicated Support</p>
        </figure>
      </section>
    </section>
  </section>
</template>
