<script setup lang="ts">
const anio = new Date().getFullYear()
</script>

<template>
  <footer class="flex flex-wrap justify-between gap-x-8 gap-y-3 border-t border-border px-[5vw] py-6 font-mono text-sm">
    <span>© {{ anio }} Sara Rodríguez Molina</span>
    <a href="mailto:saraa.rodriguezmolina@gmail.com" class="underline-offset-4 hover:underline">
      saraa.rodriguezmolina@gmail.com
    </a>
  </footer>
</template>