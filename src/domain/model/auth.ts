import { User } from "./user";

export interface IAuth {
  token: string;
  user: User;
}

export class Auth {
  private props: IAuth;
  constructor(props: IAuth) {
    this.props = props;
  }

  get token(): string {
    return this.props.token;
  }

  get user(): User {
    return this.props.user;
  }
}
