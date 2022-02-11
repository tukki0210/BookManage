<template>
  <!-- <div> -->
    <v-app>
      <v-card width="400px" class="mx-auto mt-5">
        <v-card-title>
          <h3 class="display-1">ログイン</h3>
        </v-card-title>
      </v-card>
      <v-card>
        <v-form>
          <v-text-field label="ユーザー名" />
          <v-text-field label="パスワード" />
          <v-card-action>
            <v-btn>ログイン</v-btn>
          </v-card-action>
        </v-form>
      </v-card>
    </v-app>
<!-- 
    <div class="container d-flex justify-content-center">
      <!-- ▼Login Form -->
      <div class="row">
        <div class="col-sm-8 pb-3">
          <div class="card" style="width: 100%">
            <div class="card-body">
              <h5 class="card-title">ログイン</h5>
              <form @submit.prevent="loginSubmit">
                <div class="row mb-3">
                  <label for="login-email" class="col-sm-3 col-form-label">
                    メールアドレス
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      v-model="data.loginForm.email"
                      id="login-email"
                      class="form-control"
                      v-bind:class="{ errorOutline: data.errors.email }"
                    />
                    <span v-show="data.errors.email" class="text-danger">
                      {{ data.errors.email }}
                    </span>
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="login-password" class="col-sm-3 col-form-label">
                    パスワード
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="password"
                      v-model="data.loginForm.password"
                      id="login-password"
                      class="form-control"
                      v-bind:class="{ errorOutline: data.errors.password }"
                    />
                    <span v-show="data.errors.password" class="text-danger">
                      {{ data.errors.password }}
                    </span>
                  </div>
                </div>
                <div class="d-flex justify-content-center">
                  <button
                    type="submit"
                    class="btn btn-info p-2 m-2 d-flex align-items-center"
                    style="width: 9rem; height: 3rem"
                  >
                    <span class="flex-grow-1">ログイン</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ▲Login Form -->
  </div> -->
</template>
<script>
import { reactive } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from 'vue-router'

export default {
  setup() {
    const store = useStore();

    const router = useRouter()

    const data = reactive({
      loginForm: {
        email: "",
        password: "",
      },
      errors: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
    });

    const loginSubmit = async () => {
      console.log('ログイン')
      console.log(data.loginForm);
      await store.dispatch("login", data.loginForm);
      console.log("ログイン完了")
      // 現在のhistoryを置換(上書き)して移動する
      router.replace({ name: "booklist" });
    };

    return {
      data,
      loginSubmit,
    };
  },
  // バリデーション
  // validMsg(form) {
  //   let validEmail =
  //     /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
  //   if (!form.name) {
  //     this.errors.name = "名前を記入してください";
  //   } else if (form.name.length > 255) {
  //     this.errors.name = "名前は255文字以内で記入してください";
  //   } else {
  //     //2度目以降に正しい入力をしたとき、表示したエラーメッセージを空白に戻す
  //     this.errors.name = "";
  //   }
  //   if (!form.email) {
  //     this.errors.email = "メールアドレスを記入してください";
  //   } else if (form.email.length > 255) {
  //     this.errors.email = "メールアドレスは255文字以内で記入してください";
  //   } else if (!validEmail.test(form.email)) {
  //     this.errors.email = "メールアドレスの形式で入力してください";
  //   } else {
  //     //2度目以降に正しい入力をしたとき、表示したエラーメッセージを空白に戻す
  //     this.errors.email = "";
  //   }
  //   if (!form.password) {
  //     this.errors.password = "パスワードを記入してください";
  //   } else if (form.password < 8) {
  //     this.errors.password = "パスワードは8文字以上で記入してください";
  //   } else {
  //     //2度目以降に正しい入力をしたとき、表示したエラーメッセージを空白に戻す
  //     this.errors.password = "";
  //   }
  //   if (!form.password_confirmation) {
  //     this.errors.password_confirmation =
  //       "パスワード（確認）の入力は必須です";
  //   } else if (form.password !== form.password_confirmation) {
  //     this.errors.password_confirmation = "パスワードが異なります";
  //   } else {
  //     //2度目以降に正しい入力をしたとき、表示したエラーメッセージを空白に戻す
  //     this.errors.password_confirmation = "";
  //   }
  // },
};
</script>
<style scoped>
.errorOutline {
  outline: 1px red solid;
}
</style>