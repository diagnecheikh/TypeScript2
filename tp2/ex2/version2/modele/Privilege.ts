export class Privilege {
  private _type: string;
  private _pourcentage: number;
  private _seuil: number;

  public constructor(type: string, pourcentage: number, seuil: number) {
    this.type = type;
    this.pourcentage = pourcentage;
    this.seuil = seuil;
  }

  public get type(): string {
    return this._type;
  }

  public set type(t: string) {
    if (t.trim().length > 0) {
      this._type = t.trim();
    } else {
      throw new Error("Le type ne peut être vide ! ");
    }
  }

  public get pourcentage(): number {
    return this._pourcentage;
  }

  public set pourcentage(p: number) {
    if (p >= 0 && p <= 100) {
      this._pourcentage = p;
    } else {
      throw new Error("Le pourcentage ne peut être négatif ! ");
    }
  }

  public get seuil(): number {
    return this._seuil;
  }

  public set seuil(s: number) {
    if (s >= 0) {
      this._seuil = s;
    } else {
      throw new Error("Le seuil ne peut être négatif ! ");
    }
  }

  public toString(): string {
    return `${this.type}, pourcentage : ${this.pourcentage}, seuil : ${this.seuil}`;
  }
}
