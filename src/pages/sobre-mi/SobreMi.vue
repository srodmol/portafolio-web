<script setup lang="ts">
import { perfil } from '@/data/perfil'
</script>

<template>
  <section class="border-b border-border px-[5vw] pt-16 pb-12">
    <h1 class="text-[clamp(48px,7vw,112px)] leading-[0.95] font-medium tracking-[-0.04em]">Sobre mí</h1>
  </section>

  <section
    class="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] gap-x-[6vw] gap-y-12 border-b border-border px-[5vw] py-16 font-mono text-base leading-[1.75]"
  >
    <div v-for="bloque in perfil.sobreMi" :key="bloque.titulo">
      <h2 class="mb-5 text-[15px] font-normal uppercase tracking-[0.04em] text-muted-foreground">
        {{ bloque.titulo }}
      </h2>
      <p v-for="(parrafo, i) in bloque.parrafos" :key="i" class="mb-5 last:mb-0">
        {{ parrafo }}
      </p>
    </div>
  </section>
</template>