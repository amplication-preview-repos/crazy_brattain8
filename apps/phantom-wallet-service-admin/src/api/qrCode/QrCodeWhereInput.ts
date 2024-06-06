import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type QrCodeWhereInput = {
  id?: StringFilter;
  url?: StringNullableFilter;
};
