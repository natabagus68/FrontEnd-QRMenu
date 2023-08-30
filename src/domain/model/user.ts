import { Entity } from "./_Entity";

export interface IUser {
  id?: string;
  name: string;
  email: string;
  password: string;
}

export class User extends Entity<IUser> {
  static create(props: IUser): User {
    return new User(props);
  }

  unmarshall() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
    };
  }

  get name(): string {
    return this._props.name;
  }
  get email(): string {
    return this._props.email;
  }
  get password(): string {
    return this._props.password;
  }
}
