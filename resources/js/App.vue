<template>
  <div class="layout">
    <Sidebar />
    <div>
      <router-view></router-view>
      {{ data.message }}
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import Sidebar from "./components/Pages/Sidebar";

import { getAPI } from "./functions/getapi";

export default {
  name: "App",
  components: {
    Sidebar,
  },
  setup() {
    const data = reactive({
      message: "Hello Vue!!!!!!!!",
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