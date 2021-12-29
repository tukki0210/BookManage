<template>
  <div>
    <div style="display:flex">
    <input type="text" v-model="data.keyword" />
    <button v-on:click="getRakutenAPI">送信</button>
    </div>
    <div class="container">
      <!-- isbnコードをkeyにする。indexでクリックしたコンポーネントを認識させる -->
      <BookView
        v-for="(Book, index) in data.BookList"
        v-bind:book="Book.Item"
        v-bind:key="Book.Item.isbn"
        v-on:click="postBook(index)"
      />
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
import { postAPI } from "../../functions/useAPI";
import axios from "axios";

import BookView from "../Templates/BookView";

import { applicationId } from "../../constants";

export default {
  name: "BookAdd",
  components: {
    BookView,
  },
  setup() {
    const data = reactive({
      keyword: "javascript",
      BookList: {},
    });

    const getRakutenAPI = async () => {
      const url = `https://app.rakuten.co.jp/services/api/BooksTotal/Search/20170404?format=json&keyword=${data.keyword}&booksGenreId=000&applicationId=${applicationId}`;
      const result = await axios.get(url);
      console.log(result)
      data.BookList = result.data.Items;
    };

    const postBook = async (index) => {
      const book = data.BookList[index];

      await postAPI("books", {
        // とりあえず楽天APIからの取得データを全部Laravelに飛ばす。利用するものはModelで指定できる。
        ...book.Item,
        category: data.keyword,
        stock: 1
      })
    };

    onMounted(() => {
      getRakutenAPI();
    });

    return {
      data,
      getRakutenAPI,
      postBook,
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