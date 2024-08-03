<script setup>
import IconCard from "@/components/IconCard.vue";

import { ref, onMounted, onBeforeUnmount } from "vue";

const isBarVisible = ref(true);
const showAnchorLinks = ref(false);
const isSticky = ref(false);

function open() {
  // console.log("open");
  isBarVisible.value = false;
  showAnchorLinks.value = true;
}

function close() {
  // console.log("close");
  isBarVisible.value = true;
  // showAnchorLinks.value = false;

  setTimeout(() => {
    showAnchorLinks.value = false;
  }, 3000);
}

onMounted(() => {
  if (window.innerWidth >= 1024) {
    showAnchorLinks.value = true;
  }

  // Set up Intersection Observer
  const sentinel = document.querySelector("#sentinel");
  const observer = new IntersectionObserver(
    ([entries]) => {
      isSticky.value = !entries.isIntersecting;
    },
    { threshold: 0 }
  );

  if (sentinel) {
    observer.observe(sentinel);
  }

  onBeforeUnmount(() => {
    if (sentinel) {
      observer.unobserve(sentinel);
    }
  });
});
</script>

<template>
  <section class="max-w-7xl mx-auto">
    <!-- Sentinel element -->
    <div id="sentinel" class="h-1"></div>

    <header :class="{ 'sticky-header': isSticky }">
      <nav class="flex relative items-center justify-between p-5">
        <Header class="font-semibold text-xl md:text-3xl my-8">
          <a href="/" class="text-wine-red"> CONCETTI DI-LUSSO </a>
        </Header>

        <div class="flex relative lg:hidden">
          <i v-if="!isBarVisible" @click="close" class="pi pi-times visible">
          </i>
          <i v-else @click="open" class="pi pi-bars visible"></i>
        </div>

        <ul
          v-show="showAnchorLinks"
          class="flex flex-col space-y-8 px-5 text-lg absolute top-32 bg-white/55 min-h-screen shadow-lg z-50 lg:flex-row lg:space-x-10 lg:flex lg:visible lg:space-y-0 lg:relative lg:top-0 lg:bg-transparent lg:shadow-none lg:min-h-0 lg:px-0 lg:text-base lg:left-0 transition-all duration-300 ease-in-out"
          :class="isBarVisible ? '-left-56' : 'left-0'"
        >
          <li class="">
            <a href="/" class="text-off-dark">Home</a>
          </li>
          <li>
            <a href="/" class="text-dim-gray"
              >Towels
              <i class="pi pi-sort-down-fill"></i>
            </a>
          </li>
          <li>
            <a href="/" class="text-dim-gray">Robes</a>
          </li>
          <li>
            <a href="/" class="text-dim-gray">Bathroom Sets</a>
          </li>

          <!-- icon buttons for mobile and tablet -->

          <li class="lg:hidden mt-10">
            <div class="lg:flex lg:items-center lg:gap-10 lg:visible">
              <div class="space-x-5">
                <!-- search icon -->

                <IconCard class="pi pi-search"> Search </IconCard>

                <!-- heart icon -->
                <IconCard class="pi pi-heart"></IconCard>
                <!-- chart icon -->
                <IconCard class="pi pi-shopping-cart"></IconCard>
              </div>
            </div>
          </li>

          <!-- Sign In link for mobile and tablet -->
          <li class="lg:hidden mt-10">
            <a
              href="/"
              class="uppercase bg-wine-red text-white text-lg font-semibold px-5 py-2 rounded-md"
              >Sign In</a
            >
          </li>
        </ul>

        <!-- icons -->
        <div class="hidden lg:flex lg:items-center lg:gap-10 lg:visible">
          <div class="space-x-5">
            <!-- search icon -->

            <IconCard class="pi pi-search"> Search </IconCard>

            <!-- heart icon -->
            <IconCard class="pi pi-heart"></IconCard>
            <!-- chart icon -->
            <IconCard class="pi pi-shopping-cart"></IconCard>
          </div>

          <!-- sign in link -->
          <a
            href="/"
            class="uppercase bg-wine-red text-white text-lg font-semibold px-5 py-2 rounded-md"
            >Sign In</a
          >
        </div>
      </nav>
    </header>
  </section>
</template>

<style>
.sticky-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
