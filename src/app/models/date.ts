import { transaction } from "./transaction";

export interface usuario {
  transactions: transaction[];
  password: string;
  login: string;
}