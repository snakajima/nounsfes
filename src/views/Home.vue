<template>
<div class="max-w-lg mx-auto text-left p-2">
  <HomeJA v-if="lang==='ja'"/>
  <HomeEn v-else />
  
  <div class="max-w-lg mx-auto text-left p-2">
    <div class="space-y-2 font-pt-root font-medium">
      <p id="form"><b class="font-londrina">{{ $t('menu.form') }}:</b></p>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfcf9s3eDtJ-EHQIlrjzKKCtpkuVmiRx9DncKDQYJB1Q94ETA/viewform?embedded=true" width="480" height="480" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
  </div>
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
