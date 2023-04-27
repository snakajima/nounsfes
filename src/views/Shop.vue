<template>
  <div class="mx-auto max-w-lg p-2 text-left">
    <div v-if="lang === 'en'">
      <p class="mb-2 font-londrina text-3xl">Official Goods Shop</p>
      <div class="mb-8 space-y-2 font-pt-root font-medium">
        <p>
          Official goods are available
          <a href="https://suzuri.jp/nounsfes" class="font-londrina underline"
            >here</a
          >.
        </p>
      </div>
    </div>
    <div v-else>
      <p class="mb-2 font-yusei text-3xl">公式グッズショップ</p>
      <div class="mb-8 space-y-2">
        <p>
          公式グッズはSUZURIの<a
            href="https://suzuri.jp/nounsfes"
            class="font-londrina underline"
            >Official Goods Shop</a
          >で購入することができます。
        </p>
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
  },
});
</script>

<style>
/* .logo {
  height: 150px;
} */
</style>
