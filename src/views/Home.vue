<template>
  <div class="max-w-lg mx-auto text-left">
    <div class="flex justify-center items-center space-x-8">
      <!-- <img alt="Vue logo" src="../assets/logo.png" class="logo" /> -->
      <!-- Use Tailwind CSS h-40 (=10rem=160px) instead of .logo. -->
      <!--img alt="Vue logo" src="../assets/logo.png" class="h-40" /-->
    </div>

    <p class="text-3xl mb-2">Nouns Art Festival</p>
    <div class="space-y-2">
      <p>Nouns Art Festival (NounsFes) is an online art festival with a purpose to promote a peaceful and sustainable world, founded by members of NounsDAO.</p>
      <p>We run the very first NounsFes in the form of an online art competition, for the duration of six months in the following format. </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
});
</script>

<style>
/* .logo {
  height: 150px;
} */
</style>
