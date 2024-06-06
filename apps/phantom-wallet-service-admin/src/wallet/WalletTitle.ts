import { Wallet as TWallet } from "../api/wallet/Wallet";

export const WALLET_TITLE_FIELD = "publicKey";

export const WalletTitle = (record: TWallet): string => {
  return record.publicKey?.toString() || String(record.id);
};
