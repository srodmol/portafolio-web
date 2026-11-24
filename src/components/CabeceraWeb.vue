<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Se recalculan solos cada vez que cambias de página
const esInicio = computed(() => route.name === 'inicio')
const seccion = computed(() => route.meta.titulo ?? '')

const enlaces = [
  { nombre: 'Proyectos', ruta: '/proyectos' },
  { nombre: 'Sobre mí', ruta: '/sobre-mi' },
  { nombre: 'Contacto', ruta: '/contacto' },
]
</script>

<template>
  <header
    class="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-b border-border px-[5vw] py-7 font-mono text-[15px] uppercase tracking-[0.04em]"
  >
    <!-- En la portada solo se ve la navegación -->
    <template v-if="!esInicio">
      <RouterLink to="/" class="flex-[1_1_240px] underline-offset-4 hover:underline">
        Sara Rodríguez Molina
      </RouterLink>
      <span class="flex-[1_1_160px] text-center">{{ seccion }}</span>
    </template>

    <nav aria-label="Principal" class="flex flex-[1_1_360px] flex-wrap items-center justify-end gap-x-7 gap-y-2">
      <RouterLink
        v-for="enlace in enlaces"
        :key="enlace.ruta"
        :to="enlace.ruta"
        class="underline-offset-4 hover:underline [&.router-link-active]:underline"
      >
        {{ enlace.nombre }}
      </RouterLink>
    </nav>
  </header>
</template>
