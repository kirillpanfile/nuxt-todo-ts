<script setup lang="ts">
const links = ref<{ title: string; path: string }[]>([
    { title: 'Articles', path: '/' },
    { title: 'Categories', path: '/' }
]);

const icons = ref<{ name: string; path: string }[]>([
    { name: 'grommet-icons:github', path: '/' },
    { name: 'material-symbols:bedtime-outline-rounded', path: '/' }
]);
</script>

<template>
    <header class="w-full border border-b p-2">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
            <nuxt-link to="/">
                <nuxt-img src="/logo.png" alt="logo" title="A VUE BLOG" class="w-14" />
            </nuxt-link>
            <nav class="flex gap-8 items-center list-none">
                <li v-for="({ title, path }, index) in links" :key="index">
                    <nuxt-link :to="path">{{ title }}</nuxt-link>
                </li>
                <li v-for="({ name, path }, index) in icons" :key="index">
                    <Icon :name="name" class="w-5 h-5" />
                </li>
            </nav>
        </div>
    </header>
</template>

<!-- <script setul lang="ts">
// asd
</script>

<template>
    <footer class="w-full border border-b p-2 h-24 mt-auto">
        <div class="max-w-7xl mx-auto flex items-center justify-between h-full">
            <div>
                <h1 class="font-semibold mb-1 text-base">A VUE BLOG</h1>

                <p class="text-sm w-2/3">
                    This is a blog were our comunity can discuss interesting topics and ask questions based on Vue /
                    Nuxt framerwor.
                </p>
            </div>
            <span>
                All Rights Reserved © 2023. Powered by
                <a href="https://github.com/kirillpanfile/" target="_blank" class="text-blue-600"> @kirillpanfile </a>
            </span>
        </div>
    </footer>
</template> -->
