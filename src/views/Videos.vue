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
      "XfF88y5acHk", // 7
      "SZlKgdxwYJs", // 10
      "pptsNJXVuBs", // 9
      "dG6LoLVMgqU", // 3
      "rdwKUDe59y8", // 8
      "lZf8QjD14Qc", // 1
      "lDlpl6704gk", // 11
      "YoDXxf9uV0s", // 6
      "xz7UaAU5ddg", // 12
      "jv6hKO0hsF0", // 2
      "zCqbdFt1Hns", // 14 (and 13)
      "njDeMEnLDxc", // 15
      "GB9ZSmYBQLI", // 16
      "gZcUmPi3srw", // 17
    ];
    
    return {
      lang,
      keys
    };
  }

});
</script>
