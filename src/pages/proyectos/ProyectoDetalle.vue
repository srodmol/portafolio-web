<script setup lang="ts">
import { computed } from 'vue'
import { ArrowLeft, ArrowRight, ArrowUpRight } from '@lucide/vue'
import { proyectos } from '@/data/proyectos'

// El router pasa el slug de la URL como prop (props: true en el router)
const props = defineProps<{ slug: string }>()

const proyecto = computed(() => proyectos.find((p) => p.slug === props.slug))

// El siguiente proyecto de la lista; después del último vuelve al primero
const siguiente = computed(() => {
  const indice = proyectos.findIndex((p) => p.slug === props.slug)
  return proyectos[(indice + 1) % proyectos.length]
})

// Une los nombres: "Mireia Selma y Jordi Aleixandre"
const colaboradores = computed(() =>
  proyecto.value?.colaboradores
    ? new Intl.ListFormat('es', { type: 'conjunction' }).format(proyecto.value.colaboradores)
    : '',
)
</script>

<template>
  <article v-if="proyecto">
    <div class="px-[5vw] pt-6">
      <RouterLink
        :to="{ name: 'proyectos' }"
        class="inline-flex min-h-11 items-center gap-2 font-mono text-sm underline-offset-4 hover:underline"
      >
        <ArrowLeft class="size-4" aria-hidden="true" />
        Todos los proyectos
      </RouterLink>
    </div>

    <section class="flex flex-wrap gap-12 pt-4">
      <!-- Imagen principal (en el commit 10 será la galería) -->
      <div class="min-w-0 flex-[999_1_640px]">
        <div class="aspect-[4/3] overflow-hidden bg-foreground/5">
          <img :src="proyecto.portada.src" :alt="proyecto.portada.alt" class="size-full object-contain" />
        </div>
      </div>

      <!-- Información -->
      <aside class="flex flex-[1_1_340px] flex-col justify-end gap-7 px-[5vw] lg:pl-0">
        <div class="flex flex-wrap gap-2 font-mono text-xs uppercase tracking-[0.04em]">
          <span class="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1">
            <span class="size-2.5 rounded-full" :style="{ backgroundColor: proyecto.color }" />
            {{ proyecto.categoria }}
          </span>
          <span v-if="proyecto.colaboradores" class="rounded-full border border-border px-3 py-1">
            Proyecto en grupo
          </span>
        </div>

        <h1 class="text-[clamp(48px,6vw,96px)] leading-[0.95] font-medium tracking-[-0.04em]">
          {{ proyecto.titulo }}
        </h1>

        <div class="flex flex-col gap-4 text-lg leading-relaxed text-muted-foreground">
          <p>{{ proyecto.anio }}<br />{{ proyecto.descripcion }}</p>
          <p v-if="colaboradores">Proyecto realizado en grupo con:<br />{{ colaboradores }}</p>
        </div>

        <a
          v-if="proyecto.enlace"
          :href="proyecto.enlace"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex min-h-11 items-center gap-2 self-start font-mono text-sm uppercase tracking-[0.04em] underline underline-offset-4"
        >
          Ver prototipo
          <ArrowUpRight class="size-4" aria-hidden="true" />
        </a>
      </aside>
    </section>

    <!-- Siguiente proyecto -->
    <RouterLink
      v-if="siguiente"
      :to="{ name: 'proyecto', params: { slug: siguiente.slug } }"
      class="group mt-24 flex flex-wrap items-baseline justify-between gap-4 border-t border-border px-[5vw] py-10"
    >
      <span class="font-mono text-[15px] uppercase tracking-[0.04em]">Siguiente proyecto</span>
      <span
        class="flex items-center gap-3 text-[clamp(36px,5vw,72px)] font-medium tracking-[-0.035em] transition-transform duration-300 group-hover:translate-x-4"
      >
        {{ siguiente.titulo }}
        <ArrowRight class="size-[0.7em]" aria-hidden="true" />
      </span>
    </RouterLink>
  </article>

  <!-- Si el slug no existe -->
  <section v-else class="flex flex-col gap-6 px-[5vw] py-24">
    <h1 class="text-5xl font-medium tracking-tight">Proyecto no encontrado</h1>
    <RouterLink :to="{ name: 'proyectos' }" class="font-mono text-sm underline underline-offset-4">
      Volver a proyectos
    </RouterLink>
  </section>
</template>