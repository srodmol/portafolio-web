export interface BloqueTexto {
  titulo: string
  parrafos: string[]
}

export interface EntradaCV {
  etiqueta: string // la fecha, el programa o el idioma
  texto: string
}

export interface SeccionCV {
  id: string
  titulo: string
  entradas: EntradaCV[]
}

export interface Perfil {
  nombre: string
  ciudad: string
  email: string
  sobreMi: BloqueTexto[]
  cv: SeccionCV[]
}

export const perfil: Perfil = {
  nombre: 'Sara Rodríguez Molina',
  ciudad: 'Valencia, España',
  email: 'saraa.rodriguezmolina@gmail.com',
  sobreMi: [
    {
      titulo: 'Statement',
      parrafos: [
        'Trabajo desde el diseño gráfico y editorial como herramientas para organizar información y construir sistemas visuales claros y coherentes. Me interesa especialmente la tipografía y la composición como medios para dar forma al contenido y definir su lectura.',
        'Entiendo el diseño como una práctica no neutra, capaz de influir en cómo se interpreta y se accede a la información. Por ello, presto atención a la claridad, la legibilidad y la accesibilidad.',
      ],
    },
    {
      titulo: 'Biografía',
      parrafos: [
        'Sara Rodríguez Molina (Valencia, 2004) es estudiante de Bellas Artes en la Universitat Politècnica de València. Su práctica se centra en el diseño gráfico y editorial, con especial atención a la tipografía, la composición y la construcción de sistemas visuales.',
        'Su trabajo se orienta principalmente al ámbito cultural, explorando el diseño como herramienta de comunicación visual en contextos contemporáneos.',
      ],
    },
  ],
  cv: [
    {
      id: 'formacion',
      titulo: 'Formación',
      entradas: [
        {
          etiqueta: '2023 — actualidad',
          texto: 'Grado en Bellas Artes, Facultad de Bellas Artes, UPV.',
        },
        { etiqueta: '2026', texto: 'Diseño Web y Comunicación Online — UPV.' },
        {
          etiqueta: '2026',
          texto: 'Productos Digitales: Diseño de una Interfaz Gráfica — UPV.',
        },
      ],
    },
    {
      id: 'experiencia',
      titulo: 'Experiencia',
      entradas: [
        {
          etiqueta: '2025',
          texto: 'Digitalización, organización y preservación de material fotográfico. «Salvem les fotos UPV / Recuperar las memorias», Facultad de Bellas Artes, Valencia.',
        },
        {
          etiqueta: '2025',
          texto: '«Intersecciones», Sankofa, Valencia. Comisariado por Andrea Pont.',
        },
      ],
    },
    {
      id: 'software',
      titulo: 'Software',
      entradas: [
        {
          etiqueta: 'Adobe',
          texto: 'InDesign · Photoshop · Illustrator · Premiere · After Effects',
        },
        { etiqueta: 'Otros', texto: 'DaVinci · Figma · WordPress' },
      ],
    },
    {
      id: 'idiomas',
      titulo: 'Idiomas',
      entradas: [
        { etiqueta: 'Español', texto: 'Nativo' },
        { etiqueta: 'Valenciano', texto: 'Alto' },
        { etiqueta: 'Inglés', texto: 'Intermedio' },
      ],
    },
  ],
}
