import {createRouter, createWebHistory} from 'vue-router'
// 必要なコンポーネントをインポート
import HelloWorld from './components/HelloWorld'
import BookListView from './components/Pages/BookListView'
import BookAdd from './components/Pages/BookAdd'
import BookDetail from './components/Pages/BookDetail'

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

        
    ]
})

export default router