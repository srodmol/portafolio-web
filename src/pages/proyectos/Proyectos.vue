<script setup lang="ts">
import { proyectos } from '@/data/proyectos'
import TarjetaProyecto from '@/components/TarjetaProyecto.vue'
</script>

<template>
  <section class="flex flex-wrap items-end justify-between gap-8 px-[5vw] pt-16 pb-8">
    <h1 class="text-[clamp(48px,7vw,112px)] leading-[0.95] font-medium tracking-[-0.04em]">Proyectos</h1>
  </section>

  <p class="px-[5vw] pb-6 font-mono text-sm text-muted-foreground">{{ proyectos.length }} proyectos</p>

  <section class="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-x-8 gap-y-14 px-[5vw] pb-24">
    <TarjetaProyecto v-for="proyecto in proyectos" :key="proyecto.slug" :proyecto="proyecto" />
  </section>
</template>