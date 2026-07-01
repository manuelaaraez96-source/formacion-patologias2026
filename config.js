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
    etiqueta: "Formación superior",
    titulo: "Principales patologías capilares que se encuentran en los centros de imagen personal",
    // Parte del título que se resalta con el subrayado lavanda (déjalo "" si no quieres)
    resalte: "patologías capilares",
    // Parte final del título que se muestra con una tipografía más fina
    ligero: "que se encuentran en los centros de imagen personal",
    subtitulo: "Formación Superior en Tricología aplicada a centros de imagen personal. Aprende a detectar las principales patologías del cuero cabelludo y cómo colaborar en su tratamiento.",
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
    descripcion: "Una formación pensada para profesionales de peluquería y estética que quieren reconocer las patologías capilares que preocupan a sus clientes, saber derivar al médico y cómo colaborar en su tratamiento.",
    bloques: [
      {
        icono: "graduation",
        titulo: "Qué aprenderás",
        texto: "A reconocer las principales patologías del cuero cabelludo y el cabello, entender sus causas y saber cómo actuar desde tu centro de imagen personal.",
      },
      {
        icono: "users",
        titulo: "A quién va dirigido",
        texto: "Profesionales de peluquería y estética, que quieran dar un servicio de mayor valor y especializarse en salud capilar.",
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
    etiqueta: "",
    titulo: "Programa de ponencias",
    subtitulo: "Un recorrido completo por las principales patologías capilares y su abordaje desde el centro de imagen personal.",
    nota: "Nota: El programa de la formación puede estar sujeto a modificaciones en función de la marcha del curso y del criterio de los ponentes.",
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
        titulo: "Tiroides, inflamación e inmunidad",
        texto: "Cómo afecta la glándula tiroides a la piel y el cabello, y la influencia de la inflamación y el sistema inmunológico en la caída. Tratamientos médicos.",
      },
      {
        numero: "05",
        titulo: "Principales patologías y cómo actuar",
        texto: "Alopecia areata y frontal fibrosante, dermatitis seborreica aguda, psoriasis, foliculitis y alopecia androgenética. Cómo detectarlas y actuar.",
      },
      {
        numero: "06",
        titulo: "Enfermedades oncológicas y cabello",
        texto: "Cómo afectan al cabello y cómo actuar desde la peluquería.",
      },
      {
        numero: "07",
        titulo: "Menopausia, piel y cabello",
        texto: "Cambios capilares y de la piel asociados a la menopausia.",
      },
      {
        numero: "08",
        titulo: "Oxigenación del cuero cabelludo",
        texto: "Un servicio terapéutico de eficacia técnica, salud y relax dentro del salón de peluquería.",
      },
      {
        numero: "09",
        titulo: "Enfoque fitoterapéutico Jaldún",
        texto: "Tratamiento médico y fitocosmético Jaldún, principios activos y sistema integral para la alopecia y las anomalías capilares.",
      },
      {
        numero: "10",
        titulo: "Nutrición y salud capilar",
        texto: "Nutrientes esenciales para el correcto funcionamiento de la piel y el cabello, y la importancia de la suplementación.",
      },
      {
        numero: "11",
        titulo: "Pediculosis y salud capilar",
        texto: "Detección y abordaje de la pediculosis desde el centro de imagen personal.",
      },
      {
        numero: "12",
        titulo: "Crecimiento capilar",
        texto: "Cuánto crece el cabello y por qué a algunas personas les crece poco.",
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
        bio: "Autor de los libros: «El cuero cabelludo. Preguntas y respuestas» y «Tricología en la peluquería».",
        redes: { linkedin: "", twitter: "", web: "" },
      },
      {
        foto: "assets/ponente-raquel.jpg",
        nombre: "Dra. Raquel Navarro",
        cargo: "Medicina estética y capilar",
        empresa: "",
        bio: "Medicina estética y capilar.",
        redes: { linkedin: "", twitter: "", web: "" },
      },
      {
        foto: "assets/ponente-francisco.jpg",
        nombre: "Dr. Francisco Amorós",
        cargo: "Internista · Medicina capilar regenerativa",
        empresa: "",
        bio: "Internista. Medicina capilar regenerativa.",
        redes: { linkedin: "", twitter: "", web: "" },
      },
      {
        foto: "assets/ponente.svg",
        nombre: "Dra. Rosa Miralles Gil",
        cargo: "Especialista en salud mental",
        empresa: "",
        bio: "Médica especialista en salud mental.",
        redes: { linkedin: "", twitter: "", web: "" },
      },
      {
        foto: "assets/ponente.svg",
        nombre: "José Espinosa",
        cargo: "Nutricionista dietista",
        empresa: "Instituto de Naturopatía",
        bio: "Nutricionista dietista. Instituto de Naturopatía.",
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
        bio: "Director Técnico Centros Capilares Jaldún.",
        redes: { linkedin: "", twitter: "", web: "" },
      },
      {
        foto: "assets/ponente-belen.jpg",
        nombre: "María Belén Rozas",
        cargo: "Técnica Capilar",
        empresa: "Jaldún · Málaga",
        bio: "Técnica capilar Jaldún.",
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
      { icono: "ticket",   etiqueta: "Plazas",      valor: "Completa el formulario y aseguramos tu plaza." },
      { icono: "euro",     etiqueta: "Precio",      valor: "Consúltalo al reservar tu plaza", enlace: { texto: "Consulta las condiciones de acceso", href: "#condiciones" } },
    ],
  },

  /* ---------------------------------------------------------------------
     8b. CONDICIONES DE ACCESO (precios / matrícula)
     --------------------------------------------------------------------- */
  condiciones: {
    etiqueta: "Matrícula",
    titulo: "Condiciones de acceso al curso",
    subtitulo: "",
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
        destacado: "Posibilidad de importe bonificable 100%. Te informaremos al registrarte.",
      },
    ],
    nota: "Consultar condiciones específicas con el equipo Jaldún.",
  },

  /* ---------------------------------------------------------------------
     10. FORMULARIO
     --------------------------------------------------------------------- */
  formulario: {
    etiqueta: "Inscripción",                 // etiqueta pequeña sobre el título
    titulo: "Reserva tu plaza",
    subtitulo: "Completa el formulario y aseguramos tu plaza.",
    badge: "",               // pastilla lavanda dentro de la tarjeta
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
    descripcion: "Tricología aplicada a centros de imagen personal.",
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
