<script setup lang="ts">
    import { Icon } from '@iconify/vue';
</script>


<template>
      <div class="flex gap-8 justify-center pt-16">
          <div class="bg-white p-6 rounded-lg shadow-md w-64 text-center">
                <Icon icon="ph:microphone-stage" width="150" height="150" color="black" class="mx-auto" />
              <h3 class="text-xl font-bold mb-2 text-black">Lyd</h3>
              <p class="text-gray-600 text-sm">Lyd systemer for alle behov.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md w-64 text-center">
              <Icon icon="cbi:stage-light" width="150" height="150" color="black" class="mx-auto"/>
              <h3 class="text-xl font-bold mb-2 text-black">Lys</h3>
              <p class="text-gray-600 text-sm">Bredt utvalg av lys og lysmiksere for ditt arrangement.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md w-64 text-center">
              <Icon icon="mdi:video-camera" width="150" height="150" class="mx-auto" color="black" />
              <h3 class="text-xl font-bold mb-2 text-black">AV</h3>
              <p class="text-gray-600 text-sm">Audio-visuelle løsninger for ditt arrangement.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md w-64 text-center">
              <Icon icon="mdi:account-balance" width="150" height="150" class="mx-auto" color="black" />
              <h3 class="text-xl font-bold mb-2 text-black">Scene</h3>
              <p class="text-gray-600 text-sm">Nivtec og mobil scene for alle behov.</p>
          </div>
      </div>
  </template>