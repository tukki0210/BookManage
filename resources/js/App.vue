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
import HelloWorld from "./components/HelloWorld";
import Sidebar from "./components/Pages/Sidebar";

import axios from "axios";

export default {
  name: "App",
  components: {
    HelloWorld,
    Sidebar,
  },
  setup() {
    const data = reactive({
      message: "Hello Vue!!!!!!!!",
    });
    const url = "http://127.0.0.1:8001/api/books";
    const getAPI = async () => {
      const result = await axios.get(url);
      console.log(result);
    };

    getAPI();

    return {
      data,
      getAPI,
    };
  },
};
</script>
<style scoped>
  .layout {
    display: flex;
    flex-direction:row;
    margin: 0;

  }
</style>