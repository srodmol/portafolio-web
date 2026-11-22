import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '@/views/InicioView.vue'
import ProyectosLayout from '@/views/ProyectosLayout.vue'
import ProyectosView from '@/views/ProyectosView.vue'
import DetalleView from '@/views/DetalleView.vue'
import SobreMiView from '@/views/SobreMiView.vue'
import ContactoView from '@/views/ContactoView.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'inicio', component: InicioView },
    {
      path: '/proyectos',
      component: ProyectosLayout,
      children: [
        { path: '', name: 'proyectos', component: ProyectosView },
        { path: ':slug', name: 'proyecto', component: DetalleView, props: true },
      ],
    },
    { path: '/sobre-mi', name: 'sobre-mi', component: SobreMiView },
    { path: '/contacto', name: 'contacto', component: ContactoView },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})