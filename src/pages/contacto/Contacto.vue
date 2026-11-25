<script setup lang="ts">
import { Copy, Check } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import IconoInstagram from '@/components/IconoInstagram.vue'
import { perfil } from '@/data/perfil'
import { useCopiar } from '@/composables/useCopiar'

const { copiado, copiar } = useCopiar()
</script>

<template>
  <section class="flex flex-col items-center justify-center gap-8 px-[5vw] py-20 text-center">
    <img
      src="/img/sara.webp"
      :alt="`Retrato de ${perfil.nombre}`"
      width="280"
      height="280"
      class="size-[280px] object-cover"
    />

    <h1 class="text-[clamp(40px,5vw,72px)] leading-none font-medium tracking-[-0.04em]">Hablemos</h1>

    <div class="flex flex-col items-center gap-3.5 font-mono text-[17px] leading-relaxed">
      <span>{{ perfil.ciudad }}</span>

      <div class="flex flex-wrap items-center justify-center gap-3">
        <a :href="`mailto:${perfil.email}`" class="underline-offset-4 hover:underline">{{ perfil.email }}</a>

        <Button
          :variant="copiado ? 'default' : 'outline'"
          class="h-11 rounded-full px-4 font-mono text-sm uppercase tracking-[0.04em] shadow-none"
          @click="copiar(perfil.email)"
        >
          <Check v-if="copiado" class="size-4" aria-hidden="true" />
          <Copy v-else class="size-4" aria-hidden="true" />
          <span aria-live="polite">{{ copiado ? '¡Copiado!' : 'Copiar email' }}</span>
        </Button>
      </div>

      <a
        :href="`https://instagram.com/${perfil.instagram}`"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex min-h-11 items-center gap-2 underline-offset-4 hover:underline"
      >
        <IconoInstagram class="size-[18px]" aria-hidden="true" />
        @{{ perfil.instagram }}
      </a>
    </div>
  </section>
</template>