import { Entity } from "../_Entity";

export interface ICategory {
  id?: string;
  name: string;
}

export class Category extends Entity<ICategory> {
  static create(props: ICategory): Category {
    return new Category(props);
  }

  unmarshall() {
    return {
      id: this.id,
      name: this.name,
    };
  }

  get name(): string {
    return this._props.name;
  }
}
