<script setup lang="ts">
import { computed } from 'vue'
import TarjetaProyecto from '@/components/TarjetaProyecto.vue'
import { Button } from '@/components/ui/button'
import { useFiltroProyectos } from '@/composables/useFiltroProyectos'

const { filtros, filtroActivo, proyectosFiltrados, contar, elegirFiltro } = useFiltroProyectos()

const resumen = computed(() => {
  const n = proyectosFiltrados.value.length
  const texto = n === 1 ? 'proyecto' : 'proyectos'
  return filtroActivo.value === 'Todos' ? `${n} ${texto}` : `${n} ${texto} · ${filtroActivo.value}`
})
</script>

<template>
  <section class="flex flex-wrap items-end justify-between gap-8 px-[5vw] pt-16 pb-8">
    <h1 class="text-[clamp(48px,7vw,112px)] leading-[0.95] font-medium tracking-[-0.04em]">Proyectos</h1>

    <div role="group" aria-label="Filtrar por categoría" class="flex flex-wrap gap-2">
      <Button
        v-for="filtro in filtros"
        :key="filtro"
        :variant="filtro === filtroActivo ? 'default' : 'outline'"
        :aria-pressed="filtro === filtroActivo"
        class="h-11 rounded-full px-5 font-mono text-sm uppercase tracking-[0.04em] shadow-none"
        @click="elegirFiltro(filtro)"
      >
        {{ filtro }}
        <span class="opacity-60">{{ contar(filtro) }}</span>
      </Button>
    </div>
  </section>

  <p aria-live="polite" class="px-[5vw] pb-6 font-mono text-sm text-muted-foreground">{{ resumen }}</p>

  <section class="grid grid-cols-[repeat(auto-fill,minmax(min(100%,320px),1fr))] gap-x-8 gap-y-14 px-[5vw] pb-24">
    <TarjetaProyecto v-for="proyecto in proyectosFiltrados" :key="proyecto.slug" :proyecto="proyecto" />
  </section>
</template>