<script setup lang="ts"></script>

<template>
    <header class="w-full border border-b py-2">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
            <nuxt-link to="/">
                <nuxt-img src="/logo.png" alt="logo" title="A VUE BLOG" class="w-14" />
            </nuxt-link>

            <nav>
                <ul class="flex gap-8 items-center">
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><nuxt-link to="/about">About</nuxt-link></li>
                    <li><nuxt-link to="/contact">Contact</nuxt-link></li>
                    <li><Icon name="grommet-icons:github" class="w-5 h-5" /></li>
                    <li>
                        <Icon name="material-symbols:bedtime-outline-rounded" class="w-5 h-5" />
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
