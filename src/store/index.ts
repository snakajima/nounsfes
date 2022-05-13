import { createStore } from "vuex";
import { User } from "firebase/auth";

interface State {
  account: undefined | null | string;
  user: User | null | undefined;
  total_eth: number;
  raised_eth: number;
}

export default createStore<State>({
  state: {
    account: undefined,
    user: undefined,
    total_eth: 12.0,
    raised_eth: 6.0,
  },
  mutations: {
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
  },
  actions: {},
  modules: {},
});
