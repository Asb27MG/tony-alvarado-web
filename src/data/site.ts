/** Contenido de la web basado en la historia facilitada por el artista. */
export type RepertoireItem = {
  id: 'tradicion' | 'eventos' | 'produccion'
  icon: string
  title: string
  description: string
  detail: string
  pieces: string[]
}

export type EventItem = {
  number: string
  category: string
  title: string
  place: string
  time: string
  action: string
}

export type StoryChapter = {
  period: string
  title: string
  paragraphs: string[]
}

export const siteData = {
  artist: {
    name: 'Tony Alvarado',
    tagline: 'Venezuela siempre viaja conmigo.',
    shortDescription:
      'Soy arpista, arreglista, productor y docente venezolano. Mi música nace de las raíces llaneras y encuentra nuevos caminos en cada escenario, grabación y encuentro.',
    biography: [
      'Mi historia con la música comenzó mucho antes de imaginar que el arpa me llevaría a tantos escenarios. Nací en El Pao, estado Cojedes, Venezuela, y crecí escuchando los sonidos de nuestra tierra.',
      'Desde 1982 participé en festivales infantiles y actividades escolares como La Voz Cantaclaro. Mis primeros pasos fueron con el cuatro, hasta que encontré en el arpa mi manera de expresarme.',
      'Siempre he sentido un profundo respeto por la música tradicional venezolana y por los maestros que abrieron camino. Al mismo tiempo, busco un sonido propio que mantenga vivas nuestras raíces y se atreva a evolucionar.',
    ],
    quote: 'Cuando comencé a tocar el arpa entendí que había encontrado mi manera de expresarme.',
  },
  stats: [
    { value: 1982, prefix: '', suffix: '', label: 'Primeros festivales' },
    { value: 1992, prefix: '', suffix: '', label: 'Nueva Generación' },
    { value: 2016, prefix: '', suffix: '', label: 'Nueva etapa en Miami' },
  ],
  story: [
    {
      period: '1992 · 1993',
      title: 'Nueva Generación: un sueño que comenzó en Venezuela',
      paragraphs: [
        'En 1992, mientras era estudiante universitario, fundamos Nueva Generación junto a Rafael Bericoto, Carlos Pinto, Rafael Vásquez y Martín Beltrán. Éramos jóvenes, teníamos muchos sueños y muchísimas ganas de hacer música venezolana.',
        'En 1993 grabamos nuestra primera producción discográfica junto al dúo Los Morochos Figueroa: Homenaje a Grandes Arpistas. Después llegaron festivales, producciones y giras dentro y fuera de Venezuela.',
        'Con Nueva Generación acompañamos a intérpretes como Luis Silva, José Gregorio Oquendo e Ignacio Rondón. También he compartido escenarios y proyectos con Teo Galíndez, Rummy Olivo, Miguelito Díaz, Rogelio Ortiz, Vito Di Frisco, Alberto Castillo, Rafael «El Pollo» Brito y Rafael Leidenz «El Brujo Dedor», entre otros. Cada músico y cada experiencia me fueron dejando una enseñanza.',
      ],
    },
    {
      period: 'Docencia',
      title: 'Músico, pero también maestro',
      paragraphs: [
        'Soy Licenciado en Educación, mención Desarrollo Cultural, y durante muchos años trabajé como docente especialista en música. También formé parte del Sistema de Orquestas de Venezuela, Núcleo Carabobo, como profesor de la Cátedra de Arpa Llanera.',
        'Para mí, enseñar música significa mucho más que explicar cómo tocar un instrumento: es transmitir una cultura, un golpe, un ritmo, una melodía y nuestra manera de interpretarlos. Ver a un alumno descubrir su talento es una de las grandes alegrías de esta profesión.',
      ],
    },
    {
      period: 'Grabaciones',
      title: 'Del arpa a la producción musical',
      paragraphs: [
        'Con los años desarrollé mi faceta de arreglista y productor musical. Participé en producciones como De Alma, Corazón y Cuerpo de Miguelito Díaz; Venezuela, Gaita y Llano junto a Miguelito Díaz, Neguito Borjas y Gran Coquivacoa; Ofrenda al Llano de Magno Meza; Mis Raíces de Fabiola Bocaney; y Always on My Mind de Silverio Lozada.',
        'Como solista he podido compartir mi propia propuesta a través de Clásicos en Tres Tiempos, Arpeggios y el sencillo Garceros de Soledad. Mi raíz está en Venezuela y la música llanera, pero creo que el arpa puede dialogar con muchos géneros.',
      ],
    },
    {
      period: 'Audiovisual',
      title: 'Un arpa que también llegó a la pantalla',
      paragraphs: [
        'He participado como arpista en bandas sonoras y proyectos audiovisuales, entre ellos Vida Sagrada, interpretada por Fonseca para la serie de Telemundo El Comandante, y Los Buenos Somos Más, interpretada por Alejandro Sanz y Fonseca para la serie El General Naranjo.',
        'También participé en Lo Que Me Das de Nacho, Venezuela, Gaita y Llano, trabajos con Venezuela Nueva Music y Rummy Olivo, y otras producciones ligadas a nuestra música. Me emociona saber que el sonido de mi arpa también cuenta historias en la pantalla.',
      ],
    },
    {
      period: '2006 · 2024',
      title: 'Los reconocimientos son parte del camino',
      paragraphs: [
        'En 2006 obtuve el primer lugar como Mejor Conjunto y Mejor Arpista en el Festival Internacional de Música Llanera El Silbón. Con el tiempo recibí también el galardón Orgullo Migrante, el Tacarigua de Oro Internacional y, en 2024, el reconocimiento Embajador Mundial del Arpa del Año – Mención Oro.',
        'Agradezco cada reconocimiento, pero detrás de cada uno veo años de ensayos, viajes, grabaciones, estudiantes, escenarios y músicos que han formado parte de este camino.',
      ],
    },
    {
      period: '2016 · Actualidad',
      title: 'Venezuela siempre viaja conmigo',
      paragraphs: [
        'Desde 2016 continúo mi carrera en Miami, como arpista y productor musical de Venezuela Nueva Music. También soy profesor de música en Nagoa Music Academy y, desde 2024, participo como productor y moderador del programa La Tonada.',
        'Vivir lejos me enseñó que una tonada, un cuatro o un arpa pueden llevarte de vuelta a casa por unos minutos. He visto a personas emocionarse porque una canción les recordó a sus padres, sus abuelos o algún rincón de Venezuela. Los músicos venezolanos llevamos nuestra tierra con nosotros.',
      ],
    },
    {
      period: 'Cada ocasión',
      title: 'Música para acompañar momentos importantes',
      paragraphs: [
        'Realizo presentaciones para bodas, ceremonias, eventos sociales, celebraciones privadas, eventos corporativos, recepciones y encuentros especiales, adaptando el repertorio y la propuesta musical a cada ocasión.',
        'No es lo mismo acompañar una ceremonia de bodas que un concierto o una celebración familiar. Disfruto encontrar la música indicada para cada momento, porque la música tiene la capacidad de transformar un instante en un recuerdo.',
      ],
    },
    {
      period: 'Mi esencia',
      title: 'Siempre queda una nueva historia por contar',
      paragraphs: [
        'Podría definirme como arpista, arreglista, productor, profesor o músico venezolano; todas son ciertas. Pero, en el fondo, soy una persona que ha tenido el privilegio de hacer de la música su manera de vivir, enseñar, viajar y conectarse con los demás.',
        'El arpa me ha acompañado desde Venezuela hasta Estados Unidos, desde festivales infantiles hasta grandes producciones, desde las aulas hasta los escenarios. Y cada vez que me siento frente a ella siento que queda algo nuevo por aprender, algo nuevo por interpretar y, sobre todo, una nueva historia por contar.',
      ],
    },
  ] satisfies StoryChapter[],
  repertoire: [
    {
      id: 'tradicion',
      icon: '♫',
      title: 'Raíces Venezolanas',
      description: 'La fuerza del llano, sus golpes, tonadas y melodías, con respeto por la tradición y un sello propio.',
      detail: 'Mi interpretación nace de la música tradicional venezolana y de los maestros que inspiraron mi camino. Cada presentación es una oportunidad para compartir nuestras raíces.',
      pieces: ['Música llanera y canta criolla', 'Golpes, ritmos y tonadas', 'Homenajes a la tradición del arpa'],
    },
    {
      id: 'eventos',
      icon: '◉',
      title: 'Momentos Especiales',
      description: 'Un repertorio elegido para cada boda, ceremonia, recepción, celebración o encuentro corporativo.',
      detail: 'Cada ocasión tiene su energía. La selección musical se conversa y adapta al ambiente, al formato de presentación y a los momentos más importantes del evento.',
      pieces: ['Bodas y ceremonias', 'Recepciones y eventos privados', 'Celebraciones y eventos corporativos'],
    },
    {
      id: 'produccion',
      icon: '☆',
      title: 'Arreglos y Nuevos Sonidos',
      description: 'Exploraciones musicales, propuestas como solista y colaboraciones que llevan el arpa a otros géneros.',
      detail: 'Como arreglista y productor exploro nuevas posibilidades para el arpa sin perder su identidad. Mi trabajo comprende grabaciones, colaboraciones y música audiovisual.',
      pieces: ['Clásicos en Tres Tiempos', 'Arpeggios', 'Garceros de Soledad'],
    },
  ] satisfies RepertoireItem[],
  events: [
    { number: '01', category: 'CEREMONIAS', title: 'Bodas y ceremonias', place: 'Música en vivo para momentos inolvidables', time: 'Repertorio a medida', action: 'Consultar' },
    { number: '02', category: 'CELEBRACIONES', title: 'Eventos privados y corporativos', place: 'Recepciones, celebraciones y encuentros especiales', time: 'Formato personalizado', action: 'Consultar' },
    { number: '03', category: 'ESCENARIOS', title: 'Conciertos y proyectos musicales', place: 'Recitales, festivales, grabaciones y colaboraciones', time: 'Fechas por coordinar', action: 'Contratar' },
  ] satisfies EventItem[],
  productions: [
    { title: 'Clásicos en Tres Tiempos', category: 'Producción como solista' },
    { title: 'Arpeggios', category: 'Producción como solista' },
    { title: 'Garceros de Soledad', category: 'Sencillo como solista' },
    { title: 'De Alma, Corazón y Cuerpo', category: 'Producción con Miguelito Díaz' },
    { title: 'Venezuela, Gaita y Llano', category: 'Proyecto con Miguelito Díaz, Neguito Borjas y Gran Coquivacoa' },
    { title: 'Ofrenda al Llano', category: 'Producción de Magno Meza' },
    { title: 'Mis Raíces', category: 'Producción de Fabiola Bocaney' },
    { title: 'Always on My Mind', category: 'Producción de Silverio Lozada' },
  ],
  highlights: [
    { year: '2006', title: 'Festival El Silbón', description: 'Primer lugar como Mejor Conjunto y Mejor Arpista en el Festival Internacional de Música Llanera El Silbón.' },
    { year: '2024', title: 'Embajador Mundial del Arpa', description: 'Reconocimiento Embajador Mundial del Arpa del Año – Mención Oro.' },
    { year: 'Trayectoria', title: 'Orgullo Migrante y Tacarigua de Oro', description: 'Distinciones recibidas durante una carrera dedicada a difundir la música venezolana.' },
  ],
  contact: {
    email: 'arpatony@gmail.com',
    phone: '305-842-9912',
    whatsapp: '13058429912',
    location: 'Miami, Estados Unidos',
  },
  socials: [
    { label: 'Instagram · Tony', href: 'https://www.instagram.com/tonyalvaradoochoa/' },
    { label: 'Instagram · Venezuela Nueva Music', href: 'https://www.instagram.com/venezuelanuevamusic/' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@tonyalvaradoochoa' },
    { label: 'YouTube', href: 'https://www.youtube.com/@tonyalvaradoochoa187' },
    { label: 'Spotify', href: 'https://open.spotify.com/search/Tony%20Alvarado' },
    { label: 'Apple Music', href: 'https://music.apple.com/us/search?term=Tony%20Alvarado' },
    { label: 'Amazon Music', href: 'https://music.amazon.com/search/Tony%20Alvarado' },
  ],
}
