(function () {
  const pages = [
    { href: "index.html", label: "Home", id: "home" },
    { href: "characters.html", label: "Characters", id: "characters" },
    { href: "bestiary.html", label: "Bestiary", id: "bestiary" },
    { href: "spells.html", label: "Spells", id: "spells" },
    { href: "sessions.html", label: "Sessions", id: "sessions" },
  ];

  function currentId() {
    const file = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    if (!file || file === "/" || file === "") return "home";
    const hit = pages.find((p) => p.href === file);
    return hit ? hit.id : "home";
  }

  window.renderNav = function (active) {
    const id = active || currentId();
    const nav = document.getElementById("site-nav");
    if (!nav) return;
    nav.innerHTML =
      '<a class="brand" href="index.html">Campaign Hub</a>' +
      pages
        .map(
          (p) =>
            `<a href="${p.href}" class="${p.id === id ? "active" : ""}">${p.label}</a>`
        )
        .join("");
  };

  window.mod = function (score) {
    const m = Math.floor((Number(score) - 10) / 2);
    return (m >= 0 ? "+" : "") + m;
  };

  window.abilityBlock = function (abilities) {
    const order = ["str", "dex", "con", "int", "wis", "cha"];
    const labels = { str: "STR", dex: "DEX", con: "CON", int: "INT", wis: "WIS", cha: "CHA" };
    return (
      '<div class="abilities">' +
      order
        .map((k) => {
          const score = abilities[k];
          return `<div class="ability"><strong>${labels[k]}</strong><span class="score">${score}</span><span class="mod">${window.mod(score)}</span></div>`;
        })
        .join("") +
      "</div>"
    );
  };
})();
