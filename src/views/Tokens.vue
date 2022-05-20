<template>
  <div class="max-w-lg mx-auto text-left p-2">
    <p class="text-3xl mb-2 font-londrina">Named Noun</p>

    <p>{{ bar }}</p>

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
import { ethers } from "ethers";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const namedNounAbi = require("../abis/NamedNoun.json");
const namedNounAddress = "0x2953399124F0cBB46d2CbACD8A89cF0599974963";
const itemId0 = ethers.BigNumber.from("35416128211843416333493280670751952307736614476901985064732031611086890336257");
const itemId1 = ethers.BigNumber.from("35416128211843416333493280670751952307736614476901985064732031612186401964033");
const delta = itemId1.sub(itemId0);
const itemCount = 69;
const itemIds = [...Array(itemCount).keys()].map((value) => { return itemId0.add(ethers.BigNumber.from(delta.mul(value))); });
console.log(itemIds);

export default defineComponent({
  name: "HomePage",
  setup() {
    const store = useStore();
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const namedNoun = new ethers.Contract(namedNounAddress, namedNounAbi, provider);

    const raised_eth = store.state.raised_eth;
    console.log(store.state);
    console.log(raised_eth);
    const i18n = useI18n();
    const lang = computed(() => {
      return i18n.locale.value;
    });
    const bar = computed(() => {
      const account = store.state.account;
      if (!account) {
        return "please connect";
      }
      const fetchInfo = async () => {
        console.log("delta", delta);
        const accounts = [...Array(itemCount).keys()].map(() => {return account;});
        console.log(await namedNoun.functions.balanceOfBatch(accounts, itemIds));
      };
      console.log("**** computed", account);
      fetchInfo();
      return account;
    });
    
    return {
      bar,
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
