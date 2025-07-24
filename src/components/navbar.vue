<template>
  <nav :class="{ 'bg-white shadow-md': computedScrolled }" class="fixed top-0 left-0 right-0 h-[70px] px-4 md:px-8 flex justify-center items-center transition-all duration-300 bg-transparent z-[1000]">
    <div class="w-full max-w-7xl flex justify-between items-center">
      <!-- Placeholder for left logo or blank -->
      <div class="flex-1"></div>

      <!-- Desktop Nav Items -->
      <ul class="hidden md:flex justify-center gap-x-10 font-medium">
        <li>
          <router-link to="/" @click.native="scrollToSection('hero')" :class="linkClass">Hjem</router-link>
        </li>
        <li>
          <router-link :to="{ path: '/', hash: '#services' }" @click.native="scrollToSection('services')" :class="linkClass">Om Oss</router-link>
        </li>
        <li>
          <router-link :to="{ path: '/equipment' }" @click.native="scrollToSection('equipment')" :class="linkClass">Utstyr</router-link>
        </li>
        <li>
          <router-link :to="{ path: '/', hash: '#crew' }" @click.native="scrollToSection('crew')" :class="linkClass">Crew</router-link>
        </li>
        <li>
          <router-link :to="{ path: '/', hash: '#contact' }" @click.native="scrollToSection('contact')" :class="linkClass">Ta Kontakt</router-link>
        </li>
      </ul>

      <!-- Mobile Hamburger Menu -->
      <div class="md:hidden relative z-[1001]">
        <button @click="toggleMenu" :class="{ 'text-black': computedScrolled, 'text-white': !computedScrolled }">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <!-- Mobile Nav Dropdown -->
        <div v-if="isMenuOpen" class="absolute right-0 mt-2 bg-white w-48 rounded-lg shadow-lg py-2 flex flex-col gap-y-2">
          <router-link to="/" @click.native="scrollToSection('hero')" class="px-4 py-2 text-black font-medium hover:text-gray-500">Hjem</router-link>
          <router-link :to="{ path: '/', hash: '#services' }" @click.native="scrollToSection('services')" class="px-4 py-2 text-black font-medium hover:text-gray-500">Om Oss</router-link>
          <router-link :to="{ path: '/equipment' }" @click.native="scrollToSection('equipment')" class="px-4 py-2 text-black font-medium hover:text-gray-500">Utstyr</router-link>
          <router-link :to="{ path: '/', hash: '#crew' }" @click.native="scrollToSection('crew')" class="px-4 py-2 text-black font-medium hover:text-gray-500">Crew</router-link>
          <router-link :to="{ path: '/', hash: '#contact' }" @click.native="scrollToSection('contact')" class="px-4 py-2 text-black font-medium hover:text-gray-500">Ta Kontakt</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  name: 'Navbar',
  props: {
    scrolled: {
      type: Boolean,
      default: undefined
    }
  },
  data() {
    return {
      localScrolled: false,
      isMenuOpen: false
    }
  },
  computed: {
    computedScrolled() {
      return this.scrolled !== undefined ? this.scrolled : this.localScrolled
    },
    linkClass() {
      return {
        'cursor-pointer no-underline transition-colors duration-300': true,
        'text-black': this.computedScrolled || this.isMenuOpen,
        'text-white': !this.computedScrolled && !this.isMenuOpen,
        'hover:text-gray-500': true
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (this.scrolled === undefined) {
        this.localScrolled = window.scrollY > 50
      }
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        this.isMenuOpen = false
      }
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>