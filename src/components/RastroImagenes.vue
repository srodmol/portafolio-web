<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ imagenes: string[] }>()

interface Hueco {
  id: number
  x: number
  y: number
  src: string
  giro: number
}

const huecos = ref<Hueco[]>([])
let contador = 0
let ultimaPosicion: { x: number; y: number } | null = null

function mover(evento: MouseEvent) {
  // Respeta a quien tiene activado "reducir movimiento"
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const caja = (evento.currentTarget as HTMLElement).getBoundingClientRect()
  const x = evento.clientX - caja.left
  const y = evento.clientY - caja.top

  // Solo añade una imagen cada 110 px de recorrido
  if (ultimaPosicion && Math.hypot(x - ultimaPosicion.x, y - ultimaPosicion.y) < 110) return
  ultimaPosicion = { x, y }

  contador++
  huecos.value.push({
    id: contador,
    x,
    y,
    src: props.imagenes[contador % props.imagenes.length] ?? '',
    giro: Math.random() * 8 - 4,
  })

  // Como mucho 8 imágenes a la vez
  if (huecos.value.length > 8) huecos.value.shift()
}

function salir() {
  ultimaPosicion = null
}

// Permite que la página que lo usa llame a estas funciones
defineExpose({ mover, salir })
</script>

<template>
  <div aria-hidden="true" class="pointer-events-none absolute inset-0 z-0">
    <img
      v-for="hueco in huecos"
      :key="hueco.id"
      :src="hueco.src"
      alt=""
      class="absolute w-[220px] animate-rastro"
      :style="{
        left: `${hueco.x}px`,
        top: `${hueco.y}px`,
        transform: `translate(-50%, -50%) rotate(${hueco.giro}deg)`,
      }"
    />
  </div>
</template>