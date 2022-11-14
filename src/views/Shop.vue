<template>
  <div class="max-w-lg mx-auto text-left p-2">
    <div v-if="lang === 'en'">
      <p class="text-3xl mb-2 font-londrina">Official Goods Shop</p>
      <div class="space-y-2 mb-8 font-pt-root font-medium">
        <p>Official goods are available <a href="https://suzuri.jp/nounsfes" class="underline font-londrina">here</a>.</p>
      </div>
    </div>
    <div v-else>
      <p class="text-3xl mb-2 font-yusei">公式グッズショップ</p>
      <div class="space-y-2 mb-8">
        <p>公式グッズはSUZURIの<a href="https://suzuri.jp/nounsfes" class="underline font-londrina">Official Goods Shop</a>で購入することができます。</p>
      </div>
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
