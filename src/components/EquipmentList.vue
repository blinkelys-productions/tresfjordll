<template>
    <div class="equipment-list space-y-6 p-6 bg-white rounded-lg shadow-md border border-gray-200">
        <h2 class="text-3xl font-semibold mb-2">{{ title }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div
                v-for="item in items"
                :key="item.id"
                class="flex flex-col md:flex-row gap-4 p-4 rounded-lg border border-muted bg-muted/50 hover:bg-muted transition-colors"
            >
                <img
                    v-if="item.image && item.image !== ''"
                    :src="item.image"
                    alt="Equipment image"
                    class="w-full md:w-48 h-48 object-cover rounded-md border"
                />
                <div class="flex flex-col justify-center w-full">
                    <h3 class="text-xl font-bold text-primary mb-2">{{ item.name }}</h3>
                    <p class="text-muted-foreground">{{ item.description }}</p>
                    <p class="text-muted-foreground" v-if="item.amount">Mengde: {{ item.amount }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EquipmentList',
    props: {
        title: {
            type: String,
            required: true,
        },
        items: {
            type: Array,
            required: true,
            default: () => [],
        },
    },
}
</script>
