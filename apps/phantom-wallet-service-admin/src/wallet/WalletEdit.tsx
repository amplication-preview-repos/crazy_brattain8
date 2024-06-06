import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const WalletEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="publicKey" source="publicKey" />
      </SimpleForm>
    </Edit>
  );
};
