# Landing del Curso — Jaldún

Página de aterrizaje (landing) moderna y optimizada para conseguir registros al curso.
Hecha con HTML, CSS y JavaScript puro: **sin instalaciones ni programas raros**.

---

## 🚀 Cómo ver la página

Tienes dos formas:

1. **La más fácil:** haz doble clic en `index.html` y se abrirá en tu navegador.
2. **Recomendada** (para que todo funcione 100%): abre la carpeta con un servidor local.
   Si tienes Python instalado, abre la Terminal en esta carpeta y escribe:

   ```bash
   python3 -m http.server 8000
   ```

   Luego entra en tu navegador a: http://localhost:8000

---

## ✏️ Cómo cambiar el contenido

**Todo el contenido se edita en un único archivo: `config.js`**

Ábrelo con cualquier editor de texto (incluso el Bloc de notas o TextEdit) y cambia
los textos que están entre comillas. Verás que está todo organizado por secciones:

| Sección             | Qué cambia                                  |
|---------------------|---------------------------------------------|
| `marca`             | Nombre y logo                               |
| `seo`               | Título y descripción para Google/redes      |
| `hero`              | Título, fecha, hora, botón, imagen principal|
| `sobreCurso`        | Explicación del curso                       |
| `temario`           | Lista de temas (añade o quita los que quieras)|
| `ponentes`          | Los ponentes y sus datos                    |
| `evento`            | Fecha, precio, lugar, plazas...             |
| `beneficios`        | Lo que se llevan los asistentes             |
| `faq`               | Preguntas frecuentes                        |
| `formulario`        | Textos del formulario                       |
| `footer`            | Contacto, redes y enlaces legales           |

### Ejemplo: añadir un tema nuevo al temario

Busca la sección `temario` y copia uno de los bloques. Solo cambia los textos:

```js
{
  numero: "07",
  titulo: "Mi nuevo tema",
  texto: "Descripción del nuevo tema.",
},
```

> ⚠️ Importante: respeta las comas y las comillas. Si algo deja de verse,
> casi siempre es por una coma o comilla que falta.

---

## 🖼️ Cómo cambiar las imágenes

Las imágenes están en la carpeta `assets/`. Ahora hay marcadores de ejemplo (`.svg`).
Para poner las tuyas:

1. Guarda tu imagen en la carpeta `assets/` (por ejemplo `hero.jpg`).
2. En `config.js`, cambia la ruta. Ejemplo:
   - `imagen: "assets/hero.svg"`  →  `imagen: "assets/hero.jpg"`

Imágenes recomendadas:
- **Hero** (banner principal): horizontal, mínimo 1200px de ancho.
- **Ponentes**: cuadradas (misma altura y anchura).
- **og-image** (al compartir el enlace): 1200 x 630 px.

---

## 📨 El formulario de inscripción

La landing usa **el mismo formulario que `eventos.jaldun.com`**: un formulario
embebido (iframe) de vuestro sistema **GoHighLevel** (gestionado por Magnetix).
Las inscripciones llegan directamente a vuestra cuenta, igual que las de la otra web.

> ⚠️ **Importante:** ese formulario se llama internamente *"Jaldún Entrenamiento
> Gratuito"* (es el del webinar del 15 de junio). Si quieres que las inscripciones
> de esta formación de patologías lleguen **separadas**, crea un formulario nuevo en
> GoHighLevel y cambia su identificador en `config.js`.

### Cómo cambiar el formulario (poner otro distinto)

En `config.js`, dentro de la sección `formulario`, cambia el **ID** que aparece en
estas dos líneas por el de tu nuevo formulario:

```js
iframeSrc: "https://link.magnetixagency.com/widget/form/TU-NUEVO-ID",
iframeId:  "TU-NUEVO-ID",
```

El ID lo encuentras en GoHighLevel, al copiar el código de inserción ("embed") del
formulario. No hace falta tocar nada más.

---

## 📁 Estructura del proyecto

```
.
├── index.html        ← La página (no necesitas tocarla)
├── config.js         ← AQUÍ editas TODO el contenido
├── css/
│   └── styles.css    ← Diseño y colores
├── js/
│   └── main.js       ← Funcionamiento (formulario, animaciones...)
└── assets/           ← Imágenes, logo y favicon
```

---

## 🎨 Diseño, colores y tipografías

El diseño imita el de **eventos.jaldun.com**, con la tipografía del programa:
- **Tipografía:** *Montserrat* (la misma del PDF del programa), en titulares y texto.
- **Colores:** fondo cálido, tinta casi negra y acentos **lavanda**.

Para cambiar los colores, abre `css/styles.css` y arriba, en `:root`, edita por
ejemplo:

```css
--lavender-deep: hsl(246 55% 70%);   /* color de botones y acentos */
--ink:           hsl(0 0% 8%);       /* color del texto */
```

## ⏳ Cuenta atrás y título resaltado

En `config.js`, dentro de `hero`:
- `cuentaAtras: "2026-09-28T09:30:00"` → fecha/hora a la que cuenta el reloj.
- `resalte: "patologías capilares"` → la parte del título que se subraya en lavanda.

---

¿Dudas? Cualquier cambio mayor (nuevas secciones, integraciones...) se puede pedir
y ampliar sobre esta misma base.
