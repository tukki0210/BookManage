<template>
  <div class="bookView">
      <!-- 同一オリジンポリシー対策でsrcからiframeに変更 -->
    <iframe v-bind:src="data.thumbnailURL" alt="" />
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";

export default {
  name: "BookView",
  props: {
    book: Object,
  },
  setup(props) {
    const data = reactive({
      title: "",
      thumbnailURL: "",
    });

    onMounted(() => {
      data.title = props.book.title;
      data.thumbnailURL = props.book.thumbnailURL;
    });
    return {
      data,
    };
  },
};
</script>

<style>
iframe {
    width:200px;
    height:200px;
    border-style: none;
}
.bookView {
  width: 300px;
  height: 200px;
  margin: 10px;
  border: 1px solid blue;
}
</style>
