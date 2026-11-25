export interface BloqueTexto {
  titulo: string
  parrafos: string[]
}

export interface Perfil {
  nombre: string
  ciudad: string
  email: string
  sobreMi: BloqueTexto[]
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
}