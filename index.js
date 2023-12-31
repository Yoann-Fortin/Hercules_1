// First Labour : Heracles vs Nemean Lion
// use your Figher class here

const Fighter = require('./src/Fighter');

const Heracles = new Fighter('Heracles', 20, 6);
const Nemean = new Fighter('Nemean', 11, 13);

// Faire une boucle
// Heracles attaque, puis Nemean attaque
// Quand l'un des deux à 0 points de vie, affiche le gagnant et le perdant
// Pour chaque tour de boucle , afficher le round et le déroulé du round

for (let round = 0; Heracles.life > 0 && Nemean.life > 0; round++) {
   console.log(`Round n° ${round}`);
   Heracles.fight(Nemean);
   console.log(`${Heracles.name} attack ${Nemean.name} - ${Nemean.name} ${Nemean.life} points life`);

   if(Nemean.life === 0) {
      break;
   }

   Nemean.fight(Heracles);
   console.log(`${Nemean.name} attack ${Heracles.name} - ${Heracles.name} ${Heracles.life} points life`);
}

if (Heracles.life > Nemean.life) {
   console.log(`${Nemean.name} is dead`);
   console.log(`${Heracles.name} wins (${Heracles.life})`);
} else {
   console.log(`${Heracles.name} is dead`);
   console.log(`${Nemean.name} wins (${Nemean.life})`);
}