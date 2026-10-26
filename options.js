// Catálogo de cosas ocultables. `key` se mapea a la clase `prd-hide-<key>` en <html>
// y a una regla en hide.css; `on` es el valor por defecto.
const PRD_OPTIONS = [
  { group: "Barra de arriba", items: [
    { key: "copilot-header", label: "Botones de Copilot y agentes", on: true },
    { key: "nav-issues", label: "Pestaña Issues", on: false },
    { key: "nav-agents", label: "Pestaña Agents", on: true },
    { key: "nav-actions", label: "Pestaña Actions", on: false },
    { key: "nav-projects", label: "Pestaña Projects", on: true },
    { key: "nav-wiki", label: "Pestaña Wiki", on: true },
    { key: "nav-security", label: "Pestaña Security and quality", on: true },
    { key: "nav-insights", label: "Pestaña Insights", on: true },
    { key: "nav-settings", label: "Pestaña Settings", on: false },
  ]},
  { group: "Panel lateral", items: [
    { key: "side-reviewers", label: "Reviewers", on: false },
    { key: "side-assignees", label: "Assignees", on: false },
    { key: "side-labels", label: "Labels", on: true },
    { key: "side-projects", label: "Projects", on: true },
    { key: "side-milestone", label: "Milestone", on: true },
    { key: "side-development", label: "Development", on: true },
    { key: "side-notifications", label: "Notifications", on: false },
    { key: "side-participants", label: "Participantes", on: true },
    { key: "side-maintainers", label: "“Maintainers are allowed to edit”", on: true },
    { key: "side-lock", label: "Lock conversation", on: true },
    { key: "side-archive", label: "Archive pull request", on: true },
    { key: "side-all", label: "Todo el panel (ancho completo)", on: false },
  ]},
  { group: "Conversación", items: [
    { key: "code-button", label: "Botón “Code” del encabezado", on: false },
    { key: "convert-draft", label: "“Still in progress? Convert to draft”", on: true },
    { key: "cli-hint", label: "“Merge with the command line”", on: true },
    { key: "reactions", label: "Reacciones (emoji)", on: false },
    { key: "guidelines", label: "Aviso de Community Guidelines", on: true },
    { key: "protip", label: "ProTip", on: true },
    { key: "footer", label: "Footer de GitHub", on: true },
  ]},
];

const PRD_DEFAULTS = Object.fromEntries(
  [["enabled", true], ...PRD_OPTIONS.flatMap(g => g.items.map(i => [i.key, i.on]))]
);
