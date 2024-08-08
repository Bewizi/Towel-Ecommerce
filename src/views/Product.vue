<script setup>
import FluffyTowelPile from "@/assets/images/fluffy-towel-pile.png";
import Card from "@/components/Card.vue";
import MainHeader from "@/components/MainHeader.vue";
</script>

<template>
  <section class="max-w-7xl mx-auto px-5 mb-28">
    <section class="flex items-center flex-col gap-5 md:flex-col lg:flex-row">
      <div>
        <Card class="rounded-3xl md:pt-20 md:pb-20">
          <MainHeader class="text-wine-red font-bold text-3xl mb-5"
            >Organic Cotton and Bamboo</MainHeader
          >
          <p class="mb-8 text-justify leading-loose">
            Designed to please you with the best of Turkish’s heritage in
            fabrics.Made from bamboo and cotton fibers, these towels gathers the
            best from two worlds to offer soft, super-absorbent fabric that is
            also antibacterial thanks to the natural properties of bamboo.
          </p>
          <span
            class="bg-off-dark text-white text-xs p-2 rounded font-semibold md:px-5 md:py-2 md:text-lg"
          >
            <a href="/" class=""
              >SHOP NOW <i class="pi pi-arrow-right ml-2"></i
            ></a>
          </span>
        </Card>
      </div>

      <!--  -->
      <figure>
        <img
          :src="FluffyTowelPile"
          alt="Stack of soft towels in various colors, folded neatly on a chair with decorative elements in the background"
          class="lg:w-[145rem] rounded-3xl"
        />
      </figure>
    </section>
  </section>
</template>
