<script setup>
import Header from "@/components/Header.vue";
import Card from "@/components/Card.vue";
import Button from "@/components/Button.vue";
import BambooTowel from "@/assets/images/bamboo-towel.png";
import LuxuryBathrobe from "@/assets/images/luxury-bathrobe-towel-set.png";
import Bathrobe from "@/assets/images/bathrobe-color-options.png";
import EmbroideredTowels from "@/assets/images/embroidered-fringe-towels.png";
import SoftBathrobeSet from "@/assets/images/soft-bathrobe-set.png";
import Product from "@/views/Product.vue";
</script>

<template>
  <section class="md:max-w-7xl md:mx-auto mb-20">
    <section class="mb-10">
      <Header class="text-center font-bold text-2xl md:text-5xl"
        >Featured Product</Header
      >
    </section>

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
          <Card class="bg-light-gray px-5 pt-5 pb-8 rounded-md">
            <figure>
              <img
                :src="LuxuryBathrobe"
                alt="Two folded bathrobes with matching towels and a decorative flower, suggesting a luxurious spa or hotel setting."
                class="mb-3 w-full"
              />
              <figcaption>
                <p class="mb-6 font-light">
                  Concetti Di-Lusso ALESANDRDO Luxury Turkish Spa Towels and
                  ganic Bamboo Robes 12 PC set
                </p>

                <!-- price -->
                <div class="flex items-center justify-between">
                  <div class="">
                    <span class="font-semibold text-2xl mr-2 text-wine-red"
                      >$169.99</span
                    >
                    <span class="pi pi-dollar line-through text-dim-gray"
                      >199.99</span
                    >
                  </div>
                  <Button>Add Cart</Button>
                </div>
              </figcaption>
            </figure>
          </Card>

          <!-- Card 2 -->
          <Card class="bg-light-gray px-5 pt-5 pb-8 rounded-md">
            <figure>
              <img
                :src="Bathrobe"
                alt="Woman in white bathrobe with colored fabric swatches beside her."
                class="mb-3 w-full"
              />
              <figcaption>
                <p class="mb-6 font-light">
                  Concetti Di-Lusso CAPPY Organic Turkish Cotton - Set of 4 in
                  Gift Box
                </p>

                <!-- price -->
                <div class="flex items-center gap-5">
                  <div class="">
                    <span class="font-semibold text-2xl mr-2 text-wine-red"
                      >$59.99</span
                    >
                    <span class="pi pi-dollar line-through text-dim-gray"
                      >199.99</span
                    >
                  </div>
                  <Button>Add Cart</Button>
                </div>
              </figcaption>
            </figure>
          </Card>

          <!-- Card 3 -->
          <Card class="bg-light-gray px-5 pt-5 pb-8 rounded-md">
            <figure>
              <img
                :src="EmbroideredTowels"
                alt="Stack of decorative towels with floral patterns and fringed edges in pastel colors."
                class="mb-3 w-full"
              />
              <figcaption>
                <p class="mb-6 font-light">
                  Concetti Di-Lusso Luxury 100% Turkish Bamboo Shawl Spa Robe in
                  Premium Gift Box
                </p>

                <!-- price -->
                <div class="flex items-center gap-5">
                  <div class="">
                    <span class="font-semibold text-2xl mr-2 text-wine-red"
                      >$159.99</span
                    >
                    <span class="pi pi-dollar line-through text-dim-gray"
                      >199.99</span
                    >
                  </div>
                  <Button>Add Cart</Button>
                </div>
              </figcaption>
            </figure>
          </Card>

          <!-- Card 4 -->
          <Card class="bg-light-gray px-5 pt-5 pb-8 rounded-md">
            <figure>
              <img
                :src="SoftBathrobeSet"
                alt="Pink and white bathrobe and towel set with floral embroidery."
                class="mb-3 w-full"
              />
              <figcaption>
                <p class="mb-6 font-light">
                  Concetti Di-Lusso ANNA Luxury 100% Turkish Organic Cotton VIP
                  Spa Robe/Towels 10 PC Set
                </p>

                <!-- price -->
                <div class="flex items-center gap-5">
                  <div class="">
                    <span class="font-semibold text-2xl mr-2 text-wine-red"
                      >$59.99</span
                    >
                    <span class="pi pi-dollar line-through text-dim-gray"
                      >199.99</span
                    >
                  </div>
                  <Button>Add Cart</Button>
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
