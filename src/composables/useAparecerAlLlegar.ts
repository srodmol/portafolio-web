import { ref, onMounted, onBeforeUnmount, type Ref } from 'vue'

// Marca como "vistos" los elementos según van entrando en la pantalla al hacer scroll
export function useAparecerAlLlegar(elementos: Readonly<Ref<HTMLElement[] | null>>, margen = '0px 0px -15% 0px') {
  const vistos = ref(new Set<string>())
  let observador: IntersectionObserver | undefined

  onMounted(() => {
    observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (!entrada.isIntersecting) continue
          const id = (entrada.target as HTMLElement).dataset.id
          if (id) vistos.value.add(id)
          // Ya ha aparecido: no hace falta seguir vigilándolo
          observador?.unobserve(entrada.target)
        }
      },
      { rootMargin: margen },
    )

    elementos.value?.forEach((el) => observador?.observe(el))
  })

  onBeforeUnmount(() => observador?.disconnect())

  return { vistos }
}