import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const WalletCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="publicKey" source="publicKey" />
      </SimpleForm>
    </Create>
  );
};
