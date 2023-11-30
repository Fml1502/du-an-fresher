export interface User {
  id: number;
  nameUser: string;
  passWord: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export type Users = Pick<User, "id" | "nameUser" | "passWord" | "email">[];
