  <template>
    <nav :class="{ 'bg-white shadow-md': scrolled }" class="fixed top-0 left-0 right-0 h-[70px] px-8 flex justify-between items-center transition-all duration-300 bg-transparent z-[1000]">
      <div class="flex gap-8 absolute left-1/2 -translate-x-1/2">
        <a href="#hero" @click="scrollToSection('hero')" :class="{ 'text-gray-700': scrolled, 'text-white': !scrolled }" class="cursor-pointer no-underline font-medium hover:text-gray-500 transition-colors duration-300">Hjem</a>
        <a href="#services" @click="scrollToSection('services')" :class="{ 'text-gray-700': scrolled, 'text-white': !scrolled }" class="cursor-pointer no-underline font-medium hover:text-gray-500 transition-colors duration-300">Om Oss</a>
        <a href="#equipment" @click="scrollToSection('equipment')" :class="{ 'text-gray-700': scrolled, 'text-white': !scrolled }" class="cursor-pointer no-underline font-medium hover:text-gray-500 transition-colors duration-300">Utstyr</a>
        <a href="#crew" @click="scrollToSection('crew')" :class="{ 'text-gray-700': scrolled, 'text-white': !scrolled }" class="cursor-pointer no-underline font-medium hover:text-gray-500 transition-colors duration-300">Crew</a>
        <a href="#contact" @click="scrollToSection('contact')" :class="{ 'text-gray-700': scrolled, 'text-white': !scrolled }" class="cursor-pointer no-underline font-medium hover:text-gray-500 transition-colors duration-300">Ta Kontakt</a>
      </div>
    </nav>
  </template>

  <script>
  export default {
    name: 'nNavbar',
    data() {
      return {
        scrolled: false
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
        }
      }
    }
  }
  </script>
