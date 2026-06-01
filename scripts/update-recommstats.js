const fs = require('fs');
const path = require('path');

const charPath = path.join(__dirname, '../assets/data/characters.json');
const raw = fs.readFileSync(charPath, 'utf8');
const characters = JSON.parse(raw);

const statsMapping = {
  jinhsi: [
    { label: "Crit. Rate", target: "70%" },
    { label: "Crit. DMG", target: "270%" },
    { label: "ATK", target: "2200" },
    { label: "Energy Regen", target: "115%" }
  ],
  yinlin: [
    { label: "Crit. Rate", target: "70%" },
    { label: "Crit. DMG", target: "240%" },
    { label: "ATK", target: "2000" },
    { label: "Energy Regen", target: "125%" }
  ],
  chixia: [
    { label: "Crit. Rate", target: "70%" },
    { label: "Crit. DMG", target: "240%" },
    { label: "ATK", target: "2000" },
    { label: "Energy Regen", target: "120%" }
  ],
  changli: [
    { label: "Crit. Rate", target: "70%" },
    { label: "Crit. DMG", target: "240%" },
    { label: "ATK", target: "2100" },
    { label: "Energy Regen", target: "120%" }
  ],
  shorekeeper: [
    { label: "Energy Regen", target: "250%" },
    { label: "HP", target: "30000" },
    { label: "Crit. Rate", target: "20%" },
    { label: "Healing Bonus", target: "35%" }
  ],
  jiyan: [
    { label: "Crit. Rate", target: "70%" },
    { label: "Crit. DMG", target: "240%" },
    { label: "ATK", target: "2100" },
    { label: "Energy Regen", target: "120%" }
  ],
  sanhua: [
    { label: "Crit. Rate", target: "70%" },
    { label: "Crit. DMG", target: "240%" },
    { label: "ATK", target: "2000" },
    { label: "Energy Regen", target: "130%" }
  ],
  rover_havoc: [
    { label: "Crit. Rate", target: "70%" },
    { label: "Crit. DMG", target: "240%" },
    { label: "ATK", target: "2000" },
    { label: "Energy Regen", target: "120%" }
  ]
};

characters.forEach(char => {
  if (statsMapping[char.id]) {
    char.recommStats = {
      en: statsMapping[char.id]
    };
  }
});

fs.writeFileSync(charPath, JSON.stringify(characters, null, 2), 'utf8');
console.log("Characters database recommStats successfully updated!");
