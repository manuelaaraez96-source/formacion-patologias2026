/* =========================================================================
   CONFIGURACIÓN DE LA LANDING — EDITA SOLO ESTE ARCHIVO
   =========================================================================
   Formación Superior en Tricología · Jaldún Salud Capilar
   Todo el contenido de la página se controla desde aquí.
   Cambia textos, fechas, ponentes, etc. y la página se actualiza sola.

   Consejos rápidos:
   - El texto va siempre entre comillas:  "así"
   - Separa los elementos de una lista con comas
   - Para añadir un tema/ponente/FAQ, copia un bloque { ... } y pégalo
   ========================================================================= */

const CONFIG = {

  /* ---------------------------------------------------------------------
     1. DATOS GENERALES / MARCA
     --------------------------------------------------------------------- */
  marca: {
    nombre: "Jaldún Salud Capilar",
    logoTexto: "Jaldún",          // Texto que aparece en la barra superior
    // Si tienes un logo en imagen, pon la ruta aquí (ej: "assets/logo.svg")
    // y se mostrará en lugar del texto. Déjalo "" para usar el texto.
    logoImagen: "assets/logo.svg",
  },

  /* ---------------------------------------------------------------------
     2. SEO Y REDES (metadatos de la pestaña y al compartir el enlace)
     --------------------------------------------------------------------- */
  seo: {
    titulo: "Formación Superior en Tricología | Principales Patologías Capilares · Jaldún",
    descripcion: "Formación presencial para profesionales de peluquería y estética: aprende a detectar las principales patologías capilares y a colaborar en su tratamiento. 28 de septiembre, Elche. Incluye comida y certificado.",
    // URL pública donde estará la web (para compartir en redes)
    url: "https://www.jaldun.com/formacion",
    // Imagen que se ve al compartir el enlace en WhatsApp, Instagram, etc.
    imagenCompartir: "assets/og-image.jpg",
    autor: "Jaldún Salud Capilar",
  },

  /* ---------------------------------------------------------------------
     3. HERO (primera pantalla)
     --------------------------------------------------------------------- */
  hero: {
    etiqueta: "Formación presencial · Plazas limitadas",
    titulo: "Principales patologías capilares",
    // Parte del título que se resalta con el subrayado lavanda (déjalo "" si no quieres)
    resalte: "patologías capilares",
    subtitulo: "Formación Superior en Tricología aplicada a centros de imagen personal. Aprende a detectar las principales patologías del cuero cabelludo y a colaborar en su tratamiento, de la mano de los especialistas más innovadores del sector.",
    // Fecha y hora de inicio para la cuenta atrás (formato AÑO-MES-DÍAThora:min:seg)
    cuentaAtras: "2026-09-28T09:30:00",
    // Datos clave que se muestran como “píldoras” bajo el subtítulo
    fecha: "Lunes 28 de Septiembre, 2026",
    hora: "09:30h – 19:00h",
    modalidad: "Presencial",
    ciudad: "Centro de Congresos de Elche",
    textoBoton: "Reserva tu plaza",
    textoBotonSecundario: "Ver el programa",   // botón secundario (lleva al temario). Déjalo "" para ocultarlo.
    // Imagen del banner (lado derecho). Cambia por la tuya en assets/
    imagen: "assets/hero.jpg",
    imagenAlt: "Detalle microscópico del cuero cabelludo y el cabello",
  },

  /* ---------------------------------------------------------------------
     4. SOBRE EL CURSO
     --------------------------------------------------------------------- */
  sobreCurso: {
    titulo: "Convierte la salud capilar en el motor de tu centro",
    descripcion: "Una formación práctica pensada para profesionales de la peluquería y la estética que quieren detectar a tiempo las patologías capilares, saber cuándo derivar al médico y colaborar con eficacia en su tratamiento.",
    bloques: [
      {
        icono: "graduation",
        titulo: "Qué aprenderás",
        texto: "A reconocer las principales patologías del cuero cabelludo y el cabello, entender sus causas y saber cómo actuar desde tu centro de imagen personal.",
      },
      {
        icono: "users",
        titulo: "A quién va dirigido",
        texto: "Peluqueros, esteticistas, asesores de imagen personal y técnicos capilares que quieran dar un servicio de mayor valor y especializarse en salud capilar.",
      },
      {
        icono: "puzzle",
        titulo: "Qué problema resuelve",
        texto: "La dificultad de distinguir lo estético de lo patológico. Sabrás detectar señales de alarma, cuándo derivar al médico y cómo colaborar en el tratamiento.",
      },
      {
        icono: "target",
        titulo: "Qué resultados obtendrás",
        texto: "Más confianza profesional, un servicio diferenciador y una vía real para impulsar el crecimiento de tu centro con la salud capilar.",
      },
    ],
  },

  /* ---------------------------------------------------------------------
     5. TEMARIO  (programa de ponencias — añade o elimina temas libremente)
     --------------------------------------------------------------------- */
  temario: {
    etiqueta: "El programa que vamos a tratar",
    titulo: "Programa de ponencias",
    subtitulo: "Un recorrido completo por las patologías capilares y su abordaje desde el centro de imagen personal.",
    temas: [
      {
        numero: "01",
        titulo: "Introducción a las patologías capilares",
        texto: "Principales anomalías y patologías del cuero cabelludo y el cabello que encontramos con frecuencia en los centros de imagen personal.",
      },
      {
        numero: "02",
        titulo: "Estrés postraumático y alopecias",
        texto: "Influencia del estrés postraumático en las alopecias y en las anomalías del cuero cabelludo y el cabello.",
      },
      {
        numero: "03",
        titulo: "Salud mental, piel y cabello",
        texto: "Cómo la salud mental influye en el estado de la piel y el cabello.",
      },
      {
        numero: "04",
        titulo: "Nutrición y salud capilar",
        texto: "Nutrientes esenciales para el correcto funcionamiento de la piel y el cabello, y la importancia de la suplementación.",
      },
      {
        numero: "05",
        titulo: "Pediculosis y salud capilar",
        texto: "Detección y abordaje de la pediculosis desde el centro de imagen personal.",
      },
      {
        numero: "06",
        titulo: "Crecimiento capilar y derivación médica",
        texto: "Cuánto crece el cabello y por qué a algunas personas les crece poco. Cuándo y cómo derivar al médico ante una anomalía.",
      },
      {
        numero: "07",
        titulo: "Tiroides, inflamación e inmunidad",
        texto: "Cómo afecta la glándula tiroides a la piel y el cabello, y la influencia de la inflamación y el sistema inmunológico en la caída. Tratamientos médicos.",
      },
      {
        numero: "08",
        titulo: "Principales patologías y cómo actuar",
        texto: "Alopecia areata y frontal fibrosante, dermatitis seborreica aguda, psoriasis, foliculitis y alopecia androgenética. Cómo detectarlas y actuar.",
      },
      {
        numero: "09",
        titulo: "Enfermedades oncológicas y cabello",
        texto: "Cómo afectan al cabello y cómo actuar desde la peluquería para acompañar al cliente.",
      },
      {
        numero: "10",
        titulo: "Menopausia, piel y cabello",
        texto: "Cambios capilares y de la piel asociados a la menopausia.",
      },
      {
        numero: "11",
        titulo: "Oxigenación del cuero cabelludo",
        texto: "Un servicio terapéutico de eficacia técnica, salud y relax dentro del salón de peluquería.",
      },
      {
        numero: "12",
        titulo: "Enfoque fitoterapéutico Jaldún",
        texto: "Tratamiento médico y fitocosmético Jaldún, principios activos y sistema integral para la alopecia y las anomalías capilares.",
      },
    ],
  },

  /* ---------------------------------------------------------------------
     6. PONENTES
     --------------------------------------------------------------------- */
  ponentes: {
    titulo: "Ponentes",
    subtitulo: "Un equipo multidisciplinar de médicos, especialistas y técnicos capilares.",
    lista: [
      {
        foto: "assets/ponente-trino.jpg",
        etiqueta: "Director de la formación",
        nombre: "Trino Miravete",
        cargo: "Director Técnico de Jaldún Salud Capilar",
        empresa: "",
        bio: "Autor de los libros «El cuero cabelludo. Preguntas y respuestas» y «Tricología en la peluquería».",
        redes: { linkedin: "", twitter: "", web: "" },
      },
      {
        foto: "assets/ponente-raquel.jpg",
        nombre: "Dra. Raquel Navarro",
        cargo: "Medicina estética y capilar",
        empresa: "",
        bio: "Médica especialista en medicina estética y tratamientos capilares.",
        redes: { linkedin: "", twitter: "", web: "" },
      },
      {
        foto: "assets/ponente-francisco.jpg",
        nombre: "Dr. Francisco Amorós",
        cargo: "Internista · Medicina capilar regenerativa",
        empresa: "",
        bio: "Médico internista especializado en medicina capilar regenerativa.",
        redes: { linkedin: "", twitter: "", web: "" },
      },
      {
        foto: "assets/ponente.svg",
        nombre: "Dra. Rosa Miralles Gil",
        cargo: "Especialista en salud mental",
        empresa: "",
        bio: "Médica especialista en salud mental y su relación con la salud capilar.",
        redes: { linkedin: "", twitter: "", web: "" },
      },
      {
        foto: "assets/ponente.svg",
        nombre: "José Espinosa",
        cargo: "Nutricionista dietista",
        empresa: "Instituto de Naturopatía",
        bio: "Nutricionista dietista, experto en nutrición aplicada a la salud de la piel y el cabello.",
        redes: { linkedin: "", twitter: "", web: "" },
      },
      {
        foto: "assets/ponente.svg",
        nombre: "María García González",
        cargo: "Bioquímica · Profesora de Imagen Personal",
        empresa: "",
        bio: "Graduada en Bioquímica y Ciencias Biomédicas. Profesora en asesoría de imagen personal.",
        redes: { linkedin: "", twitter: "", web: "" },
      },
      {
        foto: "assets/ponente.svg",
        nombre: "Miguel Ángel de Isidro",
        cargo: "Medicina ortomolecular y MTC",
        empresa: "",
        bio: "Especialista en medicina ortomolecular y medicina tradicional china.",
        redes: { linkedin: "", twitter: "", web: "" },
      },
      {
        foto: "assets/ponente-david.jpg",
        nombre: "David Martínez",
        cargo: "Director Técnico de Centros Capilares",
        empresa: "Jaldún",
        bio: "Director Técnico de los Centros Capilares Jaldún.",
        redes: { linkedin: "", twitter: "", web: "" },
      },
      {
        foto: "assets/ponente-belen.jpg",
        nombre: "María Belén Rozas",
        cargo: "Técnica Capilar",
        empresa: "Jaldún · Málaga",
        bio: "Técnica capilar de Jaldún en Málaga.",
        redes: { linkedin: "", twitter: "", web: "" },
      },
    ],
  },

  /* ---------------------------------------------------------------------
     7. INFORMACIÓN DEL EVENTO (tarjetas con iconos)
     --------------------------------------------------------------------- */
  evento: {
    titulo: "Información del evento",
    subtitulo: "Todo lo que necesitas saber.",
    datos: [
      { icono: "calendar", etiqueta: "Fecha",       valor: "Lunes 28 de Septiembre, 2026" },
      { icono: "clock",    etiqueta: "Horario",     valor: "09:30h a 19:00h" },
      { icono: "pin",      etiqueta: "Lugar",       valor: "Centro de Congresos de Elche" },
      { icono: "scissors", etiqueta: "Dirigido a",  valor: "Peluquería y estética" },
      { icono: "food",     etiqueta: "Incluye",     valor: "Comida" },
      { icono: "award",    etiqueta: "Certificado", valor: "De asistencia" },
      { icono: "ticket",   etiqueta: "Plazas",      valor: "Limitadas" },
      { icono: "euro",     etiqueta: "Precio",      valor: "Consúltalo al reservar tu plaza", enlace: { texto: "Consulta las condiciones de acceso", href: "#condiciones" } },
    ],
  },

  /* ---------------------------------------------------------------------
     8. BENEFICIOS
     --------------------------------------------------------------------- */
  beneficios: {
    titulo: "Lo que te llevas",
    subtitulo: "Una formación que marca la diferencia en tu centro.",
    lista: [
      { icono: "stethoscope", titulo: "Especialistas de referencia", texto: "Aprende de médicos, nutricionistas y técnicos capilares del sector." },
      { icono: "search",      titulo: "Detección de patologías",     texto: "Reconoce las principales patologías del cuero cabelludo y el cabello." },
      { icono: "heart",       titulo: "Colabora en el tratamiento",  texto: "Sabrás cuándo derivar al médico y cómo apoyar desde tu centro." },
      { icono: "award",       titulo: "Certificado de asistencia",   texto: "Acredita tu formación al finalizar la jornada." },
      { icono: "food",        titulo: "Comida incluida",             texto: "La jornada incluye la comida para todos los asistentes." },
      { icono: "growth",      titulo: "Haz crecer tu centro",        texto: "Diferénciate ofreciendo un servicio de salud capilar de valor." },
    ],
  },

  /* ---------------------------------------------------------------------
     8b. CONDICIONES DE ACCESO (precios / matrícula)
     --------------------------------------------------------------------- */
  condiciones: {
    etiqueta: "Inversión y matrícula",
    titulo: "Condiciones de acceso al curso",
    subtitulo: "Formación profesional en fitoterapia capilar Jaldún.",
    opciones: [
      {
        etiqueta: "Opción 1 · Clientes Jaldún",
        titulo: "Inversión en fitoterapia Jaldún",
        precio: "1.000 €",
        descripcion: "La inversión realizada en productos de fitoterapia Jaldún se bonifica íntegramente con la formación, permitiendo acceder al curso sin coste adicional de matrícula.",
        destacado: "Ventaja exclusiva: los Centros Capilares Jaldún disfrutan de condiciones especiales de acceso y colaboración.",
        featured: true,
      },
      {
        etiqueta: "Opción 2 · No clientes",
        titulo: "Pago de asistencia",
        precio: "200 €",
        descripcion: "Los profesionales que aún no son clientes Jaldún pueden acceder al curso mediante un pago directo de 200 €.",
        destacado: "Importe bonificable: podrá descontarse como pago parcial de un pedido realizado tras la formación. Si no se realiza ningún pedido, se considerará como pago por la asistencia al curso.",
      },
    ],
    nota: "Consultar condiciones específicas con el equipo Jaldún.",
  },

  /* ---------------------------------------------------------------------
     9. FAQ (preguntas frecuentes — desplegables)
     --------------------------------------------------------------------- */
  faq: {
    titulo: "Preguntas frecuentes",
    subtitulo: "Resolvemos tus dudas antes de reservar.",
    preguntas: [
      {
        pregunta: "¿A quién está dirigida esta formación?",
        respuesta: "A profesionales de la peluquería, la estética y la asesoría de imagen personal que quieran especializarse en salud capilar. No es necesario tener formación médica previa.",
      },
      {
        pregunta: "¿Necesito conocimientos médicos previos?",
        respuesta: "No. La formación está planteada para profesionales del sector de la imagen personal. Aprenderás a detectar señales y a saber cuándo derivar al médico.",
      },
      {
        pregunta: "¿Dónde y cuándo se celebra?",
        respuesta: "El lunes 28 de septiembre de 2026, de 09:30 a 19:00 h, en el Centro de Congresos de Elche.",
      },
      {
        pregunta: "¿Qué incluye la inscripción?",
        respuesta: "La formación completa, la comida y un certificado de asistencia.",
      },
      {
        pregunta: "¿Recibiré un certificado?",
        respuesta: "Sí, al finalizar la jornada recibirás un certificado de asistencia.",
      },
      {
        pregunta: "¿Las plazas son limitadas?",
        respuesta: "Sí, el aforo es limitado. Te recomendamos reservar tu plaza cuanto antes para asegurar tu sitio.",
      },
    ],
  },

  /* ---------------------------------------------------------------------
     10. FORMULARIO
     --------------------------------------------------------------------- */
  formulario: {
    etiqueta: "Inscripción",                 // etiqueta pequeña sobre el título
    titulo: "Reserva tu plaza",
    subtitulo: "Completa el formulario y aseguramos tu sitio. Plazas limitadas.",
    badge: "Plazas limitadas",               // pastilla lavanda dentro de la tarjeta
    // Lista de beneficios (con check) — añade o quita los que quieras
    beneficios: [
      "Formación completa con médicos y especialistas del sector",
      "Comida incluida durante la jornada",
      "Certificado de asistencia",
    ],
    etiquetaForm: "Formulario de inscripción", // etiqueta justo antes del formulario

    // --- FORMULARIO EMBEBIDO (iframe) ---
    // Es el mismo formulario que usa eventos.jaldun.com (sistema GoHighLevel).
    // Para usar OTRO formulario distinto en el futuro, solo tienes que cambiar
    // el ID que aparece dos veces aquí abajo (iframeSrc y iframeId) por el de
    // tu nuevo formulario. No hace falta tocar nada más.
    iframeSrc:    "https://link.magnetixagency.com/widget/form/TRzZLDfacl4GBH5D5eJw",
    iframeId:     "TRzZLDfacl4GBH5D5eJw",
    iframeAltura: 900,   // alto en píxeles (lo ajusta solo, pero conviene aproximar)
    iframeScript: "https://link.magnetixagency.com/js/form_embed.js",
  },

  /* ---------------------------------------------------------------------
     11. FOOTER / CONTACTO
     --------------------------------------------------------------------- */
  footer: {
    descripcion: "Jaldún Salud Capilar. Formación e investigación en tricología aplicada a centros de imagen personal.",
    contacto: "Rafael Moreno",
    email: "jaldun@jaldun.com",
    telefono: "+34 601 18 92 89",
    web: "jaldun.com",
    redes: {
      instagram: "https://www.instagram.com/jaldunsaludcapilar/",
      linkedin: "",
      facebook: "",
      twitter: "",
      youtube: "",
    },
    enlaces: [
      { texto: "Política de privacidad", url: "#" },
      { texto: "Aviso legal",            url: "#" },
      { texto: "Política de cookies",    url: "#" },
    ],
    copyright: "Jaldún Salud Capilar. Todos los derechos reservados.",
  },

};
