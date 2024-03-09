<script setup>
import ServiceCard from '../components/ServiceCard.vue';
import { ref, onMounted, onUnmounted } from 'vue';

const hideHireMe = ref(false);

onMounted(() => {
    window.addEventListener('scroll',
        handleScroll
    )
});
onUnmounted(() => {
    window.removeEventListener('scroll',
        handleScroll
    )
});

function handleScroll() {
    hideHireMe.value = window.scrollY > 0;
}
</script>
<template>
    <main>
        <section class="pt-8 px-4 md:px-0">
            <h1 class="font-exo font-semibold text-3xl md:text-5xl text-center text-primary">
                Full-stack Web Developer
            </h1>
            <h2 class="mt-4 text-xl md:text-2xl text-center font-nunito text-primary">Laravel & Vue.js Expert
            </h2>
        </section>
        <section class="mt-12 flex justify-center">
            <ul class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                <ServiceCard title="Custom Web Apps"
                    description="Tailored Laravel and Vue.js solutions for unique business needs.">
                    <template #icon>
                        <svg class="h-full w-auto -translate-x-0.5" xmlns="http://www.w3.org/2000/svg" width="32"
                            height="32" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="m8 18l-6-6l6-6l1.425 1.425l-4.6 4.6L9.4 16.6zm8 0l-1.425-1.425l4.6-4.6L14.6 7.4L16 6l6 6z" />
                        </svg>
                    </template>
                </ServiceCard>
                <ServiceCard title="CMS Solutions"
                    description="Laravel-based content management systems for easy content control.">
                    <template #icon>
                        <svg class="h-full w-auto -translate-x-0.5" xmlns="http://www.w3.org/2000/svg" width="32"
                            height="32" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20zm0-2h16V8h-8.825l-2-2H4zm0 0V6z" />
                        </svg>
                    </template>
                </ServiceCard>
                <ServiceCard title="E-commerce Platforms"
                    description="Scalable e-commerce development with seamless user experiences.">
                    <template #icon>
                        <svg class="h-full w-auto -translate-x-1.5" xmlns="http://www.w3.org/2000/svg" width="32"
                            height="32" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h2q0-1.65 1.175-2.825T12 2q1.65 0 2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.587 1.413T18 22zm0-2h12V8h-2v2q0 .425-.288.713T15 11q-.425 0-.712-.288T14 10V8h-4v2q0 .425-.288.713T9 11q-.425 0-.712-.288T8 10V8H6zm4-14h4q0-.825-.587-1.412T12 4q-.825 0-1.412.588T10 6M6 20V8z" />
                        </svg>
                    </template>
                </ServiceCard>
            </ul>
        </section>
        <a href="https://www.malt.fr/profile/mehmetozdemir" target="_blank" rel="noopener noreferrer"
            :class="hideHireMe ? 'opacity-0' : 'opacity-100'"
            class="fixed bottom-12 md:bottom-14 left-1/2 -translate-x-1/2 transition-opacity shadow-md shadow-blue-200 flex items-center bg-blue-500 rounded-full pl-4 pr-6 py-3 text-white font-semibold text-lg hover:bg-blue-600 transition duration-300">
            <svg class="h-8 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" aria-label="Malt" role="img"
                viewBox="0 0 512 512">
                <path fill="currentColor"
                    d="m408.4 103.8c-32.5-32.4-67.1-11.4-88.8 10.2L114.8 318.8c-21.7 21.7-44.4 54.7-10.2 88.8c34.1 34.1 67 11.4 88.7-10.3l204.8-204.8c21.7-21.6 42.7-56.3 10.3-88.7zm-195.7-8.4 43.4 43.4 44.1-44.2c3-3 6-5.8 9.1-8.4c-4.6-23.3-17.9-44.4-53.3-44.4c-35.4 0-48.7 21.2-53.2 44.5c3.3 2.9 6.6 5.8 9.9 9.1zm87.5 322.1-44.1-44.1-43.4 43.3c-3.3 3.3-6.5 6.4-9.8 9.2c5 23.8 19 45.5 53.1 45.5c34.2 0 48.3-21.9 53.2-45.7c-3-2.6-6-5.2-9-8.2zm-105.9-217h-83.6c-30.7 0-70 9.7-70 55.5c0 34.3 21.9 48.3 45.8 53.2c2.8-3.2 107.8-108.7 107.8-108.7zm231.5 2.3c-2.6 3-107.9 108.8-107.9 108.8h82.4c30.7 0 70-7.3 70-55.6c0-35.3-21.1-48.6-44.5-53.2zm-204.1-29.7 14.9-14.9-43.3-43.4c-21.7-21.7-54.6-44.4-88.8-10.2c-25 25-19.4 49.4-6.2 69.1c4.1-.3 123.4-.6 123.4-.6zm68.7 165.9-15 15 44.2 44.1c21.7 21.7 56.3 42.7 88.7 10.3c24.2-24.2 18.7-49.7 5.3-70c-4.3.3-123.2.6-123.2.6z" />
            </svg>
            <span class="w-max">
                Hire me on Malt!
            </span>
        </a>
    </main>
</template>