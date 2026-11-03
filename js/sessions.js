(function () {
  const root = document.getElementById("session-list");
  if (!root || typeof SESSIONS === "undefined") return;
  if (!SESSIONS.length) {
    root.innerHTML = '<p class="empty-note">No sessions yet. Add some in data/sessions.js.</p>';
    return;
  }
  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function list(items) {
    if (!items || !items.length) return "—";
    return "<ul class=\"actions-list\">" + items.map((i) => `<li>${escapeHtml(i)}</li>`).join("") + "</ul>";
  }
  root.innerHTML = SESSIONS.map(
    (s) => `
    <article class="card session-card">
      <span class="badge">${escapeHtml(s.date)}</span>
      <h2>${escapeHtml(s.title)}</h2>
      <div class="field"><strong>Summary</strong> ${escapeHtml(s.summary)}</div>
      <div class="field"><strong>Loot</strong> ${list(s.loot)}</div>
      <div class="field"><strong>NPCs</strong> ${list(s.npcs)}</div>
      <div class="field"><strong>Hooks</strong> ${list(s.hooks)}</div>
    </article>`
  ).join("");
})();
