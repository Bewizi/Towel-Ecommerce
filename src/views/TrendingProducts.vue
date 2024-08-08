<script setup>
import { ref, onMounted } from "vue";
import Header from "@/components/MainHeader.vue";
import axios from "axios";

const trendingProducts = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:3000/products");
    trendingProducts.value = response.data;
  } catch (error) {
    console.error("Error fetching products", error);
  }
});
</script>

<template>
  <section class="max-w-7xl mx-auto px-5 mb-28">
    <section class="mb-10">
      <Header class="text-center font-bold text-2xl md:text-5xl"
        >Trending Product</Header
      >
    </section>

    <!--  -->
    <section
      class="grid grid-cols-1 place-content-center gap-5 md:grid-cols-2 lg:grid-cols-3 mb-12"
    >
      <!-- card 1 -->
      <section v-for="(product, index) in trendingProducts" :key="index">
        <figure class="shadow-xl pb-16 rounded-md">
          <img
            :src="product.images"
            :alt="product.altText"
            class="rounded-xl mb-5"
          />
          <figcaption class="px-5">
            <Header
              class="max-w-xs text-2xl mb-2 text-wine-red font-bold leading-relaxed"
              >{{ product.header }}</Header
            >
            <p class="max-w-xs text-justify leading-loose">
              {{ product.description }}
            </p>
          </figcaption>
        </figure>
      </section>
    </section>

    <!-- Link Show More -->
    <div class="grid place-content-center">
      <a
        href="/"
        class="text-center bg-wine-red text-lg text-white px-5 py-1 rounded-md"
        >Show More</a
      >
    </div>
  </section>
</template>
