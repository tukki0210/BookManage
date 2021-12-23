<template>
  <div>add</div>
</template>

<script>
import { reactive } from "vue";
import { postAPI } from "../../functions/useAPI";

export default {
  name: "BookAdd",

  setup() {
    const data = reactive({
      Book: {
        title: "React 第２版",
        price: "2500",
        thumbnailURL: 'null',
        category: "JavaScript",
      },
    });
    const postBook = async () => {
      console.log("post");
      await postAPI("books", data.Book)
        .then(console.log("OK"))
        .catch(err => {
            console.log('err')
            return err.response
        })
    };

    postBook();

    // onMounted(()=>{
    //     postBook()
    // })
    return {
      data,
      postBook,
    };
  },
};
</script>