import { createStore } from "vuex";
import { User } from "firebase/auth";
import { ethers } from "ethers";
import { ethereum } from "../utils/MetaMask";

interface State {
  chainId: string | null;
  account: undefined | null | string;
  user: User | null | undefined;
  total_eth: number;
  raised_eth: number;
}

export default createStore<State>({
  state: {
    chainId: null,
    account: undefined,
    user: undefined,
    raised_eth: 8.1,
    total_eth: 5.0 + 8.1,
  },
  mutations: {
    setChainId(state: State, chainId: string | null) {
      state.chainId = chainId;
    },
    setUser(state: State, user: User | null) {
      state.user = user;
    },
    setAccount(state: State, account) {
      state.account = account;
    },
  },
  getters: {
    isSignedIn: (state: State) => {
      return state.user !== null && state.user !== undefined;
    },
    displayAccount: (state: State) => {
      const account = state.account; 
      if (!account) {
        return "";
      }
      return account.substring(0,6) + "..." + account.substring(38);
    },
  },
  actions: {},
  modules: {},
});
