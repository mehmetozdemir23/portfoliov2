<template>
    <section class="flex flex-col items-center justify-center flex-1 text-white px-8 md:px-16 md:mb-8">
        <h2 class="w-max text-[2.5rem] md:text-6xl font-bold font-subtitle text-center mb-4 md:mb-8">Mehmet Ozdemir</h2>
        <p class="text-xl md:text-2xl text-center mb-8 md:mb-12 font-grotesk">Crafting engaging web experiences</p>
        <router-link :to="{ name: 'contact' }"
            class="bg-blue-600 hover:bg-blue-700 text-white py-4 px-10 rounded-full text-xl md:text-2xl font-semibold transition duration-300">Let's
            collaborate!</router-link>
    </section>
</template>