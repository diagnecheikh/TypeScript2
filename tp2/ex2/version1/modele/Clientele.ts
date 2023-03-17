import { Client } from "./Client";
import { ClientPrivilegie } from "./ClientPrivilegie";

export class Clientele {
  private _listeClients: Array<Client>;

  public constructor() {
    this._listeClients = [];
  }

  public ajouterClient(client: Client): void {
    const idx = this.rechercherClient(client);

    if (idx === -1) {
      this._listeClients.push(client);
    } else {
      throw new Error(`Le client ${client.toString()} est déjà dans la clientèle`);
    }
  }

  public retirerClient(client: Client): void {
    const idx = this.rechercherClient(client);

    if (idx === -1) {
      throw new Error(`Le client ${client.toString()} n'est pas dans la clientèle`);
    } else {
      this._listeClients.splice(idx, 1);
    }
  }

  private rechercherClient(client: Client): number {
    let idx = -1;
    for (let i = 0; i < this._listeClients.length; i++) {
      if (this._listeClients[i].equals(client)) {
        idx = i;
        break;
      }
    }
    return idx;
  }

  public ajouterCa(nom: string, prenom: string, ca: number): void {
    const c = new Client(nom, prenom);
    const idx = this.rechercherClient(c);
    if (idx === -1) {
      throw new Error(`Le client ${c.toString()} n'est pas dans la clientèle`);
    }

    const clientListe = this._listeClients[idx];
    clientListe.ajouterCa(ca);
    if (clientListe instanceof Client && clientListe.ca > ClientPrivilegie.SEUIL_AVANTAGES[0]) {
      this._listeClients[idx] = new ClientPrivilegie(clientListe);
    }
  }

  public toString(): string {
    let ch = "";
    for (const c of this._listeClients) {
      ch += c.toString() + "\n";
    }
    return ch;
  }
}
