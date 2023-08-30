import { Entity } from "./_Entity";

export interface ITable {
  id?: string;
  tableNumber: string;
  url?: string;
}

export class Table extends Entity<ITable> {
  static create(props: ITable): Table {
    return new Table(props);
  }

  unmarshall() {
    return {
      id: this.id,
      tableNumber: this.tableNumber,
      url: this.url,
    };
  }

  get tableNumber(): string {
    return this._props.tableNumber;
  }

  get url(): string {
    return this._props.url;
  }
}
