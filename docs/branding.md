# Rampmaster SpA: Technical Brand Guide (v2026 Refresh)

Esta guía traduce el manual de identidad corporativa  a estándares técnicos actuales, priorizando la accesibilidad digital y la implementación en interfaces de usuario.

## 1. Sistema de Color y Accesibilidad

Se mantienen los colores originales, pero se añaden advertencias de uso para cumplir con las normas de contraste modernas.

| Token | Valor HEX | Uso Recomendado | Estado Accesibilidad (sobre Blanco) |
| --- | --- | --- | --- |
| `color-primary-black` | <br>`#0D0D0D` 

 | Texto principal y fondos oscuros. | **Pasa (AAA)** |
| `color-accent-yellow` | <br>`#FFC000` 

 | Elementos decorativos / Hover. | **Falla** (No usar en texto legible). |
| `color-accent-teal` | <br>`#2791A6` 

 | Botones y enlaces destacados. | **Falla** (Usar solo en texto grande). |
| `color-accent-green` | <br>`#78A300` 

 | Éxito o indicadores visuales. | **Falla** (No usar en texto legible). |

> 
> **Nota de Implementación:** Para cumplir con los estándares WCAG 2.1, los colores amarillo, turquesa y verde deben reservarse para elementos gráficos no textuales o fondos donde el texto superpuesto sea el **Negro Corporativo** (`#0D0D0D`).
> 
> 

## 2. Tipografía Digital

Se respeta la jerarquía del manual  utilizando fuentes optimizadas para web.

* 
**Principal (Headers/UI):** `Lato`.


* Pesos: Regular (400), Bold (700).




* 
**Auxiliar (Body/Code):** `Open Sans`.


* Pesos: Regular (400), Italic.


* Tamaño base recomendado: `11pts` (aprox. `14.5px` o `0.9rem`).





## 3. Componentes de Identidad (Logo)

El logotipo debe respetar siempre la **Zona de Seguridad** definida: el espacio libre alrededor de la marca que garantiza su correcta visualización.

* 
**Símbolo:** Representación gráfica ☑ para iconos y favicon.


* **Variantes:**
* 
**Positivo:** Logo negro sobre fondo claro.


* 
**Negativo:** Logo blanco sobre fondo oscuro o fotos.




* 
**Slogan:** "Tu plataforma para llegar al próximo nivel". Debe aparecer preferentemente en el encabezado (Header) o en la página de inicio (Hero section).



## 4. Configuración Técnica (Tailwind / CSS Vars)

Para una implementación rápida en el sitio web, utiliza estos valores:

```css
:root {
  /* Brand Colors */
  --rampmaster-black: #0d0d0d;
  --rampmaster-yellow: #ffc000;
  --rampmaster-teal: #2791a6;
  --rampmaster-green: #78a300;

  /* Typography */
  --font-primary: 'Lato', sans-serif;
  --font-auxiliary: 'Open Sans', sans-serif;
}

```
