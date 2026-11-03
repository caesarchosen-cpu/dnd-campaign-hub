(function () {
  const root = document.getElementById("character-list");
  if (!root || typeof CHARACTERS === "undefined") return;
  if (!CHARACTERS.length) {
    root.innerHTML = '<p class="empty-note">No characters yet. Add some in data/characters.js.</p>';
    return;
  }
  root.innerHTML = CHARACTERS.map((c) => {
    const badge = c.example ? '<span class="badge">Example</span>' : "";
    return `
      <article class="card">
        ${badge}
        <h2>${escapeHtml(c.name)}</h2>
        <p class="meta">${escapeHtml(c.classLevel)} · ${escapeHtml(c.race)} · ${escapeHtml(c.background)}</p>
        <div class="stat-row">
          <span class="stat-pill"><strong>AC</strong> ${escapeHtml(String(c.ac))}</span>
          <span class="stat-pill"><strong>HP</strong> ${escapeHtml(String(c.hp))}</span>
          <span class="stat-pill"><strong>Speed</strong> ${escapeHtml(c.speed)}</span>
        </div>
        ${abilityBlock(c.abilities)}
        <div class="list-block"><strong>Proficiencies</strong>${escapeHtml((c.proficiencies || []).join(", "))}</div>
        <div class="list-block"><strong>Equipment</strong>${escapeHtml((c.equipment || []).join(", "))}</div>
        <div class="list-block"><strong>Notes</strong>${escapeHtml(c.notes || "")}</div>
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
