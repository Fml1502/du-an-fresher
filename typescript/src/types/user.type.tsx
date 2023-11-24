export interface User {
  id: number;
  userName: string;
  passWord: string;
  email: string;
}

export type Users = Pick<User, "id" | "userName" | "passWord">[];
