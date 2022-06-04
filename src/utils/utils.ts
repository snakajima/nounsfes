import { computed } from "vue";
import store from "../store";

export const useUser = () => {
  const user = computed(() => store.state.user);
  return user;
};
export const useIsSignedIn = () => {
  const isSignedIn = computed(() => store.getters.isSignedIn);
  return isSignedIn;
};
