/* Fighter class definition */

const MIN_HIT = 1;
const MAX_LIFE = 100;

class Fighter {
   constructor(name, strength, dexterity) {
      this.name = name;
      this.strength = strength;
      this.dexterity = dexterity;
      this.life = MAX_LIFE;
   }

   fight (defender) {
      // Nommer l'attaque // Done
      // Définir la valeur de l'attaque
      // => Force de l'attaquant compris entre 1 et sa strength  // Done
      // Minimiser la valeur de l'attaque par rapport aux points de dexterité du défenseur -> La valeur de l'attaque ne peut pas être négative // Done
      // Retirer le nombre de points de vie par rapport à la nouvelle valeur obtenue -> La valeur des points de vie ne peut pas être négative // Done
      
      const hit = Math.floor(Math.random() * (this.strength - MIN_HIT) + MIN_HIT);

      const hitValue = hit - defender.dexterity < 0 ? 0 : hit - defender.dexterity;

      return (
         this.showAttack(defender),
         defender.life = defender.life - hitValue <=  0 ? 0 : defender.life - hitValue
      )
   }

   isAlive() {
      return this.life > 0;
   }

   showAttack(defender) {
      return console.log(`${this.name} attack ${defender.name} - ${defender.name} ${defender.life} points life`);
   }
};

module.exports = Fighter;