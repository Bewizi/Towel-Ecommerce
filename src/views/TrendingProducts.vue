<script setup>
import Header from "@/components/Header.vue";
import ElegantBathroomTowelDisplay from "@/assets/images/elegant-bathroom-towel-display.png";
import DecorativeTowelsOrnateBackground from "@/assets/images/decorative-towels-ornate-background.png";
import TowelDisplay from "@/assets/images/towel-display.png";
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
          :src="DecorativeTowelsOrnateBackground"
          alt="Embroidered towels stacked against ornate white background."
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
      <figure
        class="shadow-xl pb-5 rounded-md md:col-span-2 md:justify-self-center lg:col-auto"
      >
        <img
          :src="TowelDisplay"
          alt="Stack of floral towels on white shelf."
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

    <!-- Link Show More -->
    <div class="grid place-content-center">
      <a
        href="/"
        class="text-center bg-wine-red text-lg text-white px-5 py-1 rounded-md"
        >Show More</a
      >
    </div>
  </section>

  <!-- <section>
    <div class="grid grid-cols-4 gap-4 p-4">
      <div class="bg-blue-200 p-4">Div 1</div>
      <div class="bg-green-200 p-4">Div 2</div>
      <div class="bg-red-200 p-4">Div 3</div>
      <div class="bg-red-200 p-4">Div 4</div>
      <div class="bg-red-200 p-4">Div 5</div>
    </div>

    <div class="grid grid-cols-1 gap-4 px-5 md:grid-cols-2 lg:grid-cols-3">
      
      <div class="flex flex-col space-y-4">
        <div class="bg-red-500 p-4">Div 1</div>
        <div class="bg-blue-500 p-4">Div 2</div>
      </div>

      
      <div class="bg-green-500 p-4">Div 3</div>

      
      <div class="flex flex-col space-y-4">
        <div class="bg-yellow-500 p-4">Div 4</div>
        <div class="bg-purple-500 p-4">Div 5</div>
      </div>
    </div>
  </section> -->
</template>
