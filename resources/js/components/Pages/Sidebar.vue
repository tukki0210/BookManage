<template>
    <aside>
        <ul>
            <li>{{data.category[0]}}</li>
            <li>{{data.category[1]}}</li>
        </ul>
        <button class="bg-primary">
             <router-link to="booklist">本を借りる</router-link>
        </button>
        <br>
       <button>
           <router-link to="bookadd">追加</router-link>
       </button>
       <br>
        <button>
           <router-link to="login">ログイン</router-link>
       </button>
       <br>
        <button>
           <router-link to="register">新規登録</router-link>
       </button>
        <div class="text-primary">test</div>
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
