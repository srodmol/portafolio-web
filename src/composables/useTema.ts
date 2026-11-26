import { ref, watch } from 'vue'

const CLAVE = 'tema'

// Al abrir la web: lo que eligió la última vez o, si nunca eligió, lo que usa su sistema
function preferenciaInicial(): boolean {
  const guardado = localStorage.getItem(CLAVE)
  if (guardado) return guardado === 'oscuro'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

// Fuera de la función: un único estado compartido por toda la web
const oscuro = ref(preferenciaInicial())

// Pone o quita la clase "dark" en <html> cada vez que cambia
watch(oscuro, (valor) => document.documentElement.classList.toggle('dark', valor), { immediate: true })

export function useTema() {
  function alternar() {
    oscuro.value = !oscuro.value
    localStorage.setItem(CLAVE, oscuro.value ? 'oscuro' : 'claro')
  }

  return { oscuro, alternar }
}
