<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Menu } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { perfil } from '@/data/perfil'

const route = useRoute()

const esInicio = computed(() => route.name === 'inicio')
const seccion = computed(() => route.meta.titulo ?? '')

const enlaces = [
  { nombre: 'Proyectos', ruta: '/proyectos' },
  { nombre: 'Sobre mí', ruta: '/sobre-mi' },
  { nombre: 'Contacto', ruta: '/contacto' },
]
const enlacesMovil = [{ nombre: 'Inicio', ruta: '/' }, ...enlaces]

// ¿Este enlace es el de la página actual?
function esActivo(ruta: string) {
  return ruta === '/' ? route.path === '/' : route.path.startsWith(ruta)
}

// El menú se cierra solo al cambiar de página
const menuAbierto = ref(false)
watch(
  () => route.fullPath,
  () => (menuAbierto.value = false),
)
</script>

<template>
  <header
    class="flex items-center justify-between gap-x-8 gap-y-4 border-b border-border px-[5vw] py-4 font-mono text-[15px] uppercase tracking-[0.04em] md:flex-wrap md:py-7"
  >
    <!-- Nombre y sección (fuera de la portada) -->
    <template v-if="!esInicio">
      <RouterLink to="/" class="underline-offset-4 hover:underline md:flex-[1_1_240px]">
        {{ perfil.nombre }}
      </RouterLink>
      <span class="hidden text-center md:block md:flex-[1_1_160px]">{{ seccion }}</span>
    </template>

    <!-- Navegación de escritorio -->
    <nav aria-label="Principal" class="hidden flex-[1_1_360px] flex-wrap items-center justify-end gap-x-7 gap-y-2 md:flex">
      <RouterLink
        v-for="enlace in enlaces"
        :key="enlace.ruta"
        :to="enlace.ruta"
        class="underline-offset-4 hover:underline"
        :class="{ underline: esActivo(enlace.ruta) }"
      >
        {{ enlace.nombre }}
      </RouterLink>
    </nav>

    <!-- Menú móvil -->
    <Sheet v-model:open="menuAbierto">
      <SheetTrigger as-child>
        <Button variant="ghost" size="icon" class="ml-auto size-11 md:hidden" aria-label="Abrir menú">
          <Menu class="size-6" aria-hidden="true" />
        </Button>
      </SheetTrigger>

      <SheetContent side="top" class="h-dvh gap-0 border-none bg-foreground text-background">
        <SheetTitle class="px-[5vw] pt-6 font-mono text-sm font-normal uppercase tracking-[0.04em] text-background">
          Menú
        </SheetTitle>
        <SheetDescription class="sr-only">Navegación principal del portfolio</SheetDescription>

        <nav aria-label="Principal" class="flex flex-1 flex-col justify-center gap-1 px-[5vw]">
          <RouterLink
            v-for="enlace in enlacesMovil"
            :key="enlace.ruta"
            :to="enlace.ruta"
            class="py-1.5 text-[clamp(40px,13vw,56px)] font-medium tracking-[-0.04em] underline-offset-8"
            :class="{ underline: esActivo(enlace.ruta) }"
          >
            {{ enlace.nombre }}
          </RouterLink>
        </nav>

        <p class="border-t border-background/30 px-[5vw] py-5 font-mono text-sm">{{ perfil.email }}</p>
      </SheetContent>
    </Sheet>
  </header>
</template>