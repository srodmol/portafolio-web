<script setup lang="ts">
import type { Proyecto } from '@/data/proyectos'

// La tarjeta recibe un proyecto desde fuera
defineProps<{ proyecto: Proyecto }>()
</script>

<template>
  <RouterLink :to="{ name: 'proyecto', params: { slug: proyecto.slug } }" class="group flex flex-col gap-4">
    <div class="aspect-[4/3] overflow-hidden" :style="{ backgroundColor: proyecto.color }">
      <img
        :src="proyecto.portada.src"
        :alt="proyecto.portada.alt"
        loading="lazy"
        class="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />
    </div>

    <div class="flex items-start justify-between gap-4">
      <p class="text-lg leading-snug text-muted-foreground">
        <span class="font-semibold text-foreground underline-offset-4 group-hover:underline">
          “{{ proyecto.titulo }}”
        </span>
        <br />
        {{ proyecto.anio }}
      </p>
      <span
        class="flex-none rounded-full border border-border px-2.5 py-1 font-mono text-xs uppercase tracking-[0.04em]"
      >
        {{ proyecto.categoria }}
      </span>
    </div>
  </RouterLink>
</template>