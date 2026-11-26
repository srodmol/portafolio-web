// Tipos: describen la forma que tienen los datos

export type Categoria = 'Branding' | 'Cartel' | 'Editorial' | 'UX/UI'

export interface Imagen {
  src: string
  alt: string
  vertical?: boolean // las verticales no salen en el rastro de la portada
}

export interface Proyecto {
  slug: string            // lo que aparece en la URL: /proyectos/sampler
  titulo: string
  anio: string
  categoria: Categoria
  descripcion: string
  colaboradores?: string[] // el ? significa que es opcional
  color: string           // color de acento del proyecto
  portada: Imagen
  galeria: Imagen[]
  enlace?: string
}

// Datos

export const proyectos: Proyecto[] = [
  {
    slug: 'sampler',
    titulo: 'Sampler',
    anio: '2025–2026',
    categoria: 'Branding',
    descripcion: 'Campaña de comunicación para festival de arte sonoro: carteles, folleto y accesorios.',
    colaboradores: ['Mireia Selma', 'Jordi Aleixandre'],
    color: '#7B3FE4',
    portada: { src: '/img/sampler/carteles.webp', alt: 'Tres carteles del festival Sampler en una valla' },
    galeria: [
      { src: '/img/sampler/carteles.webp', alt: 'Tres carteles del festival Sampler en una valla' },
      { src: '/img/sampler/folleto.webp', alt: 'Folleto del festival con el texto de presentación y los artistas' },
      { src: '/img/sampler/folleto-programa.webp', alt: 'Interior del folleto con el programa por días' },
      { src: '/img/sampler/pulsera.webp', alt: 'Pulseras de acceso del festival' },
      { src: '/img/sampler/bolsa.webp', alt: 'Bolsa de tela negra con asa morada' },
    ],
  },
  {
    slug: 'batalla-de-flors',
    titulo: 'Batalla de flors',
    anio: '2025',
    categoria: 'Cartel',
    descripcion: 'Diseño de cartel.',
    colaboradores: ['Jordi Aleixandre'],
    color: '#E2601A',
    portada: { src: '/img/batalla-de-flors/cartel.webp', alt: 'Cartel amarillo y naranja de la Batalla de flors' },
    galeria: [
      { src: '/img/batalla-de-flors/cartel.webp', alt: 'Cartel amarillo y naranja de la Batalla de flors' },
    ],
  },
  {
    slug: 'caricias',
    titulo: 'Caricias',
    anio: '2025–2026',
    categoria: 'Editorial',
    descripcion: 'Ilustraciones y maquetación de un fanzine.',
    color: '#8FB0DE',
    portada: { src: '/img/caricias/fanzine.webp', alt: 'Fanzine Caricias, portada e interior azul con ilustración roja' },
    galeria: [
      { src: '/img/caricias/fanzine.webp', alt: 'Fanzine Caricias, portada e interior azul con ilustración roja' },
    ],
  },
  {
    slug: 'trainspotting',
    titulo: 'Trainspotting',
    anio: '2025',
    categoria: 'Editorial',
    descripcion: 'Diseño de cubierta.',
    color: '#4A3428',
    portada: { src: '/img/trainspotting/cubierta.webp', alt: 'Cubierta y contracubierta de Trainspotting' },
    galeria: [
      { src: '/img/trainspotting/cubierta.webp', alt: 'Cubierta y contracubierta de Trainspotting' },
    ],
  },
  {
    slug: 'la-vencida',
    titulo: 'La Vencida',
    anio: '2025',
    categoria: 'Editorial',
    descripcion: 'Diseño de artículo.',
    color: '#1A1A1A',
    portada: { src: '/img/la-vencida/revista.webp', alt: 'Revista abierta con el titular de rusowsky sobre fondo negro' },
    galeria: [
      { src: '/img/la-vencida/revista.webp', alt: 'Revista abierta con el titular de rusowsky sobre fondo negro' },
      { src: '/img/la-vencida/articulo.webp', alt: 'Doble página con la cita tachada y la entrevista' },
      { src: '/img/la-vencida/articulo-2.webp', alt: 'Doble página con fotografía y texto de introducción' },
    ],
  },
  {
    slug: 'a-prop',
    titulo: 'a/prop',
    anio: '2026',
    categoria: 'UX/UI',
    descripcion:
      'Diseño UX/UI de app y web de planes culturales en València: descubrir actividades de arte, teatro y música, filtrarlas por hoy, gratis o cerca, y guardarlas en una agenda personal.',
    color: '#B8B3EE',
    portada: { src: '/img/a-prop/app-inicio.webp', alt: 'iPhone con la pantalla de inicio de a/prop' },
    galeria: [
      { src: '/img/a-prop/app-inicio.webp', alt: 'iPhone con la pantalla de inicio de a/prop' },
      { src: '/img/a-prop/web-inicio.webp', alt: 'Versión web de a/prop en un portátil' },
      { src: '/img/a-prop/app-modo-oscuro.webp', alt: 'Pantalla de inicio de a/prop en modo oscuro', vertical: true },
      { src: '/img/a-prop/app-detalle.webp', alt: 'Ficha de un plan cultural en a/prop', vertical: true },
      { src: '/img/a-prop/app-agenda.webp', alt: 'Agenda semanal de a/prop en un móvil', vertical: true },
    ],
  },
]
