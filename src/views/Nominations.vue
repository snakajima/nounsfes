<template>
  <div class="max-w-lg mx-auto text-left p-2">
    <div v-if="lang === 'en'">
      <p class="text-3xl mb-2 font-londrina">Nominations</p>
      <div class="space-y-2 mb-8 font-pt-root font-medium">
      </div>
    </div>
    <div v-else>
      <p class="text-3xl mb-2 font-yusei">ノミネート作品</p>
      <div class="space-y-2 mb-8">
      </div>
    </div>
    <div> 
      <iframe v-for="key in keys" :key="key" class="mb-1" width="480" height="270" 
        :src="`https://www.youtube.com/embed/${key}`" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "HomePage",
  setup() {
    const i18n = useI18n();

    const lang = computed(() => {
      return i18n.locale.value;
    });
    const keys = [
      // "SZlKgdxwYJs", // 10 Project Telsa
      "rdwKUDe59y8", // 8 田の守り人
      // "lZf8QjD14Qc", // 1 Rescued Cat
      // "lDlpl6704gk", // 11 Short Movie History
      "jv6hKO0hsF0", // 2 そうやって君は笑う*
      // "GB9ZSmYBQLI", // 16 データという思いで
      // "r6P25ZZ1A3Q", // 18 みんなで考える地球の未来
      "OUu89Cy9FcU", // 22 追われる女*
      "B8MG06Qrxmc", // 23 found my daily life
      "CWm_rDfFo0g", // 24 Loveはいくつもあって良い(5)
      "nWByl12F91U", // 26 いきけとお弁当
      "Z0eImePeSNk", // 27 日本をサンゴ
      // "7-CnXWJjgWo", // 28 静岡市
      "55Usfk_vdss", // 29 ソーラーキッチンカー(3)
      "izoa6o9cIyY", // 30 愛あふれる日常（2)
      // "9FR2FMotO1A", // 31 Your Happiness
      // "mAzqO0R7uNU", // 32 The credit of the earth
      // "8qmPwdu75co", // 33 自然と平和な世界
      "iZX_MhsvcDo", // 36 Japan Trail
      "_vgq3J66_tA", // 38 みんなちがっていいじゃない
      "9GDBhj0hlLw", // 39* Turn Blind Eyes
      // "Y7Kj1nbzk-Y", // 41 Continue to be a challenger
      "OMyrEf269qA", // 45 Dear My Child
      "MTizZE8FROc", // 46 豊劇
      "hm1jpwf_dmY", // 47 電気を消して星を
      // "ZXtOMve1nu4", // 48 富士山麓
      // "mO4Z516_bfA", // 50 love song
      // "sBszsNR4iZI", // 51 When did you hold hands?
    ];
    
    return {
      lang,
      keys
    };
  }

});
</script>
