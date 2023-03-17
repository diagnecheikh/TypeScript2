import { Devise } from "./Devise";

export class Portefeuille {
  private _listeDevises: Array<Devise>;

  public constructor() {
    this._listeDevises = [];
  }

  public ajouterDevise(devise: Devise): void {
    const idx = this.rechercherDevise(devise);

    if (idx === -1) {
      this._listeDevises.push(devise);
    } else {
      this._listeDevises[idx].ajouter(devise.montant);
    }
  }

  public retirerDevise(devise: Devise): void {
    const idx = this.rechercherDevise(devise);

    if (idx === -1) {
      throw new Error(`La devise ${devise.nom} n'est pas dans le portefeuille`);
    } else {
      this._listeDevises[idx].retirer(devise.montant);
    }
  }

  private rechercherDevise(devise: Devise): number {
    let idx = -1;
    for (let i = 0; i < this._listeDevises.length; i++) {
      if (this._listeDevises[i].equals(devise)) {
        idx = i;
        break;
      }
    }
    return idx;
  }

  public toString(): string {
    let ch = "";
    for (const d of this._listeDevises) {
      ch += d.toString() + "\n";
    }
    return ch;
  }
}
