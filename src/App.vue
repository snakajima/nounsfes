<template>
  <Suspense>
    <router-view />
  </Suspense>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import { useUser } from "@/utils/utils";

export default defineComponent({
  setup() {
    const store = useStore();
    const user = useUser();
    const ethereum = (window as any).ethereum;
    store.commit("setEthereum", ethereum);

    const isSignedIn = computed(() => store.getters.isSignedIn);

    return {
      user,
      isSignedIn,
    };
  },
});
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Londrina+Solid&display=swap');
@import url('https://fonts.cdnfonts.com/css/pt-root-ui');
@import url('https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap');

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  @apply font-sans antialiased text-center text-gray-700;
}

#nav {
  /* padding: 30px; */
  @apply p-8;
}

#nav a {
  /* font-weight: bold;
  color: #2c3e50; */
  @apply font-bold text-gray-700;
}

#nav a.router-link-exact-active {
  /* color: #42b983; */
  @apply text-green-600;
}

a {
  @apply cursor-pointer;
}
</style>
