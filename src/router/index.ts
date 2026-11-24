import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/home/Home.vue'
import ProyectosLayout from '@/pages/proyectos/ProyectosLayout.vue'
import Proyectos from '@/pages/proyectos/Proyectos.vue'
import ProyectoDetalle from '@/pages/proyectos/ProyectoDetalle.vue'
import SobreMi from '@/pages/sobre-mi/SobreMi.vue'
import Contacto from '@/pages/contacto/Contacto.vue'

declare module 'vue-router' {
  interface RouteMeta {
    titulo?: string
  }
}

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'inicio', component: Home },
    {
      path: '/proyectos',
      component: ProyectosLayout,
      meta: { titulo: 'Proyectos' },
      children: [
        { path: '', name: 'proyectos', component: Proyectos },
        { path: ':slug', name: 'proyecto', component: ProyectoDetalle, props: true },
      ],
    },
    { path: '/sobre-mi', name: 'sobre-mi', component: SobreMi, meta: { titulo: 'Sobre mí' } },
    { path: '/contacto', name: 'contacto', component: Contacto, meta: { titulo: 'Contacto' } },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})