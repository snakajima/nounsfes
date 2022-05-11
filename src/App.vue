<template>
  <Suspense>
    <router-view />
  </Suspense>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import { ethereum, getAccount, hasMetaMask } from "./utils/MetaMask";
import { useUser, useIsSignedIn } from "@/utils/utils";

export default defineComponent({
  setup() {
    const store = useStore();
    const user = useUser();

    getAccount().then((value) => {
      console.log("Eth gotAccount", value);
      store.commit("setAccount", value);
      // fetchNFTs();
    });
    if (hasMetaMask) {
      ethereum.on("accountsChanged", (accounts: string[]) => {
        console.log("accountsChanged");
        if (accounts.length == 0) {
          store.commit("setAccount", null);
        } else {
          store.commit("setAccount", accounts[0]);
          console.log("Eth accountsChanged", accounts[0]);
          // fetchNFTs();
        }
      });
    }
    const isSignedIn = computed(() => store.getters.isSignedIn);

    return {
      user,
      isSignedIn,
    };
  },
});
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Londrina+Solid&display=swap');
@import url('http://fonts.cdnfonts.com/css/pt-root-ui');
@import url('https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap');

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  @apply font-sans antialiased text-center text-gray-700;
}

#nav {
  /* padding: 30px; */
  @apply p-8;
}

#nav a {
  /* font-weight: bold;
  color: #2c3e50; */
  @apply font-bold text-gray-700;
}

#nav a.router-link-exact-active {
  /* color: #42b983; */
  @apply text-green-600;
}

a {
  @apply cursor-pointer;
}
</style>
