import { Devise } from "../modele/Devise";
import { Portefeuille } from "../modele/Portefeuille";

let d1: Devise = new Devise("euros", 100);
let d2: Devise = new Devise("dollars", 1000);
let d3: Devise = new Devise("euros", 400);

let p = new Portefeuille();
p.ajouterDevise(d1);
p.ajouterDevise(d2);

console.log(p.toString());

p.ajouterDevise(d3);

console.log(p.toString());

try {
  d3.retirer(-5);
} catch (e) {
  if (e instanceof Error) {
    console.log(e.message);
  }
}

p.retirerDevise(d3);
try {
  p.retirerDevise(d3);
} catch (e) {
  if (e instanceof Error) {
    console.log(e.message);
  }
}

try {
  let d4 = new Devise("Yens", 300);
  p.retirerDevise(d4);
} catch (e) {
  if (e instanceof Error) {
    console.log(e.message);
  }
}
