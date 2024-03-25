<template>
    <section
        class="flex flex-col items-center justify-center flex-1 px-8 md:px-16 py-24 md:py-0 font-subtitle text-white">
        <div class="max-w-6xl w-full mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-center mb-10">Projects</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <router-link v-for="project in projects" :key="project.id"
                    :to="{ name: 'project', params: { id: project.id } }" class="relative rounded-lg overflow-hidden">
                    <img :src="project.image" :alt="project.title" class="w-full h-72 bg-white object-contain">
                    <div
                        class="md:absolute inset-0 flex flex-col justify-center items-center p-4 md:p-0 md:opacity-0 bg-blue-900 bg-opacity-70 hover:opacity-100 transition duration-300">
                        <h3 class="text-xl font-semibold text-white px-4">{{ project.title }}</h3>
                    </div>
                </router-link>
            </div>
        </div>
    </section>
</template>
<script setup>
import projects from '@/data/projects';

</script>