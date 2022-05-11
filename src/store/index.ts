import { createStore } from "vuex";
import { User } from "firebase/auth";

interface State {
  account: undefined | null | string;
  user: User | null | undefined;
}

export default createStore<State>({
  state: {
    account: undefined,
    user: undefined,
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
