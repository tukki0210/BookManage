<template>
  <div class="layout">
    <Sidebar />
    <div>
      <router-view></router-view>
    </div>
  </div>
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