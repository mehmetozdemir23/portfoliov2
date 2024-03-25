<template>
    <div class="flex flex-col items-center flex-1 px-6 md:px-16 pt-24 md:pt-32 md:py-16 font-subtitle text-white">
        <div class="max-w-3xl mx-auto">
            <!-- Project Title with Client Info -->
            <h1 class="text-3xl font-semibold mb-2">{{ project.title }}</h1>
            <!-- Client Info -->
            <p class="flex items-center text-sm font-light text-gray-400 my-4">
                <img v-if="project.client" :src="project.client?.icon" alt="client logo" class="h-8 w-auto mr-2">
                <a href="https://www.keldin.fr" class="text-white">{{ project.client?.name }}</a>
            </p>
            <!-- Project Description -->
            <p class="text-lg font-light font-grotesk mb-4">{{ project.description }}</p>
            <!-- Technologies Used -->
            <div class="flex space-x-2 mb-6">
                <span v-for="techno in project.technologies" :key="techno.id"
                    class="px-3 py-1.5 bg-blue-900 text-white text-sm rounded-full border border-gray-400">{{
                techno.title }}</span>
            </div>
            <!-- Links Section -->
            <div class="flex space-x-2 items-center">
                <!-- GitHub Repo Link -->
                <a v-if="project.repo" :href="project.repo" target="_blank" rel="noopener noreferrer"
                    class="text-blue-200 hover:underline">GitHub Repo</a>
                <!-- Demo Link -->
                <span v-if="project.demo" class="font-bold">&#183;</span>
                <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener noreferrer"
                    class="text-blue-200 hover:underline">Demo</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import projects from '@/data/projects';
import { useRoute } from 'vue-router';

const projectId = useRoute().params.id;
const project = projects.find(project => project.id == projectId);

document.title = project.title;
</script>