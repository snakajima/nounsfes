<template>
  <div class="home">
    <div class="flex justify-center items-center space-x-8">
      <!-- <img alt="Vue logo" src="../assets/logo.png" class="logo" /> -->
      <!-- Use Tailwind CSS h-40 (=10rem=160px) instead of .logo. -->
      <img alt="Vue logo" src="../assets/logo.png" class="h-40" />
    </div>

    <h1>Nouns Art Festival</h1>
    <p>This is body</p>
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
