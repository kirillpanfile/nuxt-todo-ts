<script setup lang="ts">
const TheHeader = defineAsyncComponent(async function () {
    return await import('~/components/Header/TheHeader.vue');
});
</script>

<template>
    <main>
        <TheHeader />
        <slot></slot>
    </main>
</template>

<style>
.nuxt-icon.nuxt-icon--fill,
.nuxt-icon.nuxt-icon--fill * {
    fill: none !important;
}
</style>
