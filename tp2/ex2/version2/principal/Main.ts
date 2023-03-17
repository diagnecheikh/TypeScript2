import { Client } from "../modele/Client";
import { Clientele } from "../modele/Clientele";
import { ClientPrivilegie } from "../modele/ClientPrivilegie";
import { Privilege } from "../modele/Privilege";
import { TypePrivileges } from "../modele/TypesPrivileges";
const c0 = new Client("Dupont", "Jean");
const c1 = new Client("Durand", "Marie");

const types = new TypePrivileges();
types.addType(new Privilege("Bon client", 5, 1000));
types.addType(new Privilege("Client exceptionnel", 15, 3000));
types.addType(new Privilege("V.I.C.", 30, 10000));

ClientPrivilegie.typesPrivileges = types;

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
