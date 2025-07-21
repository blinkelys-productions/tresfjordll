<script setup lang="ts">
  import Hero from './components/hero.vue';
  import FirstInfo from './components/first-info.vue';
  import Navbar from './components/navbar.vue';
</script>

<template>
  <Navbar />
  <div class="w-full min-h-screen bg-gray-950 text-white">
    <div class="relative">
      <section id="hero">
        <Hero />
      </section>
      <div class="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-gray-950"></div>
    </div>
    <section id="services">
      <FirstInfo />
    </section>
  </div>
</template>