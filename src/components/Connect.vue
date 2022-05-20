<template>
  <span class="ml-16 font-londrina font-yusei">
    <span v-if="isSignedIn">
      <button @click="signOut" class="inline-block px-6 py-2.5 bg-green-600 text-white leading-tight rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">{{ $t("menu.signedIn") }}</button>
    </span>
    <span v-else>
      <span v-if="hasMetaMask">
        <span v-if="account">
            <button @click="verifyIdentity" class="inline-block px-6 py-2.5 bg-green-600 text-white leading-tight rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">{{ $t("menu.connected") }}</button>
        </span>
        <span v-else>
            <button @click="connect" class="inline-block px-6 py-2.5 bg-green-500 text-white leading-tight rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">{{ $t("menu.connect") }}</button>
        </span>
      </span>
      <span v-else>
        <button class="inline-block px-6 py-2.5 bg-red-600 text-white leading-tight rounded shadow-md">{{ $t("menu.nometamask") }}</button>
      </span>
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";
import { hasMetaMask, requestAccount, ethereum } from "../utils/MetaMask";
import { auth } from "../utils/firebase";
import { signInWithCustomToken } from "firebase/auth";
import { generateNonce, verifyNonce, deleteNonce } from "../utils/functions";
//import Web3 from "web3";

export default defineComponent({
  setup() {
    const store = useStore();
    const account = computed(() => store.state.account);
    const isSignedIn = computed(() => store.getters.isSignedIn);
    const isBusy = ref("");
    const connect = async () => {
      await requestAccount(); // ethereum.on('accountsChanged') in App.vue will handle the result
    };
    const verifyIdentity = async () => {
      // Step 1: We get a nonce from the server
      isBusy.value = "Fetching a verification message from server...";
      const account = store.state.account;
      const result = await generateNonce({ account }) as any;
      const nonce = result.data.nonce;
      const uuid = result.data.uuid;

      console.log("verifyIdentity: uuid/nonce", uuid, nonce);

      try {
        // Step 2: We ask the user to sign this nonce
        isBusy.value = "Waiting for you to sign a message...";
        const signature = await ethereum.request({
          method: "personal_sign",
          params: [nonce, account],
        });

        // Step 3: We ask the server to verify the signature and get custom token
        const result2 = await verifyNonce({ signature, uuid }) as any;
        console.log(result2.data);
        const token = result2.data.token;
        console.log("verifyIdentity: token", token);
        if (token) {
          await signInWithCustomToken(auth, token);
        } else {
          alert("Failed to verifyIdenty");
        }
        isBusy.value = "";
      } catch (e) {
        console.error(e);
        isBusy.value = "Canceling the verification...";
        await deleteNonce({ account, uuid });
        isBusy.value = "";
      }
    };
    const signOut = async () => {
      await auth.signOut();
    };

    return {
      hasMetaMask,
      account,
      isSignedIn,
      connect,
      verifyIdentity,
      signOut
    };
  },
});
</script>