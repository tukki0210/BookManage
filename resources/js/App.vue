<template>
  <div>
    {{ data.message }}
    <HelloWorld />
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import { reactive } from "vue";
import HelloWorld from "./components/HelloWorld";

import axios from "axios";

export default {
  name: "App",
  components: {
    HelloWorld,
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