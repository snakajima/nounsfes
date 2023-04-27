<template>
  <div class="layout">
    <div id="nav">
      <img class="mb-4" src="@/assets/banner.jpeg" />
      <router-link :to="localizedUrl('/')" class="font-londrina text-2xl"
        >Top</router-link
      >
      |
      <router-link :to="localizedUrl('/nft')" class="font-londrina text-2xl"
        >Token</router-link
      >
      |
      <router-link :to="localizedUrl('/videos')" class="font-londrina text-2xl"
        >Videos</router-link
      >
      |
      <router-link :to="localizedUrl('/nomi')" class="font-londrina text-2xl"
        >Nominations</router-link
      >
      |
      <!-- router-link :to="localizedUrl('/vote')" class="text-2xl font-londrina">Vote</router-link> |  -->
      <!-- router-link :to="localizedUrl('/nouns')" class="text-2xl font-londrina">Nouns</router-link> | -->
      <router-link :to="localizedUrl('/about')" class="font-londrina text-2xl"
        >About</router-link
      >
      |
      <router-link :to="localizedUrl('/shop')" class="font-londrina text-2xl"
        >Goods</router-link
      >
      <Languages class="mt-4" />
      <Connect />
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from "vue";
import { useStore } from "vuex";

import { auth } from "@/utils/firebase";
import { User } from "firebase/auth";

import { useI18nParam } from "@/i18n/utils";

import Languages from "@/components/Languages.vue";
import Connect from "@/components/Connect.vue";

interface UserData {
  user: User | null;
}

export default defineComponent({
  name: "AppLayout",
  components: {
    Languages,
    Connect,
  },
  async setup() {
    const store = useStore();
    const user = reactive<UserData>({ user: null });
    useI18nParam();

    onMounted(() => {
      auth.onAuthStateChanged((fbuser) => {
        console.log("authStateChanged:");
        if (fbuser) {
          user.user = fbuser;
          store.commit("setUser", fbuser);
        } else {
          store.commit("setUser", null);
        }
      });
    });

    return {
      user,
    };
  },
});
</script>
