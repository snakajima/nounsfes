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
      // "gZcUmPi3srw", // 17 replaced with 23
      "r6P25ZZ1A3Q", // 18
      "G160KxnEXj0", // 19
      "OUu89Cy9FcU", // 22
      "B8MG06Qrxmc", // 23
      "CWm_rDfFo0g", // 24
      "ipeinxd3TAY", // 25
      "nWByl12F91U", // 26
      "Z0eImePeSNk", // 27
      "7-CnXWJjgWo", // 28
      "55Usfk_vdss", // 29
      "izoa6o9cIyY", // 30
      "9FR2FMotO1A", // 31
      "mAzqO0R7uNU", // 32
      "8qmPwdu75co", // 33
      // "FLY0sN1mfMs", // 34 replaced by 35
      "e-ZqfYEKklU", // 35
      "iZX_MhsvcDo", // 36
      // "e-ZqfYEKklU", // 37 same as 34
      "_vgq3J66_tA", // 38
      "9GDBhj0hlLw", // 39*
      "23jDTIJQkDs", // 40
      "Y7Kj1nbzk-Y", // 41
      "VT2k9QY4crM", // 42
      "YqIFIFxgrTU", // 43
      "OJzr_L_J5yI", // 44
      "OMyrEf269qA", // 45
      "MTizZE8FROc", // 46
      "hm1jpwf_dmY", // 47
      "ZXtOMve1nu4", // 48
      "eogK1f74WIc", // 49
      "mO4Z516_bfA", // 50
      "sBszsNR4iZI", // 51
      "IXxL4qHylBs", // 52
    ];
    
    return {
      lang,
      keys
    };
  }

});
</script>
