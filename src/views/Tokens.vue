<template>
  <div class="max-w-lg mx-auto text-left p-2">
    <div class="mb-8">
      <div v-if="account" class="flex">
        <div class="flex-none w-32">{{ $t("message.walletId") }}</div>
        <div class="flex-initial w-64">{{ account }}</div>
      </div>
      <div v-if="tokenGate == 'switchNetwork'">
        <div v-if="nounsCount > 0">
          <p>{{ $t("message.youHaveNouns", { nounsCount }) }}</p>
        </div>
        <p v-else>{{ $t("message.pleaseSwitchToPolygon") }}
          <a @click="switchToPolygon" class="underline">{{ $t("menu.switch") }}</a>
        </p>
      </div>
      <div v-else-if="tokenGate == 'active'">
        <div v-if="namedNounCount > 0">
          <p>{{ $t("message.youHaveNFTs", { namedNounCount }) }}</p>
        </div>
      </div>
      <div v-else>
        <p>{{ $t("message.pleaseConect") }}</p>
      </div>
    </div>

    <p class="text-3xl mb-2 font-londrina">Named Noun</p>

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
import { defineComponent, computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import { ethers } from "ethers";
import { ethereum, ChainIds, switchNetwork } from "../utils/MetaMask";

const ERC721 = {
  wabi: require("../abis/AbstractERC721.json"), // wrapped abi
  address: "0xb1b25eeb1026cb947b3f65a5cc123fc28b13eee6"
};
const OpenSeaERC1155 = {
  abi: require("../abis/OpenSeaERC1155.json"),
  address: "0x2953399124F0cBB46d2CbACD8A89cF0599974963"
};

// Because OpenSea chose to put all Polygon NFTs in a single ERC1155 contract, 
// we need to perform this hack in order to know the number of NFTs in user's wallet. 
const itemId0 = ethers.BigNumber.from("35416128211843416333493280670751952307736614476901985064732031611086890336257");
const itemId1 = ethers.BigNumber.from("35416128211843416333493280670751952307736614476901985064732031612186401964033");
const delta = itemId1.sub(itemId0);
const itemCount = 76;
const itemIds = [...Array(itemCount).keys()].map((value) => { return itemId0.add(ethers.BigNumber.from(delta.mul(value))); });

export default defineComponent({
  name: "HomePage",
  setup() {
    const store = useStore();
    const namedNounCount = ref(0);
    const nounsCount = ref(0);

    const raised_eth = store.state.raised_eth;
    const i18n = useI18n();
    const lang = computed(() => {
      return i18n.locale.value;
    });
    const tokenGate = computed(() => {
      const account = store.state.account;
      const chainId = store.state.chainId;
      const provider = new ethers.providers.Web3Provider(ethereum);
      // provider is sufficient for read-only contract, but we use signer for future enhancement
      const signer = provider.getSigner();

      console.log("** recomputing", account, chainId);
      if (!account) {
        return undefined;
      }
      if (chainId == ChainIds.Mainnet) {
        const fetchNounsToken = async() => {
          const nounsToken = new ethers.Contract(ERC721.address, ERC721.wabi.abi, signer);
          const result = await nounsToken.functions.balanceOf(account);
          console.log("******", result[0].toNumber());
          nounsCount.value = result[0].toNumber();
        };
        fetchNounsToken();
        return "switchNetwork";
      }
      if (chainId != ChainIds.Polygon) {
        return "switchNetwork";
      }
      const fetchNamedNoun = async () => {
        const namedNoun = new ethers.Contract(OpenSeaERC1155.address, OpenSeaERC1155.abi, signer);
        const accounts = itemIds.map(() => {return account;});
        try {
          const results = await namedNoun.functions.balanceOfBatch(accounts, itemIds) as Array<Array<ethers.BigNumber>>;
          const count = results[0].reduce((total, result) => {
            return total.add(result);
          }, ethers.BigNumber.from(0));
          namedNounCount.value = count.toNumber();
        } catch(e) {
          console.error("fetchInfo", e);
        }
      };
      fetchNamedNoun();
      return "active";
    });
    const switchToPolygon = async () => {
      console.log("switchToPolygon called");
      await switchNetwork(ChainIds.Polygon);
    }
    const account = computed(() => { 
      let account = store.state.account; 
      if (!account) {
        return "";
      }
      return account.substring(0,6) + "..." + account.substring(38);
    });
    
    return {
      account,
      namedNounCount,
      nounsCount,
      tokenGate,
      lang,
      raised_eth,
      switchToPolygon
    };
  }
});
</script>

<style>
/* .logo {
  height: 150px;
} */
</style>
