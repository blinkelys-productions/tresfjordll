<template>
    <div class="h-fit bg-gray-950 flex items-center justify-center px-4 py-12">
        <div class="w-full max-w-5xl bg-gray-900 rounded-xl shadow-xl p-6 sm:p-10 flex flex-col lg:flex-row gap-8">
            <!-- Left: Contact Form -->
            <div class="w-full lg:w-1/2">
                <h2 class="text-3xl font-bold mb-6 text-white text-center lg:text-left">Ta kontakt</h2>
                <form v-if="!submitted" @submit.prevent="submitForm" class="space-y-5">
                    <div>
                        <label class="block text-sm font-medium text-gray-300 mb-1" for="name">Navn</label>
                        <input
                            v-model="form.name"
                            type="text"
                            id="name"
                            class="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-300 mb-1" for="email">Email</label>
                        <input
                            v-model="form.email"
                            type="email"
                            id="email"
                            class="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-300 mb-1" for="message">Melding</label>
                        <textarea
                            v-model="form.message"
                            id="message"
                            rows="5"
                            class="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Send Melding
                    </button>
                </form>
                <div v-if="submitted" class="mt-4 text-green-400 text-center">
                    Takk for at du tok kontakt med oss!
                </div>
            </div>

            <!-- Separator -->
            <div class="hidden lg:flex items-center">
                <div class="w-px h-full bg-gray-700"></div>
            </div>

            <!-- Right: Contact Info -->
            <div class="w-full lg:w-1/2 text-white space-y-6">
                <h3 class="text-2xl font-bold mb-2">Kontaktinformasjon</h3>
                <p class="text-gray-300">
                    Du kan også nå oss via følgende:
                </p>
                <div class="space-y-2">
                    <p><strong>Telefon:</strong> +47 95250532</p>
                    <p><strong>Email:</strong> oyvind.rypdal@hotmail.com</p>
                </div>
                <div>
                    <h4 class="font-semibold text-lg">Åpningstider</h4>
                    <p class="text-gray-300">Mandag - Lørdag: 08:00 - 17:00</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
    name: '',
    email: '',
    message: ''
})

const submitted = ref(false)

async function submitForm() {
    try {
        await fetch('https://formspree.io/f/mpwldwzk', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form.value)
        })
        submitted.value = true
        form.value = { name: '', email: '', message: '' }
    } catch (e) {
        console.error('Error submitting form:', e)
        alert('Det oppsto en feil. Prøv igjen senere.')
    }
}
</script>
