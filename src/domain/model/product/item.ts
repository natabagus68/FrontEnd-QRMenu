import { extend } from "dayjs";
import { Entity } from "../_Entity";

export interface IITem {
  id?: string;
  name: string;
  category: string;
  stock: number;
  price: number;
  image: File;
  video?: File | null;
  desc: string;
}

export class Item extends Entity<IITem> {
  static create(props: IITem): Item {
    return new Item(props);
  }

  unmarshall() {
    return {
      id: this.id,
      name: this.name,
      category: this.category,
      stock: this.stock,
      price: this.price,
      image: this.image,
      video: this.video,
      desc: this.desc,
    };
  }

  get name(): string {
    return this._props.name;
  }
  get category(): string {
    return this._props.category;
  }
  get stock(): number {
    return this._props.stock;
  }
  get price(): number {
    return this._props.price;
  }

  get Rupiah(): string {
    if (typeof this.price !== "number") {
      return "Invalid price";
    }

    const formater = Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return formater.format(this.price);
  }

  get image(): File {
    return this._props.image;
  }
  get video(): File | null {
    return this._props.video;
  }
  get desc(): string {
    return this._props.desc;
  }
}
