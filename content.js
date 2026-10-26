// Pone en <html> una clase por cada cosa a ocultar; hide.css hace el resto.
// GitHub navega sin recargar (turbo/React), así que se vigila el cambio de URL.
const root = document.documentElement;
let settings = { ...PRD_DEFAULTS };

const isPullPage = () => /^\/[^/]+\/[^/]+\/pull\/\d+/.test(location.pathname);

function apply() {
  root.classList.toggle("prd-pr", settings.enabled && isPullPage());
  for (const key of Object.keys(PRD_DEFAULTS)) {
    if (key !== "enabled") root.classList.toggle(`prd-hide-${key}`, !!settings[key]);
  }
}

chrome.storage.sync.get(PRD_DEFAULTS, stored => {
  settings = stored;
  apply();
});

chrome.storage.onChanged.addListener((changes, area) => {
  if (area !== "sync") return;
  for (const [key, { newValue }] of Object.entries(changes)) settings[key] = newValue;
  apply();
});

let lastPath = location.pathname;
setInterval(() => {
  if (location.pathname !== lastPath) {
    lastPath = location.pathname;
    apply();
  }
}, 300);
