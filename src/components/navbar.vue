  <template>
    <nav :class="{ 'bg-white shadow-md': scrolled }" class="fixed top-0 left-0 right-0 h-[70px] px-4 md:px-8 flex justify-between items-center transition-all duration-300 bg-transparent z-[1000]">
      <div class="flex-1"></div>
      <div class="flex flex-col md:flex-row md:gap-8 md:absolute md:left-1/2 md:-translate-x-1/2">
        <div class="md:flex flex-col md:flex-row md:gap-8 md:relative">
          <a href="#hero" @click="scrollToSection('hero')" :class="{ 'text-black': scrolled || isMenuOpen, 'text-white': !scrolled && !isMenuOpen }" class="hidden md:block cursor-pointer no-underline font-medium hover:text-gray-500 transition-colors duration-300">Hjem</a>
          <a href="#services" @click="scrollToSection('services')" :class="{ 'text-black': scrolled || isMenuOpen, 'text-white': !scrolled && !isMenuOpen }" class="hidden md:block cursor-pointer no-underline font-medium hover:text-gray-500 transition-colors duration-300">Om Oss</a>
          <a href="#equipment" @click="scrollToSection('equipment')" :class="{ 'text-black': scrolled || isMenuOpen, 'text-white': !scrolled && !isMenuOpen }" class="hidden md:block cursor-pointer no-underline font-medium hover:text-gray-500 transition-colors duration-300">Utstyr</a>
          <a href="#crew" @click="scrollToSection('crew')" :class="{ 'text-black': scrolled || isMenuOpen, 'text-white': !scrolled && !isMenuOpen }" class="hidden md:block cursor-pointer no-underline font-medium hover:text-gray-500 transition-colors duration-300">Crew</a>
          <a href="#contact" @click="scrollToSection('contact')" :class="{ 'text-black': scrolled || isMenuOpen, 'text-white': !scrolled && !isMenuOpen }" class="hidden md:block cursor-pointer no-underline font-medium hover:text-gray-500 transition-colors duration-300">Ta Kontakt</a>
        </div>
      </div>
      <div class="md:hidden relative">
        <button @click="toggleMenu" :class="{ 'text-black': scrolled, 'text-white': !scrolled }">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div v-if="isMenuOpen" class="absolute top-[40px] right-0 bg-white w-48 rounded-lg shadow-lg">
          <div class="flex flex-col p-4">
            <a href="#hero" @click="scrollToSection('hero')" class="text-black cursor-pointer no-underline font-medium hover:text-gray-500 transition-colors duration-300 py-2">Hjem</a>
            <a href="#services" @click="scrollToSection('services')" class="text-black cursor-pointer no-underline font-medium hover:text-gray-500 transition-colors duration-300 py-2">Om Oss</a>
            <a href="#equipment" @click="scrollToSection('equipment')" class="text-black cursor-pointer no-underline font-medium hover:text-gray-500 transition-colors duration-300 py-2">Utstyr</a>
            <a href="#crew" @click="scrollToSection('crew')" class="text-black cursor-pointer no-underline font-medium hover:text-gray-500 transition-colors duration-300 py-2">Crew</a>
            <a href="#contact" @click="scrollToSection('contact')" class="text-black cursor-pointer no-underline font-medium hover:text-gray-500 transition-colors duration-300 py-2">Ta Kontakt</a>
          </div>
        </div>
      </div>
    </nav>
  </template>

  <script>
  export default {
    name: 'Navbar',
    data() {
      return {
        scrolled: false,
        isMenuOpen: false
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
        this.scrolled = window.scrollY > 50
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
