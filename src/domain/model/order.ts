import { Entity } from "./_Entity";

export interface IOrder {
  id?: string;
  notification: number;
  table: string;
  date: string;
  total: number;
  status: string;
}

export class Order extends Entity<IOrder> {
  static create(props: IOrder): Order {
    return new Order(props);
  }

  unmarshall() {
    return {
      id: this.id,
      notification: this.notification,
      table: this.table,
      date: this.date,
      total: this.total,
      status: this.status,
    };
  }
  get notification(): number {
    return this._props.notification;
  }
  get table(): string {
    return this._props.table;
  }
  get date(): string {
    return this._props.date;
  }
  get total(): number {
    return this._props.total;
  }
  get Rupiah(): string {
    if (typeof this.total !== "number") {
      return "Invalid total";
    }

    const formater = Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return formater.format(this.total);
  }
  get status(): string {
    return this._props.status;
  }
}
