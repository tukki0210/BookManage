<template>
  <div class="bookView">

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
      publisherName:"",
      largeImageUrl: "",
    });

    onMounted(() => {
      data.title = props.book.title;
      data.itemPrice = props.book.itemPrice
      data.publisherName = props.book.publisherName
      data.largeImageUrl = props.book.largeImageUrl;
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
  width: 400px;
  height: 200px;
  margin: 10px;
  border: 1px solid blue;
  display: flex;
  flex-direction: row;
}
.bookCaption {
    padding: 5px;
}
</style>
