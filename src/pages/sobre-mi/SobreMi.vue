<script setup lang="ts">
import { perfil } from '@/data/perfil'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
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

    <section aria-labelledby="titulo-cv" class="px-[5vw] pt-14 pb-24">
    <Tabs default-value="formacion" class="gap-8">
      <div class="flex flex-wrap items-end justify-between gap-6">
        <h2 id="titulo-cv" class="text-[clamp(44px,6vw,96px)] leading-[0.95] font-medium tracking-[-0.04em]">CV</h2>

        <TabsList class="h-auto flex-wrap rounded-3xl border border-border bg-transparent p-1 sm:rounded-full">
          <TabsTrigger
            v-for="seccion in perfil.cv"
            :key="seccion.id"
            :value="seccion.id"
            class="h-11 flex-none rounded-full px-5 font-mono text-sm uppercase tracking-[0.04em] data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-none"
          >
            {{ seccion.titulo }}
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent v-for="seccion in perfil.cv" :key="seccion.id" :value="seccion.id">
        <ul class="border-t border-border font-mono text-base leading-relaxed">
          <li
            v-for="(entrada, i) in seccion.entradas"
            :key="i"
            class="grid grid-cols-1 gap-1 border-b border-border py-5 sm:grid-cols-[minmax(110px,200px)_minmax(0,1fr)] sm:gap-6"
          >
            <span class="text-muted-foreground">{{ entrada.etiqueta }}</span>
            <span>{{ entrada.texto }}</span>
          </li>
        </ul>
      </TabsContent>
    </Tabs>
  </section>
</template>