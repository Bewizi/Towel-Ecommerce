<script setup>
import Header from "@/components/MainHeader.vue";
import Card from "@/components/Card.vue";
import Button from "@/components/Button.vue";
import BambooTowel from "@/assets/images/bamboo-towel.png";
import Product from "@/views/Product.vue";
import FeaturedProducts from "@/json/featuredProduct.json";
</script>

<template>
  <section class="mb-20 md:max-w-7xl md:mx-auto">
    <section class="mb-10">
      <Header class="text-center font-bold text-2xl md:text-5xl"
        >Featured Product</Header
      >
    </section>

    <div v-for="products in FeaturedProducts" :key="products.id">
      <h1>{{ products.header }}</h1>
    </div>

    <!-- 1 -->
    <section class="mb-5">
      <div
        class="grid px-5 md:grid-cols-1 md:space-x-0 md:gap-5 lg:grid-cols-2"
      >
        <figure class="relative mb-10">
          <img
            :src="BambooTowel"
            alt="Bamboo Beach Towel"
            class="rounded-3xl md:w-full"
          />
          <figcaption
            class="absolute inset-x-10 inset-y-32 md:inset-x-20 md:inset-y-48"
          >
            <Header
              class="text-3xl text-center font-semibold leading-normal text-white md:leading-normal md:text-5xl"
              >Explore More Product</Header
            >
          </figcaption>
        </figure>

        <figure
          class="grid grid-cols-1 gap-5 items-center md:grid-cols-2 lg:grid-cols-2"
        >
          <!-- Card 1 -->
          <Card
            v-for="products in FeaturedProducts"
            :key="products.id"
            class="bg-light-gray px-5 pt-5 pb-8 rounded-md"
          >
            <figure>
              <img
                :src="products.images"
                :alt="products.altText"
                class="mb-3 w-full"
              />
              <figcaption>
                <p class="mb-6 font-light">
                  {{ products.description }}
                </p>

                <!-- price -->
                <div
                  class="flex items-center justify-between gap-5 flex-col md:flex-row"
                >
                  <div class="">
                    <span class="font-semibold text-2xl mr-2 text-wine-red"
                      >${{ products.price }}</span
                    >
                    <span class="pi pi-dollar line-through text-dim-gray">{{
                      products.salshPrice
                    }}</span>
                  </div>
                  <Button class="lg:text-xs">{{ products.addcart }}</Button>
                </div>
              </figcaption>
            </figure>
          </Card>
        </figure>
      </div>
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

  <Product />
</template>
