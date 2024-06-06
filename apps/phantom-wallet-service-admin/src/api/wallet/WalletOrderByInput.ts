import { SortOrder } from "../../util/SortOrder";

export type WalletOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  publicKey?: SortOrder;
  updatedAt?: SortOrder;
};
