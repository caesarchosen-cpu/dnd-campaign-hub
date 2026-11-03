# D&D 5e Campaign Hub

Rough-draft static site for a Dungeons & Dragons 5th edition campaign: home, characters, bestiary, spells (filterable), and session notes.

## Live

- Site: https://caesarchosen-cpu.github.io/dnd-campaign-hub/
- Repo: https://github.com/caesarchosen-cpu/dnd-campaign-hub

## Edit content

All campaign data lives in easy-to-edit JS files:

| File | What it holds |
|------|----------------|
| `data/characters.js` | Character sheet cards |
| `data/bestiary.js` | Monster stat blocks |
| `data/spells.js` | Spell list (powers the filters) |
| `data/sessions.js` | Session notes log |

Each file has a short comment at the top explaining how to add an entry. After you commit and push to `main`, GitHub Pages updates in about a minute.

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8080 --directory .
```

## Stack

Plain HTML, CSS, and a little vanilla JS. No frameworks, no forms, no backend. Starter monsters and spells use D&D 5e SRD 5.1 stats.
