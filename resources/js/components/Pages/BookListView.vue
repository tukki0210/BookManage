<template>
  <div class="container">
    <BookView
      v-for="Book in data.BookList"
      v-bind:key="Book.book_id"
      v-bind:book="Book"
    />
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import { getAPI } from "../../functions/useAPI";
import { useStore } from "vuex";

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

    const store = useStore();

    const userToken = store.state.user.token;
    console.log(userToken)

    const bookData = async () => {
      const result = await getAPI("books", userToken);
      console.log(result);
      data.BookList = result;
      console.log(data.BookList);
    };

    bookData();

    return {
      data,
      userToken,
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
