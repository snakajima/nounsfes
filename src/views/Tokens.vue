<template>
  <div class="max-w-lg mx-auto text-left p-2">
    <p class="text-3xl mb-2 font-londrina">Named Noun</p>
    <div v-if="lang === 'en'">
      <div class="space-y-2 mb-8">
        <p>In order to make NounsFes more attractive, we raised some money by selling
          <a href="https://opensea.io/collection/named-noun" class="underline">Named Noun NFTs</a>
          to supporters. </p>
        <p>Thanks to all the supporters, we were able to raise <b class="font-londrina">4.84ETH</b> so far.
        Thank you very much!
        </p>
      </div>
    </div>
    <div v-else>
      <div class="space-y-2 mb-8">
        <p>Nouns Art Festivalをより魅力的なものにするために、
          <a href="https://opensea.io/collection/named-noun" class="underline">Named Noun</a>
          というNFTコレクションを、サポーターに販売するという形のクラウドファンディングを行いました。</p>
        <p>おかげさまで、現時点で、<b class="font-londrina">4.84ETH</b> が集まっています。ありがとうございます！
        </p>
      </div>
    </div>
    <img class="mb-4" src="@/assets/named_nouns.png" />
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
    
    return {
      lang,
    };
  }
});
</script>

<style>
/* .logo {
  height: 150px;
} */
</style>
