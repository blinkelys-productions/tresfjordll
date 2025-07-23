

<script setup lang="ts">
  import Hero from '../components/hero.vue';
  import FirstInfo from '../components/first-info.vue';
  import Navbar from '../components/navbar.vue';
  import About from '../components/about.vue';
</script>

<template>
  <Navbar />
  <div class=" min-h-screen bg-gray-950 text-white w-full">
    <div class="relative">
      <section id="hero">
        <Hero />
      </section>
      <div class="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-gray-950"></div>
    </div>
    <section id="services">
      <FirstInfo/>
    </section>
    <section id="about" class="mt-20">
      <About/>
    </section>
  </div>
</template>