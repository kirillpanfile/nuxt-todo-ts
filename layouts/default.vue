<script setup lang="ts">
const TheHeader = defineAsyncComponent(async function () {
    return await import('~/components/Header/TheHeader.vue');
});
</script>

<template>
    <main class="flex flex-col min-h-screen">
        <TheHeader />
        <slot></slot>

        <footerTheFooter />
    </main>
</template>

<style>
.nuxt-icon.nuxt-icon--fill,
.nuxt-icon.nuxt-icon--fill * {
    fill: none !important;
}

.page-enter-active,
.page-leave-active {
    transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
    opacity: 0;
}
</style>
