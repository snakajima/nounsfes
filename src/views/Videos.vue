<template>
  <div class="max-w-lg mx-auto text-left p-2">
    <div v-if="lang === 'en'">
      <p class="text-3xl mb-2 font-londrina">Submissions</p>
      <div class="space-y-2 mb-8 font-pt-root font-medium">
      </div>
    </div>
    <div v-else>
      <p class="text-3xl mb-2 font-yusei">応募作品</p>
      <div class="space-y-2 mb-8">
      </div>
    </div>
    <div> 
      <iframe v-for="key in keys" :key="key" class="mb-1" width="320" height="180" 
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
      "XfF88y5acHk",
      "SZlKgdxwYJs",
      "pptsNJXVuBs",
      "dG6LoLVMgqU",
      "rdwKUDe59y8",
      "lZf8QjD14Qc",
      "lDlpl6704gk",
      "YoDXxf9uV0s",
      "xz7UaAU5ddg",
      "jv6hKO0hsF0",
    ];
    
    return {
      lang,
      keys
    };
  }

});
</script>
