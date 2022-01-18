<template>
  <v-app>
    <v-container>
      <v-row no-gutters>
        <v-router>
          <v-col
            v-for="Book in data.BookList"
            v-bind:key="Book.book_id"
            cols="auto"
          >
            <BookView v-bind:book="Book" />
          </v-col>
        </v-router>
      </v-row>
    </v-container>
  </v-app>
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
      data.BookList = result;
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
/* .container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
} */
li {
  list-style: none;
}

.v-application__wrap {
  min-height: 0vh !important;
}
</style>
