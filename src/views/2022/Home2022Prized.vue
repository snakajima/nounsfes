<template>
  <div class="max-w-lg mx-auto text-left p-2">
    <p class="text-3xl mb-2 font-londrina">Nouns Art Festival</p>
    <div class="space-y-2 mb-8 font-pt-root font-medium">
      <p>{{$t("message.description") }}</p>
      <p>{{$t("message.prized2022") }}</p>        
    </div>
    <p class="text-3xl mb-2 font-yusei">{{$t("message.grand") }}</p>    
    <iframe  class="mb-1" width="480" height="270" 
        :src="`https://www.youtube.com/embed/${top1}`" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
      <p class="text-3xl mb-2 font-yusei">{{$t("message.excellent") }}</p>    
    <iframe  class="mb-1" width="480" height="270" 
        :src="`https://www.youtube.com/embed/${top2_1}`" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
      <p class="text-3xl mb-2 font-yusei">{{$t("message.excellent") }}</p>    
    <iframe  class="mb-1" width="480" height="270" 
        :src="`https://www.youtube.com/embed/${top2_2}`" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
      <p>{{$t("message.thanks2022") }}</p>        
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Home",
  setup() {
    const store = useStore();
    const top1 = "55Usfk_vdss"; // 29 ソーラーキッチンカー(3)
    const top2_1 = "rdwKUDe59y8"; // 8 田の守り人
    const top2_2 = "MTizZE8FROc"; //  Dear My Child
    const total_eth = store.state.total_eth;
    return {
      total_eth,
      top1,
      top2_1,
      top2_2,
    };
  }
});
</script>
