<template>
    <div class="max-w-3xl mx-auto py-16 px-8 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl shadow-2xl">
        <div class="flex items-center mb-6">
            <h1 class="text-4xl font-extrabold text-black tracking-tight">Om oss</h1>
        </div>
        <p class="text-lg text-muted-foreground mb-4 text-gray-700">
            Tresfjord Lyd å Lys er din lokale partner for lyd, lys og AV-utstyr i Møre og Romsdal. Vi leverer profesjonelle løsninger til konserter, arrangementer, bryllup og firmafester – uansett størrelse.
        </p>
        <ul class="list-disc pl-6 text-base text-gray-700 mb-6 space-y-1">
            <li>Skreddersydde lyd- og lysoppsett for alle typer arrangement</li>
            <li>Erfarent team dedikert til kvalitet og service</li>
            <li>Utstyr fra ledende leverandører</li>
            <li>Rådgivning, levering, og montering av fast installasjoner</li>
        </ul>
        <div class="flex flex-col sm:flex-row gap-4 text-gray-700">
            <button
                @click="scrollToSection('contact')"
                class="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors duration-300 focus:outline-none"
                type="button"
            >
                Ta Kontakt
            </button>
            <router-link to="/equipment">
                <button
                    class="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors duration-300 focus:outline-none"
                    type="button"
                >
                    Se Utstyr
                </button>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'About',
    data() {
      return {
        isMenuOpen: false,
      }
    },
    methods: {
      scrollToSection(sectionId: string) {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
          this.isMenuOpen = false
        }
      },
    }
}
</script>