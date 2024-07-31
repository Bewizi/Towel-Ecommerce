<script setup>
import Info from "@/components/Info.vue";
import Navbar from "@/components/Navbar.vue";
import HomeView from "@/views/HomeView.vue";
</script>

<template>
  <!-- <h1>Welcome</h1>
  <Button />
  <Card />
  <Header>Welcome To My First Vue Project</Header>
  <FoodItems /> -->
  <section class="min-h-screen">
    <Info class="hidden lg:block" />
    <Navbar />
    <HomeView />
  </section>
</template>
