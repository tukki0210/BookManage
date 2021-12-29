<template>

    <div class="bookView">
      <iframe v-bind:src="data.largeImageUrl" alt="" />
      <div class="bookCaption">
        <h5>{{ data.title }}</h5>
        <div>{{ data.publisherName }}</div>
        <div>{{ data.itemPrice }}円</div>
      </div>
    </div>

</template>

<script>
import { reactive } from "vue";

export default {
  name: "BookView",
  props: {
    book: Object,
  },
  setup(props) {
    const data = reactive({
      title: "",
      itemPrice: "",
      publisherName: "",
      largeImageUrl: "",
    });

    // onMounted(() => {
    data.title = props.book.title;
    data.itemPrice = props.book.itemPrice;
    data.publisherName = props.book.publisherName;
    data.largeImageUrl = props.book.largeImageUrl;
    // });
    return {
      data,
    };
  },
};
</script>

<style>
iframe {
  width: 200px;
  height: 200px;
  border-style: none;
}
.bookView {
  width: 400px;
  height: 200px;
  margin: 10px;
  border: 1px solid blue;
  background-color: rgba(0, 100, 200, 0.1);
  display: flex;
  flex-direction: row;
}
.bookView:hover {
  opacity: 0.6;
}
.bookCaption {
  padding: 5px;
}
</style>
