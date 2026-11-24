<script setup lang="ts">
import CabeceraWeb from '@/components/CabeceraWeb.vue'
import PieWeb from '@/components/PieWeb.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <CabeceraWeb />
    <main class="flex-1">
      <RouterView />
    </main>
    <PieWeb />
  </div>
</template>
