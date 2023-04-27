<template>
  <div class="mt-10 lg:flex">
    <div class="w-full lg:w-1/2">
      <img class="m-auto w-96" src="@/assets/banner.jpeg" />
    </div>
    <div class="flex w-full flex-1 flex-col px-4 pb-4 lg:w-1/2">
      <div class="mt-4 font-londrina text-4xl">
        {{ $t("notFoundMessage") }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
