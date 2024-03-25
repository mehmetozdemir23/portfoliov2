<template>
    <nav ref="navbar" class="fixed top-0 left-0 right-0 z-10 text-white">
        <div class="max-w-screen-xl mx-auto px-4 pr-6 md:px-12 py-4 md:py-6 flex justify-between items-center">
            <router-link :to="{ name: 'home' }">
                <svg class="h-8 w-auto md:h-10" version="1.0" xmlns="http://www.w3.org/2000/svg" width="4533.333"
                    height="2540" fill="currentColor" viewBox="0 0 3400 1905">
                    <path
                        d="M2614.2 201c-73.4 4.9-136.9 21.5-201.7 52.9-110.3 53.5-198 138.7-254.3 247.1-34.5 66.5-53.7 134.4-59.2 209.5-1.5 20.4-1.2 66.1.5 87 6.7 81.5 29.4 154.2 71.1 226.6 74.9 130.5 203.5 227.7 347.9 262.9 46.7 11.5 86.5 15.6 140.8 14.7 39.8-.6 64.2-3.1 97.7-9.7 86.8-17.3 173.7-59.5 245-119.1 25.1-20.9 56.9-53.7 78.3-80.6 42-52.9 75.8-116.3 95.4-178.8 29.7-95 32.1-204.1 6.7-301.5-16.9-64.4-51.2-134.6-92.9-189.9-46.3-61.4-103.2-111.7-168.5-149.2-18.6-10.7-54.5-28.1-73-35.4-46.8-18.6-93.4-29.8-146-35-18.6-1.8-69.3-2.7-87.8-1.5m62.8 246c53.6 4.9 101.8 22 146.7 52.1 67.1 45 113 118.3 126.1 201.4 14.7 92-10.4 182-69.9 251-32.2 37.3-77.9 68.6-127 86.9-67.2 25-146.5 24.2-212.9-2.1-25-9.8-55.7-27.3-77.5-44.2-16.7-12.8-41.8-37.9-54.6-54.6-22.7-29.4-42-66.6-52.4-100.9-12.4-41.2-15.4-91.5-7.9-136.6 8.2-49.5 31-100.3 63.4-141 10.7-13.5 33.5-36.3 47-47 46.8-37.2 102.6-59.7 161.3-64.9 13.6-1.2 44.5-1.2 57.7-.1M200 962v743h248l.2-464.7.3-464.7L675 1240.3 901.5 1705l116.9-.3 116.9-.2 212.6-454.9 212.6-455 .3 455.2.2 455.2h248V219l-126.1.2-126.1.3-270.1 577.2c-148.6 317.5-270.4 577-270.8 576.5-.4-.4-127.4-260.1-282.2-577.2L452.2 219.5l-126.1-.3L200 219zm1953 620v123h979v-246h-979z" />
                </svg>
            </router-link>
            <ul :class="navbarStyle"
                class="flex items-center space-x-4 px-4 md:px-6 py-4 rounded-full text-sm sm:text-lg sm:space-x-6 font-subtitle">
                <li>
                    <router-link :to="{ name: 'home' }" class="font-semibold hover:underline">Home</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'about' }" class="font-semibold hover:underline">About</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'projects' }" class="font-semibold hover:underline">Projects</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'contact' }" class="font-semibold hover:underline">Contact</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const navbar = ref('');
const scrollThreshold = ref(0);
const navbarStyle = ref('bg-transparent');

onMounted(() => {
    scrollThreshold.value = navbar.value.offsetHeight / 2;
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

function handleScroll() {
    if (window.pageYOffset > scrollThreshold.value) {
        navbarStyle.value = 'bg-blue-900 bg-opacity-75';
    } else {
        navbarStyle.value = 'bg-transparent';
    }
}
</script>