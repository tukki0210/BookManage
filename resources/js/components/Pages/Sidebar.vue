<template>
    <aside>
        <ul>
            <li>{{data.category[0]}}</li>
            <li>{{data.category[1]}}</li>
        </ul>
        <router-link to="booklist">一覧表示</router-link>
        <router-link to="bookadd">追加</router-link>
    </aside>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import { reactive } from 'vue'

export default ({
    name: 'Sidebar',
    setup() {
        const data = reactive({
            category : ['JavaScript','PHP']
        })

        return {
            data
        }

    },
})
</script>
<style lang="css">
    aside {
        background-color:#EFA00B;
        width: 300px;
        height: 1200px;;
    }
    li {
        list-style: none;
    }
</style>
