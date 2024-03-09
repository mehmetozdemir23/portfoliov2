<script setup>
import Navbar from './components/Navbar.vue';
import HomeView from './views/HomeView.vue';
</script>

<template>
  <header>
    <Navbar />
  </header>
  <RouterView />
</template>
