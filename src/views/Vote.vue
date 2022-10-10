<template>
  <div class="mx-auto text-left p-8 justify-center items-center">
    <p class="text-3xl mb-2 font-londrina">{{vote_event.title}}</p>      
    <div class="flex flex-row">
      <div class="max-w-xl">
        {{vote_event.description}}<br/>
        <span v-if="isVoted">
          投票ありがとうございます。結果発表までしばらくお待ち下さい。
        </span>
        <span v-else>
          ノミネーション作品に対する投票をおこないます。一人、一票好きな作品に投稿ください。投票には下記どちらかのTokenを保持していることが必要です。
        </span>
        <ol>
          <li>
            <a href="https://opensea.io/collection/named-noun" class="underline font-londrina">Named Noun</a>
          </li>
          <li>
            <a href="https://opensea.io/collection/nouns-love" class="underline font-londrina">Nouns Love</a>    
          </li>
        </ol>
        <div class="mb-8">
          <div v-if="displayAccount" class="flex">
            <div class="flex-none w-32">{{ $t("message.walletId") }}</div>
            <div class="flex-initial w-64">{{ displayAccount }}</div>
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
            <p>{{ $t("message."+tokenGate) }}</p>
            Tokenをお持ちの方は右上のConnectボタンでWalletを接続してください。
          </div>
        </div>        
      </div>
      <div class="align-right px-8">
        <button 
          @click="callVote" 
          v-if="!isVoted && (0 < namedNounCount || 0 < nounsCount )"
          class="inline-block px-6 py-2.5 bg-green-500 text-white leading-tight rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
        >
            Vote
        </button>
        <button 
          @click="callVote" 
          v-else-if="isVoted"
          disabled
          class="inline-block px-6 py-2.5 bg-gray-500 text-white leading-tight rounded shadow-md"
        >
            Voted
        </button>
        <button 
          @click="callVote" 
          v-else
          disabled
          class="inline-block px-6 py-2.5 bg-gray-500 text-white leading-tight rounded shadow-md"
        >
            Need Tokens
        </button>
      </div>
      <div>
          現在の投票総数：{{totalcount}}
      </div>
    </div>
    <div class="grid grid-cols-3 gap-2 w-screen ">
      <div v-for="option in selections" :key="option.key" class="flex-col">
            <iframe class="mb-1" 
              :src="`https://www.youtube.com/embed/${option.key}`" 
              title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>            
            <div class="grid grid-cols-2">
              <button @click="setSelected(option.id)" class="w-8 inline-block px-6 py-2.5 bg-white text-green-500 leading-tight rounded shadow-md hover:bg-green-100 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  transition duration-150 ease-in-out">
                {{isSelected(option.id) ? 1 : 0}}
              </button>
              <span>
              {{ option.count }} voted
              </span>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, defineComponent, computed, watch, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import { ethers } from "ethers";
import {
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  where,
  DocumentData,
  collection,
} from "firebase/firestore";
import { db } from "@/utils/firebase";
import { ChainIds, switchNetwork } from "../utils/MetaMask";
import {vote_event} from "@/config/project";
import {vote} from "@/utils/functions";

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
const itemCount = 79;
const itemIds = [...Array(itemCount).keys()].map((value) => { return itemId0.add(ethers.BigNumber.from(delta.mul(value))); });

export default defineComponent({
  name: "HomePage",
  setup() {
    const store = useStore();
    const namedNounCount = ref(0);
    const nounsCount = ref(0);

    const isVoted = ref(false);
    watch(
      () => store.state.user,
      async () => {
        console.log(store.state.user.uid);
        const docu = await getDoc(doc(db, `users/${store.state.user.uid}/private/votes`)); 
        if (docu.exists()) {
          console.log(docu.data());
          isVoted.value = true;
        }
      }
    );
    interface Selection {
      id : number,
      key: string,
      selected:boolean,
      count: number
    }
    const selections = ref<Selection[]>([]);
    console.log(Object.assign([],vote_event.selections));
    selections.value = Object.assign([],vote_event.selections).map((a:{id:number,key:string})=>{
      return {id:a.id, key:a.key, selected:false, count:0};
    });
    const isSelected = (i:number) => {
      const index = selections.value.findIndex(a=>a.id == i);
      return selections.value[index].selected;
    };
    const setSelected = (i:number) => {
      for (const s of selections.value) {
        s.selected = false;
      }
      const index = selections.value.findIndex(a=>a.id == i);
      selections.value[index].selected = true;
    };
    const getSelected = () => {
      return selections.value.filter((i) => i.selected);
    };
    const totalcount = computed(() => selections.value.map(c=>c.count).reduce((p,c)=>p+c));

    const updateCount = async () => {
      //const q = query(
      //  collection(db, `vote_events/${vote_event.id}/results`),
      // );
      const results = await getDocs(collection(db, `vote_events/${vote_event.id}/results`));      
      console.log(results)
      for (const doc of results.docs) {
        console.log(doc.id);
        const index = selections.value.findIndex(a=>a.id == Number(doc.id));
        const data = doc.data() as {counter:number};
        selections.value[index].count = data.counter;
      }
    };

    const callVote = async () => {
      const selected = getSelected()[0];
      console.log(selected);
      interface voteResult{ data:{result:boolean, message:string }}
      const ret:voteResult= await vote({
        voteEventId: vote_event.id,
        selectionId: selected.id,
        uid: store.state.account
      }) as voteResult;
      if(ret.data?.result){
        isVoted.value = true;
        await updateCount();
      } else {
        console.error(ret.data);
      }
    };

    onMounted(async () => {
      await   updateCount();
    });


    const raised_eth = store.state.raised_eth;
    const i18n = useI18n();
    const lang = computed(() => {
      return i18n.locale.value;
    });
    const tokenGate = computed(() => {
      const account = store.state.account;
      const chainId = store.state.chainId;
      if (!store.getters.hasMetaMask) {
        return "pleaseInstall";
      }
      const provider = new ethers.providers.Web3Provider(store.state.ethereum);
      // provider is sufficient for read-only contract, but we use signer for future enhancement
      const signer = provider.getSigner();

      console.log("** recomputing", store.getters.displayAccount || "N/A", chainId);
      if (!account) {
        return "pleaseConnect";
      }
      if (chainId == ChainIds.Mainnet) {
        const fetchNounsToken = async() => {
          const nounsToken = new ethers.Contract(ERC721.address, ERC721.wabi.abi, signer);
          const result = await nounsToken.functions.balanceOf(account);
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
    const displayAccount = computed(() => {
      return store.getters.displayAccount;
    });
    
    return {
      vote_event,
      isVoted,
      selections,
      isSelected,
      setSelected,
      getSelected,
      callVote,
      totalcount,
      displayAccount,
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
