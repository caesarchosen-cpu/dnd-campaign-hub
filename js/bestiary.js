(function () {
  const root = document.getElementById("bestiary-list");
  if (!root || typeof BESTIARY === "undefined") return;
  if (!BESTIARY.length) {
    root.innerHTML = '<p class="empty-note">No monsters yet. Add some in data/bestiary.js.</p>';
    return;
  }
  root.innerHTML = BESTIARY.map((m) => {
    const traits = (m.traits || [])
      .map((t) => `<li>${escapeHtml(t)}</li>`)
      .join("");
    const actions = (m.actions || [])
      .map((a) => `<li><strong>${escapeHtml(a.name)}.</strong> ${escapeHtml(a.text)}</li>`)
      .join("");
    return `
      <article class="card">
        <h2>${escapeHtml(m.name)}</h2>
        <p class="meta"><em>${escapeHtml(m.sizeType)}</em></p>
        <div class="stat-row">
          <span class="stat-pill"><strong>AC</strong> ${escapeHtml(String(m.ac))}</span>
          <span class="stat-pill"><strong>HP</strong> ${escapeHtml(String(m.hp))}</span>
          <span class="stat-pill"><strong>Speed</strong> ${escapeHtml(m.speed)}</span>
          <span class="stat-pill"><strong>CR</strong> ${escapeHtml(m.cr)}</span>
        </div>
        ${abilityBlock(m.abilities)}
        ${traits ? `<div class="list-block"><strong>Traits</strong><ul class="actions-list">${traits}</ul></div>` : ""}
        <div class="list-block"><strong>Actions</strong><ul class="actions-list">${actions}</ul></div>
      </article>`;
  }).join("");

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
})();
