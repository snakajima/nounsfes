<template>
  <div id="nav">
    <router-link :to="localizedUrl('/')">Top</router-link> |
    <router-link :to="localizedUrl('/about')">About</router-link>
  </div>
  <Suspense>
    <router-view />
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useUser, useIsSignedIn } from "@/utils/utils";

export default defineComponent({
  setup() {
    const user = useUser();
    const isSignedIn = useIsSignedIn();

    return {
      user,
      isSignedIn,
    };
  },
});
</script>

<style>
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
