<template>
  <div>
    <div class="container d-flex justify-content-center">
      <!-- ▼tabの数字によってログインとRegisterの画面を切り替える -->
      <!-- ▼Register Form -->
      <div class="card" style="width: 80%">
        <div class="card-body">
          <h5 class="card-title">新規ユーザー登録</h5>
          <form @submit.prevent="registerSubmit">
            <div class="row mb-3">
              <label for="username" class="col-sm-3 col-form-label">
                名前
                <span class="text-light bg-danger px-1 small">必須</span>
              </label>
              <div class="col-sm-9">
                <input
                  type="text"
                  id="username"
                  v-model="data.registerForm.name"
                  class="form-control"
                  v-bind:class="{ errorOutline: data.errors.name }"
                />
                <span v-show="data.errors.name" class="text-danger">
                  {{ data.errors.name }}
                </span>
              </div>
            </div>
            <div class="row mb-3">
              <label for="email" class="col-sm-3 col-form-label">
                メールアドレス
                <span class="text-light bg-danger px-1 small">必須</span>
              </label>
              <div class="col-sm-9">
                <input
                  type="text"
                  id="email"
                  v-model="data.registerForm.email"
                  class="form-control"
                  v-bind:class="{ errorOutline: data.errors.email }"
                />
                <span v-show="data.errors.email" class="text-danger">
                  {{ data.errors.email }}
                </span>
              </div>
            </div>
            <div class="row mb-3">
              <label for="password" class="col-sm-3 col-form-label">
                パスワード
                <span class="text-light bg-danger px-1 small">必須</span>
              </label>
              <div class="col-sm-9">
                <input
                  type="password"
                  id="password"
                  v-model="data.registerForm.password"
                  class="form-control"
                  v-bind:class="{ errorOutline: data.errors.password }"
                />
                <span v-show="data.errors.password" class="text-danger">
                  {{ data.errors.password }}<br />
                </span>
                <span style="font-size: 0.7rem">
                  8文字以上で入力して下さい
                </span>
              </div>
            </div>
            <div class="row mb-3">
              <label
                for="password-confirmation"
                class="col-sm-3 col-form-label"
              >
                パスワード (確認)
                <span class="text-light bg-danger px-1 small">必須</span>
              </label>
              <div class="col-sm-9">
                <input
                  type="password"
                  id="password-confirmation"
                  v-model="data.registerForm.password_confirmation"
                  class="form-control"
                  v-bind:class="{
                    errorOutline: data.errors.password_confirmation,
                  }"
                />
                <span
                  v-show="data.errors.password_confirmation"
                  class="text-danger"
                >
                  {{ data.errors.password_confirmation }}
                </span>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <button
                type="submit"
                class="btn btn-info p-2 m-2 d-flex align-items-center"
                style="width: 10rem; height: 3rem"
              >
                <span class="flex-grow-1">新規ユーザー登録</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <!-- ▲Register Form -->
      <!-- ▲tabの数字によってログインとRegisterの画面を切り替える -->
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const data = reactive({
      registerForm: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      errors: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
    });

    const registerSubmit = async () => {
      await store.dispatch("register", data.registerForm);
    };
    return {
      data,
      registerSubmit,
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