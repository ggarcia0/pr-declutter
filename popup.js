const list = document.getElementById("list");
const enabled = document.getElementById("enabled");

function render(settings) {
  list.replaceChildren();
  for (const { group, items } of PRD_OPTIONS) {
    const h = document.createElement("h2");
    h.textContent = group;
    list.append(h);
    for (const { key, label } of items) {
      const row = document.createElement("label");
      const box = document.createElement("input");
      box.type = "checkbox";
      box.checked = !!settings[key];
      box.addEventListener("change", () => chrome.storage.sync.set({ [key]: box.checked }));
      row.append(box, label);
      list.append(row);
    }
  }
  enabled.checked = settings.enabled;
  list.classList.toggle("off", !settings.enabled);
}

enabled.addEventListener("change", () => {
  chrome.storage.sync.set({ enabled: enabled.checked });
  list.classList.toggle("off", !enabled.checked);
});

document.getElementById("reset").addEventListener("click", () => {
  chrome.storage.sync.set(PRD_DEFAULTS, () => render(PRD_DEFAULTS));
});

chrome.storage.sync.get(PRD_DEFAULTS, render);
