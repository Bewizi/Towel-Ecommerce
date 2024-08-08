<script setup>
import Header from "@/components/MainHeader.vue";
</script>

<template>
  <section class="bg-Off-white py-0 lg:py-3">
    <section class="max-w-7xl mx-auto">
      <div class="md:flex md:items-center md:justify-between">
        <div class="flex items-center space-x-12 invisible lg:visible">
          <p class="text-off-dark text-sm items-center">
            <i class="pi pi-phone mr-2"></i>
            810-462-620
          </p>

          <p class="text-off-dark text-sm items-center">
            <i class="pi pi-envelope mr-2"></i>
            Support@concetti-di-lusso.com
          </p>
        </div>
        <Header
          class="font-semibold text-wine-red md:text-lg text-center md:w-full lg:w-auto"
          >FREE SHIPPING! Orders $35+</Header
        >

        <p class="text-off-dark text-sm items-center invisible lg:visible">
          <i class="pi pi-map-marker mr-2"></i>
          8385 South Allen Street, Suite 111, Sandy UT 84070
        </p>
      </div>
    </section>
  </section>
</template>
