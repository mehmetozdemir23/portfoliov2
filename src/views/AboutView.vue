<template>
    <section class="flex flex-col items-start justify-center flex-1 px-8 md:px-16 font-subtitle text-white">
        <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Profile Image Section -->
                <div class="md:flex justify-center md:col-span-1">
                    <img src="@/assets/images/profile-photo.jpg" alt="Mehmet OZDEMIR"
                        class="rounded-full w-32 h-32 md:w-40 md:h-40 object-cover">
                </div>
                <!-- Bio Section -->
                <div class="md:col-span-2">
                    <p class="text-lg leading-relaxed mb-6">
                        Hey there! I'm <span class="font-bold">Mehmet OZDEMIR</span>, a passionate full-stack web
                        developer with expertise in Vue.js and Laravel. With over 2 years of experience, I specialize in
                        crafting dynamic and engaging web applications tailored to your needs.
                    </p>
                    <p class="text-lg leading-relaxed mb-6">
                        When I'm not coding, you can often find me exploring the fascinating world of <span
                            class="font-bold">mathematics</span>, plotting my next move on the <span
                            class="font-bold">chessboard</span>, or diving into the origins of words through <span
                            class="font-bold">etymology</span>.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
