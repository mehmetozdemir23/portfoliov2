<script setup>
defineProps({
    title: String,
    description: String
});
</script>
<template>
    <li class="flex flex-col border border-gray-200 rounded w-full transition duration-400 md:w-60 p-4 hover:border-secondary">
        <div class="h-10 text-secondary">
            <slot name="icon">
            </slot>
        </div>
        <h3 class="mt-6 font-semibold text-lg">{{ title }}</h3>
        <p class="mt-2 font-medium font-nunito text-gray-700"> {{ description }}</p>
    </li>
</template>