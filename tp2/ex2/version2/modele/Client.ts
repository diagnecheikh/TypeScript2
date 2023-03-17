export class Client {
  private _nom: string;
  private _prenom: string;
  private _ca: number;

  public constructor(nom: string, prenom: string, ca = 0) {
    this.nom = nom;
    this.prenom = prenom;
    this.ca = ca;
  }

  public set nom(nom: string) {
    if (nom.trim().length > 0) {
      this._nom = nom.trim();
    } else {
      throw new Error("Le nom ne peut être vide ! ");
    }
  }

  public set prenom(prenom: string) {
    if (prenom.trim().length > 0) {
      this._prenom = prenom.trim();
    } else {
      throw new Error("Le prénom ne peut être vide ! ");
    }
  }

  public set ca(ca: number) {
    if (ca >= 0) {
      this._ca = ca;
    } else {
      throw new Error("Le chiffre d'affaire ne peut être négatif ! ");
    }
  }

  public get nom(): string {
    return this._nom;
  }

  public get prenom(): string {
    return this._prenom;
  }

  public get ca(): number {
    return this._ca;
  }

  public ajouterCa(ca: number): void {
    if (ca >= 0) {
      this._ca += ca;
    } else {
      throw new Error("Le ca à ajouter doit être positif");
    }
  }

  public equals(c: Client): boolean {
    return (
      this._nom.toUpperCase() === c._nom.toUpperCase() &&
      this._prenom.toUpperCase() === c._prenom.toUpperCase()
    );
  }

  public toString(): string {
    return this._nom + " " + this._prenom + " (" + this._ca + ")";
  }
}
