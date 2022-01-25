<template>
  <v-app>
    <div class="layout">
      <Sidebar />
      <v-main>
        <router-view></router-view>
      </v-main>
    </div>
  </v-app>
</template>

<script>
import { reactive } from "vue";
import Sidebar from "./components/Pages/Sidebar";

export default {
  name: "App",
  components: {
    Sidebar,
  },
  setup() {
    const data = reactive({
      message: "",
    });

    return {
      data,
    };
  },
};
</script>
<style scoped>
.layout {
  display: flex;
  flex-direction: row;
  margin: 0;
}
</style>