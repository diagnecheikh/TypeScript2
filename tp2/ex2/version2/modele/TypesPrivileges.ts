import { Privilege } from "./Privilege";

export class TypePrivileges {
  private _types: Privilege[];

  constructor() {
    this._types = [];
  }

  public get types(): Privilege[] {
    return this._types;
  }

  public addType(type: Privilege): void {
    this._types.push(type);
    this.sort();
  }

  public sort(): void {
    this._types.sort((a, b) => a.seuil - b.seuil);
  }

  public getPrivilege(ca: number): Privilege | null {
    let i = 0;
    while (i < this._types.length && this._types[i].seuil <= ca) {
      i++;
    }
    if (i === 0) {
      return null;
    }
    return this._types[i - 1];
  }
}
