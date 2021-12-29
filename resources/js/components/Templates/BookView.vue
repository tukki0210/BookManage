<template>
  <div class="bookView">
    <iframe v-bind:src="data.largeImageUrl" alt="" />
    <!-- <router-link :to='{name: "bookdetail", params: {id: 1 }}'> -->
      <div class="bookCaption">
        <h5>{{ data.title }}</h5>
        <div>{{ data.publisherName }}</div>
        <div>{{ data.itemPrice }}円</div>
      </div>
    <!-- </router-link> -->
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
      book_id: 1,
      title: "",
      itemPrice: "",
      publisherName: "",
      largeImageUrl: "",
    });

    onMounted(() => {
      data.book_id = props.book.book_id;
      data.title = props.book.title;
      data.itemPrice = props.book.itemPrice;
      data.publisherName = props.book.publisherName;
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
