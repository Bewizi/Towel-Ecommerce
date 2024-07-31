<script setup>
import Header from "@/components/Header.vue";
import Card from "@/components/Card.vue";
import ElegantBathroomTowelDisplay from "@/assets/images/elegant-bathroom-towel-display.png";
</script>

<template>
  <section class="max-w-7xl mx-auto px-5">
    <section class="mb-10">
      <Header class="text-center font-bold text-2xl md:text-5xl"
        >Trending Product</Header
      >
    </section>

    <!--  -->
    <section class="flex flex-col gap-5 lg:flex-row">
      <!-- card 1 -->
      <figure class="shadow-xl pb-5 rounded-md">
        <img
          :src="ElegantBathroomTowelDisplay"
          alt="Pastel towels on gold stand with decorative bottle and mirror frame."
          class="rounded-xl mb-5"
        />
        <figcaption class="px-5">
          <Header
            class="max-w-xs text-2xl mb-2 text-wine-red font-bold leading-relaxed"
            >PERFECT GIFT EVEN FOR YOURSELF!</Header
          >
          <p class="max-w-xs text-justify leading-loose">
            Well suited as a gift set, these cotton towels look so decorative
            and soft that we won’t judge if you want to keep them for your
            family and yourself.
          </p>
        </figcaption>
      </figure>

      <!-- card 2 -->
      <figure class="shadow-xl pb-5 rounded-md">
        <img
          :src="ElegantBathroomTowelDisplay"
          alt="Pastel towels on gold stand with decorative bottle and mirror frame."
          class="rounded-xl mb-5"
        />
        <figcaption class="px-5">
          <Header class="text-2xl mb-2 text-wine-red font-bold leading-relaxed"
            >USE FOR ANYTHING</Header
          >
          <p class="max-w-xs text-justify leading-loose">
            Perfect for your hands, face and body… and for your kids too! These
            towels’ softness is ideal for toddler’s and baby’s delicate skin.
            And the best part? They’re washable, quick-dry towels that will last
            forever.
          </p>
        </figcaption>
      </figure>

      <!-- card 3 -->
      <figure class="shadow-xl pb-5 rounded-md">
        <img
          :src="ElegantBathroomTowelDisplay"
          alt="Pastel towels on gold stand with decorative bottle and mirror frame."
          class="rounded-xl mb-5"
        />
        <figcaption class="px-5">
          <Header class="text-2xl mb-2 text-wine-red font-bold leading-relaxed"
            >EXTRA ABSORBENT</Header
          >
          <p class="max-w-xs text-justify leading-loose">
            Thanks to its natural properties, our 100% Turkish Cotton Towels are
            super absorbent, making the m perfect for drying off in any
            scenario.
          </p>
        </figcaption>
      </figure>
    </section>
  </section>
</template>
