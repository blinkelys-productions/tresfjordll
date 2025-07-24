<template>
    <section class="p-6 bg-gray-950 text-white w-full flex flex-col items-center">
        <h2 class="text-3xl font-bold mb-6 border-b border-gray-800 pb-2">Crew</h2>
        <div class="flex gap-6 flex-wrap">
            <div
                v-for="member in crew"
                :key="member.id"
                class="bg-gray-900 rounded-xl p-4 flex items-center gap-4 shadow-md transition hover:shadow-xl hover:bg-gray-800 min-w-[250px] w-full sm:w-auto"
            >
                <img
                    :src="member.image"
                    alt="Profile"
                    class="rounded-full object-cover border-2 border-gray-700"
                    width="60"
                    height="60"
                />
                <div class="space-y-1">
                    <h3 class="text-lg font-semibold">{{ member.name }}</h3>
                    <p class="text-sm text-gray-400">{{ member.fields.join(', ') }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "CrewSection",
    data() {
        return {
            crew: [
                {
                    id: 1,
                    name: "Øyvind Rypdal",
                    fields: ["Daglig Leder", "Lyd", "Rigging"],
                    image: "https://via.placeholder.com/60"
                },
                {
                    id: 2,
                    name: "Remi Bergum",
                    fields: ["Rigging"],
                    image: "https://via.placeholder.com/60"
                },
                {
                    id: 3,
                    name: "Christoffer Bøe Misfjord",
                    fields: ["Rigging", "Lyd", "Lys"],
                    image: "https://via.placeholder.com/60"
                },
                {
                    id: 4,
                    name: "Martinus Tomren Slemmen",
                    fields: ["Rigging", "Lys"],
                    image: "https://via.placeholder.com/60"
                },
            ]
        };
    }
};
</script>
