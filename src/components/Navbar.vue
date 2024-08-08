<script setup>
import IconCard from "@/components/IconCard.vue";
import MainHeader from "@/components/MainHeader.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";

const isBarVisible = ref(true);
const showAnchorLinks = ref(false);
const isSticky = ref(false);
const isHeartActive = ref(false);
const isSearchModalVisible = ref(false); // Add this line

// Function to open the search modal
const openSearchModal = () => {
  isSearchModalVisible.value = true;
  console.log("opened");
};

// Function to close the search modal
const closeSearchModal = () => {
  isSearchModalVisible.value = false;
};

// Opens the anchor links
function open() {
  // console.log("open");
  isBarVisible.value = false;
  showAnchorLinks.value = true;
}

// Close the anchor links
function close() {
  // console.log("close");
  isBarVisible.value = true;
  // showAnchorLinks.value = false;

  showAnchorLinks.value = false;
  // setTimeout(() => {
  // }, 3000);
}

// Onmount to show the width list
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

const isHeartClicked = () => {
  isHeartActive.value = !isHeartActive.value;
  console.log("heart clicked", isHeartActive.value);
};
</script>

<template>
  <section class="max-w-7xl mx-auto">
    <!-- Sentinel element -->
    <div id="sentinel" class="h-1"></div>

    <header :class="{ 'sticky-header': isSticky }">
      <nav
        class="flex flex-col lg:items-center lg:flex-row lg:justify-between p-5"
      >
        <MainHeader
          class="flex items-center justify-between font-semibold text-xl md:text-3xl my-8"
        >
          <div>
            <a href="/" class="text-wine-red"> CONCETTI DI-LUSSO </a>
          </div>

          <div class="flex lg:hidden">
            <i
              v-if="!isBarVisible"
              @click="close"
              class="pi pi-times visible cursor-pointer"
            >
            </i>
            <i
              v-else
              @click="open"
              class="pi pi-bars visible cursor-pointer"
            ></i>
          </div>
        </MainHeader>

        <ul
          v-show="showAnchorLinks"
          class="flex flex-col space-y-5 md:text-lg md:space-y-10 mb-8 md:items-center lg:flex-row lg:space-x-16 lg:space-y-0 lg:mb-0 lg:text-base transition-all duration-300 ease-in-out"
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

          <li class="mt-10 lg:hidden lg:mt-0">
            <div class="flex lg:items-center lg:gap-10 lg:block">
              <div class="space-x-5">
                <!-- search icon -->

                <IconCard
                  @click="openSearchModal"
                  class="pi pi-search"
                ></IconCard>

                <!-- heart icon -->
                <IconCard class="pi pi-heart-fill"></IconCard>
                <!-- chart icon -->
                <IconCard class="pi pi-shopping-cart"></IconCard>
              </div>
            </div>
          </li>

          <!-- Sign In link for mobile and tablet -->
          <li class="mt-16 lg:mt-0 lg:hidden">
            <a
              href="/"
              class="uppercase bg-wine-red text-white text-lg font-semibold px-5 py-2 rounded-md"
              >Sign In</a
            >
          </li>
        </ul>

        <!-- icons on Larger screen -->
        <div class="hidden lg:flex lg:items-center lg:gap-10">
          <div class="space-x-5">
            <!-- search icon -->

            <IconCard
              @click="openSearchModal"
              class="pi pi-search cursor-pointer"
            ></IconCard>

            <!-- heart icon -->
            <IconCard
              @click="isHeartClicked"
              class="pi pi-heart-fill cursor-pointer"
              :isActive="isHeartActive"
            ></IconCard>
            <!-- chart icon -->
            <IconCard class="pi pi-shopping-cart cursor-pointer"></IconCard>
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

    <!-- Search Modal -->
    <div
      v-if="isSearchModalVisible"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white p-5 rounded-md shadow-lg w-3/4 max-w-md">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-xl font-semibold">Search</h3>
          <button
            @click="closeSearchModal"
            class="text-red-500 text-xl pi pi-times"
          ></button>
        </div>
        <input
          type="text"
          placeholder="Type to search..."
          class="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>
    </div>
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
