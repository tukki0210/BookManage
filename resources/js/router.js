import { createRouter, createWebHistory } from 'vue-router'
// 必要なコンポーネントをインポート
import HelloWorld from './components/HelloWorld'
import BookListView from './components/Pages/BookListView'
import BookAdd from './components/Pages/BookAdd'
import BookDetail from './components/Pages/BookDetail'
import Login from './components/Pages/Login.vue'
import Register from './components/Pages/Register.vue'


export const router = createRouter({
    history: createWebHistory(),
    routes: [
        // 必要な数だけ書く
        {
            path: '/',
            name: 'index',
            component: HelloWorld,
        },
        {
            path: '/booklist',
            name: 'booklist',
            component: BookListView,
        },
        {
            path: '/bookdetail/:id',
            name: 'bookdetial',
            componnents: BookDetail
        },
        {
            path: '/bookadd',
            name: 'bookadd',
            component: BookAdd,
        },
        {
            //ログイン画面
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            //新規登録画面
            path: '/register',
            name: 'Register',
            component: Register
        }
    ]
})

//認証されていなければLoginページへリダイレクト
router.beforeEach((to, from) => {
    // metaフィールドをチェック
    if (to.meta.isAuthenticated && !store.state.isAuth) {
        return {
            path: '/login',
            // 後で戻ってくる場所を保存
            query: { redirect: to.fullPath },
        }
    }
})
export default router