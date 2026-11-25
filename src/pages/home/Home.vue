<script setup lang="ts">
import { ref, computed } from 'vue'
import { proyectos } from '@/data/proyectos'

// Qué proyecto se está mostrando en la vista previa
const slugActivo = ref('sampler')

const proyectoActivo = computed(() => proyectos.find((p) => p.slug === slugActivo.value))
</script>

<template>
  <!-- Portada -->
  <section
    class="relative flex flex-wrap items-end justify-between gap-10 overflow-hidden border-b border-border px-[5vw] pt-[18vh] pb-16"
  >
    <h1 class="relative z-10 text-[clamp(64px,11vw,176px)] leading-[0.92] font-medium tracking-[-0.045em]">
      Sara<br />Rodríguez<br />Molina
    </h1>

    <div class="relative z-10 flex max-w-[340px] flex-col gap-5 font-mono text-[15px] leading-relaxed">
      <p>
        Diseño gráfico, editorial y UX/UI. Tipografía y composición para organizar información y construir
        sistemas visuales claros.
      </p>
      <p class="text-muted-foreground">Valencia, España</p>
    </div>
  </section>

  <!-- Proyectos seleccionados -->
  <section class="px-[5vw] pt-14 pb-24">
    <div class="mb-6 flex items-baseline justify-between gap-6 font-mono text-[15px] uppercase tracking-[0.04em]">
      <h2 class="text-[15px] font-normal">Proyectos seleccionados</h2>
      <RouterLink to="/proyectos" class="underline-offset-4 hover:underline">Ver todos →</RouterLink>
    </div>

    <div class="flex flex-wrap gap-12">
      <!-- Lista -->
      <ol class="min-w-0 flex-[999_1_560px] border-t border-border">
        <li v-for="(proyecto, indice) in proyectos" :key="proyecto.slug" class="border-b border-border">
          <RouterLink
            :to="{ name: 'proyecto', params: { slug: proyecto.slug } }"
            class="group grid grid-cols-[56px_minmax(0,1fr)_auto] items-center gap-4 py-5"
            @mouseenter="slugActivo = proyecto.slug"
            @focus="slugActivo = proyecto.slug"
          >
            <span class="font-mono text-sm text-muted-foreground">
              {{ String(indice + 1).padStart(2, '0') }}
            </span>

            <span
              class="flex items-center gap-3.5 text-[clamp(28px,3.4vw,48px)] font-medium tracking-[-0.03em] transition-transform duration-300 group-hover:translate-x-3 group-focus-visible:translate-x-3"
            >
              <span
                class="size-3.5 flex-none rounded-full transition-opacity duration-200"
                :class="proyecto.slug === slugActivo ? 'opacity-100' : 'opacity-0'"
                :style="{ backgroundColor: proyecto.color }"
              />
              {{ proyecto.titulo }}
            </span>

            <span class="text-right font-mono text-sm text-muted-foreground">
              {{ proyecto.categoria }} · {{ proyecto.anio }}
            </span>
          </RouterLink>
        </li>
      </ol>

      <!-- Vista previa -->
      <figure v-if="proyectoActivo" class="flex flex-[1_1_380px] flex-col gap-3.5">
        <div
          class="aspect-[4/3] overflow-hidden transition-colors duration-300"
          :style="{ backgroundColor: proyectoActivo.color }"
        >
          <img :src="proyectoActivo.portada.src" :alt="proyectoActivo.portada.alt" class="size-full object-cover" />
        </div>
        <figcaption class="text-[17px] leading-snug text-muted-foreground">
          <strong class="font-semibold text-foreground">“{{ proyectoActivo.titulo }}”</strong><br />
          {{ proyectoActivo.anio }}<br />
          {{ proyectoActivo.descripcion }}
        </figcaption>
      </figure>
    </div>
  </section>
</template>