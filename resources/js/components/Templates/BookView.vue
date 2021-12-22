<template>
  <div class="bookView">{{data.title}}</div>
</template>

<script>
import { reactive, onMounted } from "vue";

export default {
  name: "BookView",
  props:{
      book:Object
  },
  setup(props) {
    const data = reactive({
      title:"",
    });

    onMounted(()=>{
        data.title = props.book.title
    })
    return {
      data,
    };
  },
};
</script>

<style>
.bookView {
  border: 1px black solid;
  width: 200px;
  height: 200px;
}

</style>
