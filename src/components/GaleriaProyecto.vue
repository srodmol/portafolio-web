<script setup lang="ts">
import { ref, computed } from 'vue'
import { ChevronLeft, ChevronRight } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import type { Imagen } from '@/data/proyectos'

const props = defineProps<{ imagenes: Imagen[]; color: string }>()

const indice = ref(0)
const total = computed(() => props.imagenes.length)
const actual = computed(() => props.imagenes[indice.value])
const contador = computed(
  () => `${String(indice.value + 1).padStart(2, '0')} / ${String(total.value).padStart(2, '0')}`,
)

function anterior() {
  indice.value = (indice.value - 1 + total.value) % total.value
}

function siguiente() {
  indice.value = (indice.value + 1) % total.value
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <!-- Imagen grande -->
    <div class="relative aspect-[4/3] overflow-hidden bg-foreground/5">
      <img
        v-if="actual"
        :key="actual.src"
        :src="actual.src"
        :alt="actual.alt"
        class="size-full object-contain animate-in fade-in duration-300"
      />

      <!-- Controles: solo si hay más de una imagen -->
      <div v-if="total > 1" class="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
        <Button
          variant="secondary"
          size="icon"
          aria-label="Imagen anterior"
          class="size-12 rounded-full bg-background hover:bg-background hover:scale-105"
          @click="anterior"
        >
          <ChevronLeft class="size-5" aria-hidden="true" />
        </Button>

        <span class="rounded-full bg-background px-3.5 py-2 font-mono text-sm" aria-live="polite">
          {{ contador }}
        </span>

        <Button
          variant="secondary"
          size="icon"
          aria-label="Imagen siguiente"
          class="size-12 rounded-full bg-background hover:bg-background hover:scale-105"
          @click="siguiente"
        >
          <ChevronRight class="size-5" aria-hidden="true" />
        </Button>
      </div>
    </div>

    <!-- Miniaturas -->
    <div v-if="total > 1" class="grid grid-cols-[repeat(auto-fill,minmax(88px,1fr))] gap-3 px-[5vw] lg:pr-0">
      <button
        v-for="(imagen, i) in imagenes"
        :key="imagen.src"
        type="button"
        :aria-label="`Ver imagen ${i + 1}: ${imagen.alt}`"
        :aria-pressed="i === indice"
        class="aspect-[4/3] overflow-hidden border-2 bg-foreground/5 transition"
        :class="i === indice ? '' : 'border-transparent opacity-60 hover:opacity-100'"
        :style="i === indice ? { borderColor: color } : {}"
        @click="indice = i"
      >
        <img :src="imagen.src" alt="" loading="lazy" class="size-full object-cover" />
      </button>
    </div>
  </div>
</template>