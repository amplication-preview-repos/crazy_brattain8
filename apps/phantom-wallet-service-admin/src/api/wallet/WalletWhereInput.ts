import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type WalletWhereInput = {
  id?: StringFilter;
  publicKey?: StringNullableFilter;
};
