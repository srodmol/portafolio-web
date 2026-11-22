<script setup lang="ts">
    defineProps<{ slug: string }>()
</script>

<template>
    <section class="px-[5vw] py-16">
        <p class="font-mono text-sm uppercase tracking-wider text-muted-foreground">Proyecto</p>
         <h1 class="text-5xl font-medium tracking-tight">{{ slug }}</h1>
    </section>
</template>

<style scoped>

</style>