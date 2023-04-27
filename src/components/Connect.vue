<template>
  <span class="ml-16 font-londrina font-yusei">
    <span v-if="isSignedIn">
      <button
        @click="signOut"
        class="inline-block rounded bg-green-600 px-6 py-2.5 leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg"
      >
        {{ $t("menu.signedIn") }}
      </button>
    </span>
    <span v-else>
      <span v-if="hasMetaMask">
        <span v-if="account">
          <button
            type="button"
            v-if="isBusy"
            class="inline-block rounded px-6 py-2.5 leading-tight text-gray-500 shadow-md"
            disabled
          >
            <img
              class="absolute h-3 w-8 animate-spin"
              src="@/assets/red160px.png"
            />
            <span class="ml-10">{{ $t("message.processing") }}</span>
          </button>
          <button
            v-else
            @click="signIn"
            class="inline-block rounded bg-green-600 px-6 py-2.5 leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg"
          >
            {{ $t("menu.connected") }}
          </button>
        </span>
        <span v-else>
          <button
            type="button"
            v-if="isBusy"
            class="inline-block rounded px-6 py-2.5 leading-tight text-gray-500 shadow-md"
            disabled
          >
            <img
              class="absolute h-3 w-8 animate-spin"
              src="@/assets/red160px.png"
            />
            <span class="ml-10">{{ $t("message.processing") }}</span>
          </button>
          <button
            v-else
            @click="connect"
            class="inline-block rounded bg-green-500 px-6 py-2.5 leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg"
          >
            {{ $t("menu.connect") }}
          </button>
        </span>
      </span>
      <span v-else>
        <button
          disabled
          class="inline-block rounded bg-gray-400 px-6 py-2.5 leading-tight text-white shadow-md"
        >
          {{ $t("menu.nometamask") }}
        </button>
      </span>
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";
import { requestAccount } from "@/utils/MetaMask";
import { auth } from "@/utils/firebase";
import { signInWithCustomToken } from "firebase/auth";
import { generateNonce, verifyNonce, deleteNonce } from "@/utils/functions";
//import Web3 from "web3";

export default defineComponent({
  setup() {
    const store = useStore();
    const account = computed(() => store.state.account);
    const isSignedIn = computed(() => store.getters.isSignedIn);
    const isBusy = ref("");
    const connect = async () => {
      isBusy.value = "Connecting Metamask...";
      try {
        await requestAccount(); // ethereum.on('accountsChanged') in App.vue will handle the result
      } catch (e) {
        console.log(e);
      }
      isBusy.value = "";
      console.log("*****", store.state.account);
      // signIn();
    };
    const signIn = async () => {
      const ethereum = store.state.ethereum;
      // Step 1: We get a nonce from the server
      isBusy.value = "Fetching a verification message from server...";
      const account = store.state.account;
      const result = (await generateNonce({ account })) as any;
      const nonce = result.data.nonce;
      const uuid = result.data.uuid;

      console.log("signIn: uuid/nonce", uuid, nonce);

      try {
        // Step 2: We ask the user to sign this nonce
        isBusy.value = "Waiting for you to sign a message...";
        const signature = await ethereum.request({
          method: "personal_sign",
          params: [nonce, account],
        });

        // Step 3: We ask the server to verify the signature and get custom token
        const result2 = (await verifyNonce({ signature, uuid })) as any;
        console.log(result2.data);
        const token = result2.data.token;
        console.log("signIn: token", token);
        if (token) {
          await signInWithCustomToken(auth, token);
        } else {
          alert("Failed to verifyIdenty");
        }
      } catch (e) {
        console.error(e);
        isBusy.value = "Canceling the verification...";
        try {
          await deleteNonce({ account, uuid });
        } catch (e) {
          console.error(e);
        }
      }
      isBusy.value = "";
    };
    const signOut = async () => {
      await auth.signOut();
    };
    const hasMetaMask = computed(() => {
      return store.getters.hasMetaMask;
    });

    return {
      hasMetaMask,
      account,
      isSignedIn,
      isBusy,
      connect,
      signIn,
      signOut,
    };
  },
});
</script>
