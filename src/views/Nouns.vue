<template>
  <div class="max-w-lg mx-auto text-left p-2">
    <p class="text-3xl mb-2 font-londrina">Nouns</p>
    <div v-if="lang === 'en'">
      <div class="space-y-2 mb-8 font-pt-root font-medium">
        <p>In order to make <span class="font-londrina">NounsFes</span> more attractive, we raised some money by selling
          <a href="https://opensea.io/collection/named-noun" class="underline font-londrina">Named Noun NFTs</a>
          to supporters. </p>
        <p>Thanks to all the supporters, we were able to raise <b class="font-londrina">{{raised_eth}}ETH</b> so far.
        Thank you very much!
        </p>
      </div>
    </div>
    <div v-else>
      <div class="space-y-2 mb-8 font-pt-root font-medium">
        <p><span class="font-londrina">Nouns Art Festival</span>をより魅力的なものにするために、
          <a href="https://opensea.io/collection/named-noun" class="underline font-londrina">Named Noun</a>
          というNFTコレクションを、サポーターに販売するという形のクラウドファンディングを行いました。</p>
        <p>おかげさまで、現時点で、<b class="font-londrina">{{raised_eth}}ETH</b> が集まっています。ありがとうございます！
        </p>
      </div>
    </div>
    <img class="mb-4" src="@/assets/named_nouns.png" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import Web3 from "web3";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const greeterAbi = require("../abis/Greeter.json");
const greeterAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

export default defineComponent({
  name: "HomePage",
  setup() {
    const web3 = new Web3('http://localhost:8545');

    const store = useStore();
    const raised_eth = store.state.raised_eth;
    console.log(store.state);
    console.log(raised_eth);
    const i18n = useI18n();
    const lang = computed(() => {
      return i18n.locale.value;
    });
    
    return {
      lang,
      raised_eth,
    };
  }
});
</script>

<style>
/* .logo {
  height: 150px;
} */
</style>
