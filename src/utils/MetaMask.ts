import { useStore } from "vuex";

export const ethereum = (window as any).ethereum;
export const hasMetaMask =
  typeof ethereum !== "undefined" && ethereum.isMetaMask;

export const requestAccount = async () => {
  console.log(ethereum.request);
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  return accounts.length > 0 ? accounts[0] : null;
};

export const getAccount = async (): Promise<string | null> => {
  const accounts = await ethereum.request({ method: "eth_accounts" });
  return accounts.length > 0 ? accounts[0] : null;
};

// https://github.com/NoahZinsmeister/web3-react/blob/main/packages/types/src/index.ts
// per EIP-1193
export interface ProviderConnectInfo {
  readonly chainId: string
}

export interface ProviderRpcError extends Error {
  message: string
  code: number
  data?: unknown
}

export const ChainIds = {
  Mainnet: '0x1',
  RinkebyTestNet: '0x04',
  Polygon: '0x89'
};

export const startMonitoringMetamask = () => {
  const store = useStore();
  getAccount().then((value) => {
    console.log("Eth gotAccount", value);
    store.commit("setAccount", value);
  });
  if (hasMetaMask) {
    ethereum.on("accountsChanged", (accounts: string[]) => {
      console.log("accountsChanged");
      if (accounts.length == 0) {
        store.commit("setAccount", null);
      } else {
        store.commit("setAccount", accounts[0]);
        console.log("Eth accountsChanged", accounts[0]);
      }
    });
    ethereum.on("connect", ( info: ProviderConnectInfo): void => {
      console.log("*** connect", info);
      store.commit("setChainId", info.chainId);
    });
    ethereum.on("disconnect", ( info: ProviderRpcError): void => {
      console.log("*** disconnect", info);
    });
    ethereum.on("chainChanged", (chainId: string) => {
      store.commit("setChainId", chainId);
    });
  }
};


