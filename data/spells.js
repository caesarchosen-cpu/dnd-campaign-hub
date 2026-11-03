/**
 * Spell list (SRD 5.1 examples).
 *
 * HOW TO ADD A SPELL:
 * 1. Copy one object below into the SPELLS array.
 * 2. Set name, level (0 = cantrip), school, castingTime, range,
 *    components, duration, and classes (array of class names).
 * 3. Save and refresh the Spells page. Filters update automatically.
 */
const SPELLS = [
  {
    name: "Fire Bolt",
    level: 0,
    school: "Evocation",
    castingTime: "1 action",
    range: "120 feet",
    components: "V, S",
    duration: "Instantaneous",
    classes: ["Sorcerer", "Wizard"],
  },
  {
    name: "Cure Wounds",
    level: 1,
    school: "Evocation",
    castingTime: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "Instantaneous",
    classes: ["Bard", "Cleric", "Druid", "Paladin", "Ranger"],
  },
  {
    name: "Magic Missile",
    level: 1,
    school: "Evocation",
    castingTime: "1 action",
    range: "120 feet",
    components: "V, S",
    duration: "Instantaneous",
    classes: ["Sorcerer", "Wizard"],
  },
  {
    name: "Shield",
    level: 1,
    school: "Abjuration",
    castingTime: "1 reaction",
    range: "Self",
    components: "V, S",
    duration: "1 round",
    classes: ["Sorcerer", "Wizard"],
  },
  {
    name: "Misty Step",
    level: 2,
    school: "Conjuration",
    castingTime: "1 bonus action",
    range: "Self",
    components: "V",
    duration: "Instantaneous",
    classes: ["Sorcerer", "Warlock", "Wizard"],
  },
  {
    name: "Counterspell",
    level: 3,
    school: "Abjuration",
    castingTime: "1 reaction",
    range: "60 feet",
    components: "S",
    duration: "Instantaneous",
    classes: ["Sorcerer", "Warlock", "Wizard"],
  },
  {
    name: "Fireball",
    level: 3,
    school: "Evocation",
    castingTime: "1 action",
    range: "150 feet",
    components: "V, S, M (a tiny ball of bat guano and sulfur)",
    duration: "Instantaneous",
    classes: ["Sorcerer", "Wizard"],
  },
];
