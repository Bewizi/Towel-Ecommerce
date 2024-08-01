<script setup>
import Header from "@/components/Header.vue";
import ElegantBathroomDecor from "@/assets/images/elegant-bathroom-decor.png";
import TowelStack from "@/assets/images/towel_stack.png";
import TowelLadder from "@/assets/images/towel_ladder.png";
import PurpleTowelStack from "@/assets/images/purple_towel_stack.png";
import StackedTowelsShelf from "@/assets/images/stacked-towels-shelf.png";
</script>

<template>
  <section class="max-w-7xl mx-auto mb-28">
    <section class="mb-10">
      <Header class="text-center font-bold text-2xl md:text-5xl"
        >Product Gallery</Header
      >
    </section>

    <section class="grid grid-cols-1 gap-4 px-5 md:grid-cols-3 lg:grid-cols-3">
      <div class="flex flex-col space-y-4">
        <figure>
          <img
            :src="ElegantBathroomDecor"
            alt="Elegant Bathroom Decor"
            class="rounded-2xl"
          />
        </figure>
        <figure>
          <img
            :src="TowelStack"
            alt="Colorful towels stacked on wooden table with decor."
            class="rounded-2xl w-full"
          />
        </figure>
      </div>

      <figure class="">
        <img
          :src="TowelLadder"
          alt="Stacked towels with floral embroidery on a rustic ladder, decorated with flowers and soap"
          class="rounded-2xl lg:min-h-[65vh]"
        />
      </figure>

      <div class="flex flex-col space-y-4">
        <figure>
          <img
            :src="PurpleTowelStack"
            alt="Stack of soft towels in various shades of purple, displayed on a pedestal with decorative accents."
            class="rounded-2xl"
          />
        </figure>
        <figure>
          <img
            :src="StackedTowelsShelf"
            alt="A stack of folded pink, cream, and gray towels on a metal shelf with a draped towel, lantern, and flower."
            class="rounded-2xl"
          />
        </figure>
      </div>
    </section>
  </section>
</template>
