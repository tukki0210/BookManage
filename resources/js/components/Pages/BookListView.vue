<template>
  <div class="container">
  <BookView 
    v-for="Book in data.BookList"
    v-bind:book = "Book"
    v-bind:key="Book.id"
    />
    </div>
</template>

<script>
import { reactive } from "vue";
import { getAPI } from "../../functions/useAPI";

import BookView from "../Templates/BookView";

export default {
  name: "BookListView",
  components: {
    BookView,
  },
  setup() {
    const data = reactive({
      BookList: [],
    });

    const bookData = async () => {
      const result = await getAPI("books");
      console.log(result);
      data.BookList = result.data;
      console.log(data.BookList);
    };

    bookData();
    return {
      data,
      bookData,
    };
  },
};
</script>

<style>

.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
li {
  list-style: none;
}
</style>
