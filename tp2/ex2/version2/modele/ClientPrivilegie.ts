import { Client } from "./Client";
import { Privilege } from "./Privilege";
import { TypePrivileges } from "./TypesPrivileges";

export class ClientPrivilegie extends Client {
  private static _typesPrivileges: TypePrivileges;

  private _privilege: Privilege;

  public constructor(c: Client) {
    super(c.nom, c.prenom, c.ca);
    const p = ClientPrivilegie._typesPrivileges.getPrivilege(this.ca);
    if (p == null) {
      throw new Error(`Le client ${c.toString()} n'est pas un client privilégié`);
    } else {
      this._privilege = p;
    }
  }

  public static get typesPrivileges(): TypePrivileges {
    return ClientPrivilegie._typesPrivileges;
  }

  public static set typesPrivileges(tp: TypePrivileges) {
    ClientPrivilegie._typesPrivileges = tp;
  }

  public ajouterCa(ca: number): void {
    ca = (ca * (100 - this._privilege.pourcentage)) / 100;
    super.ajouterCa(ca);
    this._privilege = ClientPrivilegie._typesPrivileges.getPrivilege(this.ca)!;
  }

  public toString(): string {
    return super.toString() + ` (${this._privilege.type})`;
  }
}
