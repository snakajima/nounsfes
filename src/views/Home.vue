<template>
<div class="max-w-lg mx-auto text-left p-2">
  <HomeJA v-if="lang==='ja'"/>
  <HomeEn v-else />
 </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useI18n } from "vue-i18n";

import HomeJA from "./HomeJA.vue";
import HomeEn from "./HomeEn.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    HomeJA,
    HomeEn,
  },
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
