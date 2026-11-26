# Proyecto transversal
# Portfolio web — Sara Rodríguez Molina

Portfolio personal de diseño gráfico, editorial y UX/UI, desarrollado para la asignatura **Apps y Arte Multimedia** (Grado en Bellas Artes, UPV).

La web traslada al formato digital el diseño limpio y editorial de mi portfolio en PDF: mucho espacio en blanco, líneas finas como separadores y la tipografía como protagonista. Sobre esa base añade interacciones que solo tienen sentido en pantalla.

## Páginas

- **Inicio:** mi nombre a gran tamaño, con un rastro de imágenes de los proyectos que sigue al ratón, y una lista de proyectos seleccionados con vista previa al pasar el cursor. En móvil, las imágenes aparecen al hacer scroll.
- **Proyectos:** cuadrícula de proyectos con filtros por categoría.
- **Ficha de proyecto:** galería de imágenes, descripción, colaboradores y enlace al siguiente proyecto.
- **Sobre mí:** statement, biografía y CV organizado en pestañas.
- **Contacto:** datos de contacto y botón para copiar el email.

Incluye modo claro y oscuro, menú adaptado a móvil y un título de pestaña distinto en cada página.

## Tecnologías

- **Vue 3** con **TypeScript** y `<script setup>`
- **Vite**
- **Tailwind CSS v4**
- **Vue Router**
- **shadcn-vue** (Button, Tabs, Sheet)
- **Lucide** para los iconos

No se usa ninguna otra librería ni framework de terceros.

## Cómo se cumplen los requisitos

| Requisito | Dónde |
|---|---|
| Imágenes a 72 ppp optimizadas | `public/img/` — WebP a 72 ppp, máximo 2000 px para pantallas Retina |
| Responsive con Flexbox y Grid | En todas las páginas; cuadrículas con `auto-fill` y tipografía con `clamp()` |
| Tailwind (más del 50 % de los estilos) | Prácticamente todo el estilo; CSS propio solo para variables de color, fuentes y la animación del rastro |
| Componentes de shadcn-vue | `Button` (filtros, galería, contacto, tema), `Tabs` (CV), `Sheet` (menú móvil) |
| Iconos de Lucide | Flechas, menú, sol/luna, copiar, Instagram |
| Vue Router declarativo con rutas anidadas | `src/router/index.ts`: `/proyectos` contiene `/proyectos/:slug` |
| Datos embebidos | `src/data/proyectos.ts` y `src/data/perfil.ts` |
| Eventos | Hover y foco en la lista, clics en filtros y galería, `mousemove` en el rastro, copiar email |
| Reactividad y directivas | `ref`, `computed`, `watch`, `v-for`, `v-if`, `v-model`, `:class`, `:style` |
| Componentes propios | `CabeceraWeb`, `PieWeb`, `TarjetaProyecto`, `GaleriaProyecto`, `RastroImagenes` |
| Composables | `useFiltroProyectos`, `useCopiar`, `useTema`, `useAparecerAlLlegar` |

## Estructura

```
src/
├─ components/     Componentes propios
│  └─ ui/          Componentes de shadcn-vue
├─ composables/    Lógica reutilizable (use…)
├─ data/           Contenido de la web
├─ lib/            Utilidades (cn)
├─ pages/          Una carpeta por sección
├─ router/         Rutas
└─ style.css       Tailwind, colores y fuentes
public/
└─ img/            Imágenes optimizadas
```

## Comandos

- `npm install`: instala todas las dependencias listadas en `package.json`.
- `npm run dev`: arranca el servidor de desarrollo en `http://localhost:5173`.
- `npm run build`: genera la versión final en la carpeta `dist`.

## Autora

**Sara Rodríguez Molina** — Valencia, 2026
saraa.rodriguezmolina@gmail.com


## Comandos principales

- `npm install`: Instala todas las dependencias necesarias que están listadas en `package.json`.

- `npm run dev`: Ejecuta el servidor de desarrollo, permitiendo ver y probar la aplicación en modo interactivo en local.

