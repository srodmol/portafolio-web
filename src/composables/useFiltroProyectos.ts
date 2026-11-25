import { ref, computed } from 'vue'
import { proyectos, type Categoria } from '@/data/proyectos'

export type Filtro = Categoria | 'Todos'

export function useFiltroProyectos() {
  const filtros: Filtro[] = ['Todos', 'Branding', 'Cartel', 'Editorial', 'UX/UI']
  const filtroActivo = ref<Filtro>('Todos')

  // Se recalcula sola cada vez que cambia el filtro
  const proyectosFiltrados = computed(() =>
    filtroActivo.value === 'Todos'
      ? proyectos
      : proyectos.filter((p) => p.categoria === filtroActivo.value),
  )

  function contar(filtro: Filtro) {
    return filtro === 'Todos' ? proyectos.length : proyectos.filter((p) => p.categoria === filtro).length
  }

  function elegirFiltro(filtro: Filtro) {
    filtroActivo.value = filtro
  }

  return { filtros, filtroActivo, proyectosFiltrados, contar, elegirFiltro }
}