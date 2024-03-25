<template>
  <header>
    <Navbar />
  </header>
  <main
    class="bg-gradient-to-b from-gray-900 to-blue-900 min-h-screen flex flex-col items-center">
    <transition>
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </transition>
  </main>
</template>
<script setup>
import Navbar from '@/components/Navbar.vue';
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>