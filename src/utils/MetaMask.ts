export const ethereum = (window as any).ethereum;
export const hasMetaMask =
  typeof ethereum !== "undefined" && ethereum.isMetaMask;

export const requestAccount = async () => {
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  return accounts.length > 0 ? accounts[0] : null;
};

export const getAccount = async (): Promise<string | null> => {
  const accounts = await ethereum.request({ method: "eth_accounts" });
  return accounts.length > 0 ? accounts[0] : null;
};
