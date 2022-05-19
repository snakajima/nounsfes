<template>
  <span class="ml-16 font-londrina font-yusei">
    <span v-if="hasMetaMask">
      <span v-if="account">
          <button class="inline-block px-6 py-2.5 bg-green-700 text-white leading-tight rounded shadow-md">{{ $t("menu.connected") }}</button>
      </span>
      <span v-else>
          <button @click="connect" class="inline-block px-6 py-2.5 bg-green-500 text-white leading-tight rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">{{ $t("menu.connect") }}</button>
      </span>
    </span>
    <span v-else>
      <button class="inline-block px-6 py-2.5 bg-red-600 text-white leading-tight rounded shadow-md">{{ $t("menu.nometamask") }}</button>
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
      hasMetaMask,
      account,
      connect
    };
  },
});
</script>