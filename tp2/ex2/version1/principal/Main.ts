import { Client } from "../modele/Client";
import { Clientele } from "../modele/Clientele";
const c0 = new Client("Dupont", "Jean");
const c1 = new Client("Durand", "Marie");
const clientele = new Clientele();

clientele.ajouterClient(c0);
clientele.ajouterClient(c1);
console.log(clientele.toString());

clientele.ajouterCa("Dupont", "Jean", 500);
console.log(clientele.toString());

clientele.ajouterCa("Dupont", "Jean", 600);
console.log(clientele.toString());

clientele.ajouterCa("Durand", "Marie", 2000);
console.log(clientele.toString());

clientele.ajouterCa("Durand", "Marie", 1200);
console.log(clientele.toString());

clientele.ajouterCa("Dupont", "Jean", 11000);
console.log(clientele.toString());
