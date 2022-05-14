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
    raised_eth: 7.0,
    total_eth: 5.0 + 7.0,
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
