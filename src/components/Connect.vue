<template>
  <span class="ml-16 font-londrina font-yusei">
    <span v-if="account">
        <button>Connected</button>
    </span>
    <span v-else>
        <button @click="connect" class="rounded-xl">Connect</button>
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { hasMetaMask, requestAccount, ethereum } from "../utils/MetaMask";
//import Web3 from "web3";

export default defineComponent({
  setup() {
    const store = useStore();
    const account = computed(() => store.state.account);
    const connect = async () => {
      await requestAccount(); // ethereum.on('accountsChanged') in App.vue will handle the result
    };

    return {
      account,
      connect
    };
  },
});
</script>