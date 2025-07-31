<template>
  <navbar scrolled="true"/>
  <div class="mt-20 min-h-screen w-full">
    <h1 class="text-[2.2rem] font-bold text-center mb-8 text-[#22223b] tracking-wide">
      Utstyr
    </h1>
    <div class="w-full">
      <EquipmentList
        v-for="category in categories"
        :key="category"
        :title="category"
        :items="equipment.filter(item => item.category === category)"
        class="bg-white rounded-xl shadow p-4"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import EquipmentList from '../components/EquipmentList.vue'
import navbar from '../components/navbar.vue'

const equipment = ref([
  // Lyd
  {
    id: 1,
    name: 'Allen & Heath Dlive c3500',
    description: 'Kraftig digital mikser med 48 kanaler og 32 busser.',
    image: 'https://example.com/dlive-c3500.jpg',
    category: 'Lyd'
  },
  {
    id: 2,
    name: 'Allen & Heath SQ5',
    description: 'Kraftig digital mikser med 16 kanaler og 8 busser.',
    image: 'https://example.com/sq5.jpg',
    category: 'Lyd'
  },
  {
    id: 26,
    name: 'Turbosound Madrid 12"',
    description: 'Høykvalitets monitorer for live lyd.',
    image: 'https://example.com/turbosound-monitor.jpg',
    category: 'Lyd',
    amount: 4
  },
  {
    id: 28,
    name: 'Turbosound tmw 12"',
    description: 'Høykvalitets monitorer for live lyd.',
    image: 'https://example.com/aktiv-turbosound-monitor.jpg',
    category: 'Lyd',
    amount: 10
  },
  {
    id: 29,
    name: 'Yamaha CW15',
    description: 'Høykvalitets monitorer for live lyd.',
    image: 'https://example.com/yamaha-cw15.jpg',
    category: 'Lyd',
    amount: 2
  },
  {
    id: 30,
    name: 'Yamaha CW12',
    description: 'Høykvalitets monitorer for live lyd.',
    image: 'https://example.com/yamaha-cw12.jpg',
    category: 'Lyd',
    amount: 3
  },
  {
    id: 31,
    name: 'HK Audio PRO 12',
    description: 'Høykvalitets aktiv monitor for live lyd.',
    image: 'https://example.com/hk-pro-12.jpg',
    category: 'Lyd',
    amount: 7
  },
  {
    id: 32,
    name: 'LD 8" monitor',
    description: 'Kompakt og kraftig PA-system.',
    image: 'https://example.com/ld-systems-curv-500.jpg',
    category: 'Lyd',
    amount: 3
  },
  {
    id: 33,
    name: 'Bose S1 Pro',
    description: 'Bærbar PA-høyttaler med Bluetooth, hybrid xlr/jack og aux-inngang, samt innebygd mikser.',
    image: 'https://example.com/bose-s1-pro.jpg',
    category: 'Lyd',
    amount: 5
  },
  {
    id: 34,
    name: 'HK Audio PRO 12',
    description: 'Høykvalitets passiv monitor for live lyd.',
    image: 'https://example.com/hk-pro-12.jpg',
    category: 'Lyd',
    amount: 6
  },
  {
    id: 27,
    name: 'Sennheiser 600 G3',
    description: 'Trådløs mikrofonsett med høy kvalitet.',
    image: 'https://example.com/sennheiser-ew-g4-100.jpg',
    category: 'Lyd',
    amount: 20
  },
  {
    id: 3,
    name: 'Grand MA3 OnPC Command Wing Reisepakke',
    description: 'Kraftig digital mixer med touchskjerm, tastatur, mus og datamaskin.',
    image: 'https://example.com/ma3.jpg',
    category: 'Lys'
  }
  ,
  {
    id: 4,
    name: 'Grand MA3 OnPC Command Wing Arrangement Pakke',
    description: 'Kraftig digital mixer med 2x touchskjerm, tastatur, mus, datamaskin, ruter og strømforsyning, med innebygd I/O, pakket i flightcase.',
    image: 'https://example.com/ma3-command.jpg',
    category: 'Lys'
  },
  {
    id: 18,
    name: 'Martin M2GO',
    description: 'Kraftig digital mixer med touchskjerm, tastatur, og mus. Kommer med flightcase.',
    image: 'https://example.com/martin-m2go.jpg',
    category: 'Lys',
    amount: 2
  },
  {
    id: 19,
    name: 'Entec DMXIS',
    description: 'DMX USB grensesnitt for enkel kontroll av lys.',
    image: 'https://example.com/entec-dmxis.jpg',
    category: 'Lys',
  },
  {
    id: 5,
    name: 'Mac Quantum Profile',
    description: 'Kraftig moving head med 1200W lampe, zoom, fokus og CMY fargemiksing.',
    image: 'https://example.com/sq5.jpg',
    category: 'Lys',
    amount: 4
  },
  {
    id: 6,
    name: 'Mac Aura',
    description: 'Moving head med 19x10W RGBW LED, zoom og fokus.',
    image: 'https://example.com/mac-aura.jpg',
    category: 'Lys',
    amount: 2
  },
  {
    id: 7,
    name: 'Bright XLED',
    description: '12x12W RGBWA UV LED Par.',
    image: 'https://example.com/bright-xled.jpg',
    category: 'Lys',
    amount: 10
  },
  {
    id: 8,
    name: 'Martin Rush MH6',
    description: 'Moving head med 12x10W RGBW LED med zoom',
    image: 'https://example.com/martin-rush-mh6.jpg',
    category: 'Lys',
    amount: 22
  },
  {
    id: 9,
    name: 'Mac 700 Profile',
    description: 'Moving head med 1500W lampe, zoom, fokus og CMY fargemiksing.',
    image: 'https://example.com/mac-700-profile.jpg',
    category: 'Lys',
    amount: 3
  },
  {
    id: 10,
    name: 'Mac 700 Wash',
    description: 'Moving head med 1500W lampe, zoom, fokus og CMY fargemiksing.',
    image: 'https://example.com/mac-700-wash.jpg',
    category: 'Lys',
    amount: 2
  },
  {
    id: 11,
    name: 'Mac 550',
    description: 'Moving head med 575W lampe, zoom, fokus og CMY fargemiksing.',
    image: 'https://example.com/mac-550.jpg',
    category: 'Lys',
    amount: 2
  },
  {
    id: 12,
    name: 'Mac 250+',
    description: 'Moving head med 250W lampe, zoom, fokus og CMY fargemiksing.',
    image: 'https://example.com/mac-250-plus.jpg',
    category: 'Lys',
    amount: 4
  },
  {
    id: 16,
    name: '2 Punkts Blinder',
    description: '2 punkts blinder med 2X 325W lampe.',
    image: 'https://example.com/2-punkts-blinder.jpg',
    category: 'Lys',
    amount: 2
  },
  {
    id: 17,
    name: '6 Punkts Blinder',
    description: '6 punkts blinder med 6X 150W lampe.',
    image: 'https://example.com/6-punkts-blinder.jpg',
    category: 'Lys',
    amount: 8
  },
  {
    id: 20,
    name: 'Flat COB 120W',
    description: 'Flat LED lys med 120W COB LED, perfekt for baklys.',
    image: 'https://example.com/flat-cob-120w.jpg',
    category: 'Lys',
    amount: 8
  },
  {
    id: 21,
    name: 'UV Lampe',
    description: 'UV lampe med 120W, perfekt for UV-effekter.',
    image: 'https://example.com/uv-lampe.jpg',
    category: 'Lys',
    amount: 2
  },
  {
    id: 13,
    name: 'Nivtec Scene Moduler',
    description: '2x1 Meter scene moduler med bein i alle lengder.',
    image: 'https://example.com/scene-1.jpg',
    category: 'Scene',
    amount: 144
  },
  {
    id: 14,
    name: 'Scene gelender',
    description: 'Tilpasset scene gelender for Nivtec scene moduler. Kommer i 1 meter og 2 meter lengder.',
    image: 'https://example.com/scene-2.jpg',
    category: 'Scene'
  },
  {
    id: 15,
    name: 'Mobil Scene',
    description: '8x6 meter scene med 8 meter høyde, + trapp, gelender og tak. Kan bygges ut med nivtec scene moduler.',
    image: 'https://example.com/scene-2.jpg',
    category: 'Scene'
  },
  {
    id: 22,
    name: 'Hisense 55" UHD TV',
    description: '55 tommer UHD TV med HDMI og USB innganger.',
    image: 'https://example.com/hisense-tv.jpg',
    category: 'AV',
    amount: 3
  },
  {
    id: 23,
    name: 'Hisense 65" UHD TV',
    description: '65 tommer UHD TV med HDMI, USB og stativ på hjul.',
    image: 'https://example.com/hisense-tv-65.jpg',
    category: 'AV',
    amount: 1
  },
  {
    id: 24,
    name: 'Lerret 5x4 meter',
    description: 'Motorisert lerret med 5x4 meter størrelse.',
    image: 'https://example.com/lerret-5x4.jpg',
    category: 'AV'
  },
  {
    id: 25,
    name: 'Lerret 4x3 meter',
    description: 'Motorisert lerret med 4x3 meter størrelse.',
    image: 'https://example.com/lerret-4x3.jpg',
    category: 'AV'
  },

])

const categories = computed(() => {
  const unique = new Set(equipment.value.map(item => item.category))
  return Array.from(unique)
})
</script>