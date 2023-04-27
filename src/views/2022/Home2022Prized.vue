<template>
  <div class="mx-auto max-w-lg p-2 text-left">
    <p class="mb-2 font-londrina text-3xl">Nouns Art Festival</p>
    <div class="mb-8 space-y-2 font-pt-root font-medium">
      <p>{{ $t("message.description") }}</p>
      <p>{{ $t("message.prized2022") }}</p>
    </div>
    <p class="mb-2 font-yusei text-3xl">{{ $t("message.grand") }}</p>
    <iframe
      class="mb-1"
      width="480"
      height="270"
      :src="`https://www.youtube.com/embed/${top1}`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    >
    </iframe>
    <p class="mb-2 font-yusei text-3xl">{{ $t("message.excellent") }}</p>
    <iframe
      class="mb-1"
      width="480"
      height="270"
      :src="`https://www.youtube.com/embed/${top2_1}`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    >
    </iframe>
    <p class="mb-2 font-yusei text-3xl">{{ $t("message.excellent") }}</p>
    <iframe
      class="mb-1"
      width="480"
      height="270"
      :src="`https://www.youtube.com/embed/${top2_2}`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    >
    </iframe>
    <p>{{ $t("message.thanks2022") }}</p>
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
  },
});
</script>
