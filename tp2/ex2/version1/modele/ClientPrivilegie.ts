import { Client } from "./Client";

export class ClientPrivilegie extends Client {
  public static SEUIL_AVANTAGES = [1000, 3000, 10000];
  public static POURCENTAGE_AVANTAGES = [5, 15, 30];
  public static TYPE_AVANTAGES = ["Bon client", "Client exceptionnel", "V.I.C."];

  private _pourcentage: number;
  private _type: string;

  public constructor(c: Client) {
    super(c.nom, c.prenom, c.ca);
    this.setPrivilege();
  }

  public get pourcentage(): number {
    return this._pourcentage;
  }

  public get type(): string {
    return this._type;
  }

  public ajouterCa(ca: number): void {
    ca = (ca * (100 - this._pourcentage)) / 100;
    super.ajouterCa(ca);
    this.setPrivilege();
  }

  private setPrivilege(): void {
    let trouve = false;
    let i = ClientPrivilegie.SEUIL_AVANTAGES.length - 1;
    while (!trouve && i >= 0) {
      if (this.ca >= ClientPrivilegie.SEUIL_AVANTAGES[i]) {
        this._pourcentage = ClientPrivilegie.POURCENTAGE_AVANTAGES[i];
        this._type = ClientPrivilegie.TYPE_AVANTAGES[i];
        trouve = true;
      }
      i--;
    }
    if (!trouve) {
      throw new Error("Le client n'est pas un client privilégié");
    }
  }

  public toString(): string {
    return super.toString() + ` (${this._type})`;
  }
}
