/**
 * Character sheets for the campaign hub.
 *
 * HOW TO ADD A CHARACTER:
 * 1. Copy one of the objects below (keep the curly braces and commas).
 * 2. Paste it as a new entry inside the CHARACTERS array.
 * 3. Fill in name, classLevel, race, background, abilities (str–cha),
 *    ac, hp, speed, proficiencies (array of strings), equipment (array),
 *    notes, and set example: false for real PCs (true marks placeholder examples).
 * 4. Save this file and refresh the Characters page.
 */
const CHARACTERS = [
  {
    name: "Elandra Voss",
    classLevel: "Wizard 3",
    race: "High Elf",
    background: "Sage",
    abilities: { str: 8, dex: 14, con: 12, int: 17, wis: 13, cha: 10 },
    ac: 12,
    hp: 17,
    speed: "30 ft.",
    proficiencies: ["Arcana", "History", "Investigation", "Perception", "Daggers", "Darts", "Slings", "Quarterstaffs", "Light Crossbows"],
    equipment: ["Spellbook", "Quarterstaff", "Component pouch", "Scholar's pack", "Ink & quill", "10 gp"],
    notes: "EXAMPLE PLACEHOLDER — replace with your party's wizard (or delete).",
    example: true,
  },
  {
    name: "Borin Ironvein",
    classLevel: "Fighter 3",
    race: "Mountain Dwarf",
    background: "Soldier",
    abilities: { str: 16, dex: 12, con: 15, int: 10, wis: 11, cha: 8 },
    ac: 18,
    hp: 28,
    speed: "25 ft.",
    proficiencies: ["Athletics", "Intimidation", "Perception", "All armor", "Shields", "Simple & martial weapons"],
    equipment: ["Chain mail", "Shield", "Battleaxe", "Handaxe ×2", "Explorer's pack", "15 gp"],
    notes: "EXAMPLE PLACEHOLDER — replace with your party's fighter (or delete).",
    example: true,
  },
];
