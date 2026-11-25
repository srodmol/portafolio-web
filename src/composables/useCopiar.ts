import { ref, onBeforeUnmount } from 'vue'

export function useCopiar(duracion = 2400) {
  const copiado = ref(false)
  let temporizador: ReturnType<typeof setTimeout> | undefined

  async function copiar(texto: string) {
    try {
      await navigator.clipboard.writeText(texto)
      copiado.value = true
      clearTimeout(temporizador)
      temporizador = setTimeout(() => (copiado.value = false), duracion)
    } catch {
      copiado.value = false
    }
  }

  // Si sales de la página antes de que acabe, se limpia el temporizador
  onBeforeUnmount(() => clearTimeout(temporizador))

  return { copiado, copiar }
}