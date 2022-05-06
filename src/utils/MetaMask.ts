import Web3 from 'web3';

export const ethereum = (window as any).ethereum;

export const web3 = new Web3(Web3.givenProvider);

export const hasMetaMask = Web3.givenProvider.isMetaMask; 

export const requestAccount = async () => {
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  return accounts.length > 0 ? accounts[0].toLowerCase() : null;
};

export const getAccount = async (): Promise<string | null> => {
  const accounts = await web3.eth.requestAccounts();
  return accounts.length > 0 ? accounts[0].toLowerCase() : null;
};
