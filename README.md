# pr-declutter

Extensión de Chrome/Brave que oculta las partes de los pull requests de GitHub que no usás.
Solo actúa en páginas `/owner/repo/pull/N`; desde el popup elegís qué ocultar y los cambios se aplican al instante.

## Instalación

1. Abrí `brave://extensions` (o `chrome://extensions`).
2. Activá **Modo de desarrollador**.
3. **Cargar descomprimida** → elegí esta carpeta.

Después de actualizar el código, tocá ↻ en la tarjeta de la extensión y recargá el PR.

## Cómo funciona

- `options.js`: catálogo de opciones y valores por defecto.
- `content.js`: pone una clase `prd-hide-<key>` en `<html>` por cada opción activa, y `prd-pr` en páginas de PR.
- `hide.css`: una regla por opción.

Para ocultar algo nuevo: agregá una entrada en `options.js` y su regla en `hide.css`.
Varios selectores dependen de clases internas de GitHub; si un rediseño hace reaparecer algo, hay que ajustarlos.
