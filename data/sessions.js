/**
 * Session notes log.
 *
 * HOW TO ADD A SESSION:
 * 1. Copy the template object below into the SESSIONS array (newest first is nicest).
 * 2. Fill date (YYYY-MM-DD or any readable string), title, summary, loot (array),
 *    npcs (array), and hooks (array of plot hooks for next time).
 * 3. Save and refresh the Sessions page.
 */
const SESSIONS = [
  {
    date: "2026-10-28",
    title: "Session 1 — Road to Greenhollow (TEMPLATE)",
    summary:
      "The party met at the Crossed Mug inn, took a caravan-guard job, and drove off a goblin ambush on the Old Forest Road. One goblin escaped toward the hills. Replace this entry with your real session notes.",
    loot: ["12 gp recovered from goblin pouches", "Crude map scrap marked with a cave"],
    npcs: ["Marta Quill — caravan master", "Brother Alric — village priest of Greenhollow"],
    hooks: [
      "Follow the goblin trail to the marked cave",
      "Deliver the caravan safely and collect pay",
      "Ask Brother Alric about the 'beast in the oak grove'",
    ],
  },
];
