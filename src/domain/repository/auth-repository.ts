import { Auth } from "@domain/model/auth";
import { IUser, User } from "@domain/model/user";

export interface AuthRepository {
  login(porps: { email: string; password: string }): Promise<Auth>;
  register(props: User): Promise<User>;
  me(): Promise<Auth>;
}
