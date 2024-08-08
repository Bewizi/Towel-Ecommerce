<script setup>
import Header from "@/components/MainHeader.vue";
import Visa from "@/assets/images/visa.png";
import DiscoverNetwork from "@/assets/images/discover-network.png";
import AmericanExpress from "@/assets/images/american-express.png";
import MasterCard from "@/assets/images/master-card.png";
import JCB from "@/assets/images/jcb.png";
import DinersClub from "@/assets/images/diners-club.png";
import PayPal from "@/assets/images/paypal.png";
import MainHeader from "@/components/MainHeader.vue";
</script>

<template>
  <footer class="bg-light-gray py-16">
    <section
      class="grid grid-col-1 place-content-center max-w-7xl mx-auto px-5 md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:px-0"
    >
      <section class="mb-8">
        <Header class="font-semibold text-2xl mb-3 md:text-4xl">
          Quick Links</Header
        >
        <ul class="leading-10 text-off-dark/75">
          <li>Privacy Policy</li>
          <li>Return Policy</li>
          <li>Terms of Service</li>
          <li>Contact</li>
        </ul>
      </section>

      <!-- Contact us -->
      <section class="mb-8">
        <MainHeader class="font-semibold text-2xl mb-3 md:text-4xl">
          Contact Us</MainHeader
        >
        <ul class="leading-10 text-off-dark/75">
          <li class="max-w-40 flex">
            <i class="pi pi-map-marker text-wine-red mr-2 mt-3"></i>
            <p>8385 South Allen Street, Suite 111, Sandy UT 84070</p>
          </li>

          <li><i class="pi pi-phone text-wine-red mr-2"></i>801-462-6210</li>
          <li>
            <i class="pi pi-envelope text-wine-red mr-2"></i
            >Support@concetti-di-lusso.com
          </li>
        </ul>
      </section>

      <!-- We Accept -->
      <section class="md:col-span-2 md:justify-self-center lg:col-auto lg:mt-0">
        <Header class="font-semibold text-2xl mb-3 md:text-4xl">
          We accept</Header
        >
        <div class="grid grid-cols-4 gap-8 lg:flex-wrap">
          <figure>
            <img :src="Visa" alt="Visa Card" />
          </figure>
          <figure>
            <img :src="DiscoverNetwork" alt="Discover Network Card" />
          </figure>
          <figure>
            <img :src="AmericanExpress" alt="American Express Card " />
          </figure>
          <figure>
            <img :src="MasterCard" alt="MasterCard" />
          </figure>
          <figure>
            <img :src="JCB" alt="JCB Card" />
          </figure>
          <figure>
            <img :src="DinersClub" alt="Diners Club Card" />
          </figure>
          <figure>
            <img :src="PayPal" alt="PayPal Card" />
          </figure>
        </div>
        <hr class="my-5 stroke-black" />
        <p class="text-dark-gray/75">
          &copy; 2023 Concetti Di Lusso. All rights reserved.
        </p>
      </section>
    </section>
  </footer>
</template>
