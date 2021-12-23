<template>
    <aside>
        <li>
            {{data.category[0]}}
            {{data.category[1]}}
        </li>
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
