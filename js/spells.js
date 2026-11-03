(function () {
  const body = document.getElementById("spell-body");
  const classSel = document.getElementById("filter-class");
  const levelSel = document.getElementById("filter-level");
  const empty = document.getElementById("spell-empty");
  if (!body || typeof SPELLS === "undefined") return;

  function levelLabel(n) {
    if (Number(n) === 0) return "Cantrip";
    return String(n);
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  const classes = Array.from(
    new Set(SPELLS.flatMap((s) => s.classes || []))
  ).sort();
  classes.forEach((c) => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    classSel.appendChild(opt);
  });

  const levels = Array.from(new Set(SPELLS.map((s) => Number(s.level)))).sort(
    (a, b) => a - b
  );
  levels.forEach((lv) => {
    const opt = document.createElement("option");
    opt.value = String(lv);
    opt.textContent = levelLabel(lv);
    levelSel.appendChild(opt);
  });

  function render() {
    const cls = classSel.value;
    const lv = levelSel.value;
    let shown = 0;
    body.innerHTML = SPELLS.map((s) => {
      const matchClass = !cls || (s.classes || []).includes(cls);
      const matchLevel = lv === "" || Number(s.level) === Number(lv);
      const hide = !(matchClass && matchLevel);
      if (!hide) shown += 1;
      return `<tr class="${hide ? "hidden" : ""}" data-level="${s.level}" data-classes="${escapeHtml((s.classes || []).join(","))}">
        <td>${escapeHtml(s.name)}</td>
        <td>${escapeHtml(levelLabel(s.level))}</td>
        <td>${escapeHtml(s.school)}</td>
        <td>${escapeHtml(s.castingTime)}</td>
        <td>${escapeHtml(s.range)}</td>
        <td>${escapeHtml(s.components)}</td>
        <td>${escapeHtml(s.duration)}</td>
        <td>${escapeHtml((s.classes || []).join(", "))}</td>
      </tr>`;
    }).join("");
    empty.hidden = shown > 0;
  }

  classSel.addEventListener("change", render);
  levelSel.addEventListener("change", render);
  render();
})();
