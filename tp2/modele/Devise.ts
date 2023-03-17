export class Devise {
  private _nom: string;
  private _montant: number;

  public constructor(nom = "Euros", montant = 0) {
    this.nom = nom;
    this.montant = montant;
  }

  public set nom(nom: string) {
    if (nom.trim().length > 0) {
      this._nom = nom.trim();
    } else {
      throw new Error("Le nom ne peut être vide ! ");
    }
  }

  public get nom(): string {
    return this._nom;
  }

  public set montant(montant: number) {
    if (montant >= 0) {
      this._montant = montant;
    } else {
      throw new Error("Le montant doit être positif ! " + montant);
    }
  }

  public get montant(): number {
    return this._montant;
  }

  public ajouter(montant: number): void {
    if (montant < 0) {
      throw new Error("Le montant à ajouter ne peut être négatif");
    }
    this._montant += montant;
  }

  public retirer(montant: number): void {
    if (montant < 0) {
      throw new Error("Le montant à retirer ne peut être négatif");
    }
    if (montant > this.montant) {
      throw new Error("Le montant à retirer est supérieur au montant du portefeuille");
    }
    this._montant -= montant;
  }

  public equals(d: Devise): boolean {
    return this._nom.toUpperCase() === d._nom.toUpperCase();
  }

  public toString(): string {
    return this._nom + " (" + this._montant + ")";
  }
}
