<template>
  <v-app>
    <v-card class="my-1" width="500px" height="200px" color="grey lighten-2">
      <!-- <div class="bookView"> -->
      <v-container>
        <v-row class="ma-0" no-gutters>
          <v-col>
            <v-img
              class="mx-n2 my-auto"
              v-bind:src="data.largeImageUrl"
              height="180px"
            ></v-img>
            <!-- <iframe  alt="" /> -->
            <!-- <router-link :to='{name: "bookdetail", params: {id: 1 }}'> -->
          </v-col>
          <v-col>
            <v-card-title>{{ data.title }}</v-card-title>
            <div>{{ data.publisherName }}</div>
            <div>{{ data.itemPrice }}円</div>
          </v-col>
        </v-row>

        <!-- </router-link> -->
        <!-- </div> -->
      </v-container>
    </v-card>
  </v-app>
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
.v-application__wrap {
  min-height: 0vh !important;
}
</style>
