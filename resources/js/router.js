import {createRouter, createWebHistory} from 'vue-router'
// 必要なコンポーネントをインポート
import HelloWorld from './components/HelloWorld'
import BookListView from './components/Pages/BookListView'

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
        }
    ]
})

export default router