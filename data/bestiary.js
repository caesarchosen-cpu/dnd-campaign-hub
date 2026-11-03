/**
 * Bestiary entries (SRD 5.1 stats used for examples).
 *
 * HOW TO ADD A MONSTER:
 * 1. Copy one object below and paste a new entry into BESTIARY.
 * 2. Fill name, sizeType, ac, hp, speed, abilities, cr, traits (optional array),
 *    and actions (array of { name, text }).
 * 3. Save and refresh the Bestiary page.
 *
 * Source note: Goblin, Wolf, and Owlbear stats below match the D&D 5e SRD 5.1.
 */
const BESTIARY = [
  {
    name: "Goblin",
    sizeType: "Small humanoid (goblinoid), neutral evil",
    ac: "15 (leather armor, shield)",
    hp: "7 (2d6)",
    speed: "30 ft.",
    abilities: { str: 8, dex: 14, con: 10, int: 10, wis: 8, cha: 8 },
    cr: "1/4 (50 XP)",
    traits: [
      "Nimble Escape. The goblin can take the Disengage or Hide action as a bonus action on each of its turns.",
    ],
    actions: [
      { name: "Scimitar", text: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage." },
      { name: "Shortbow", text: "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage." },
    ],
  },
  {
    name: "Wolf",
    sizeType: "Medium beast, unaligned",
    ac: "13 (natural armor)",
    hp: "11 (2d8 + 2)",
    speed: "40 ft.",
    abilities: { str: 12, dex: 15, con: 12, int: 3, wis: 12, cha: 6 },
    cr: "1/4 (50 XP)",
    traits: [
      "Keen Hearing and Smell. The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
      "Pack Tactics. The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated.",
    ],
    actions: [
      { name: "Bite", text: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone." },
    ],
  },
  {
    name: "Owlbear",
    sizeType: "Large monstrosity, unaligned",
    ac: "13 (natural armor)",
    hp: "59 (7d10 + 21)",
    speed: "40 ft.",
    abilities: { str: 20, dex: 12, con: 17, int: 3, wis: 12, cha: 7 },
    cr: "3 (700 XP)",
    traits: [
      "Keen Sight and Smell. The owlbear has advantage on Wisdom (Perception) checks that rely on sight or smell.",
    ],
    actions: [
      { name: "Multiattack", text: "The owlbear makes two attacks: one with its beak and one with its claws." },
      { name: "Beak", text: "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 10 (1d10 + 5) piercing damage." },
      { name: "Claws", text: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) slashing damage." },
    ],
  },
];
