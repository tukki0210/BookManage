import { createStore } from 'vuex'
import { axios } from 'axios'
import { baseurl } from './constants'

export const store = createStore({
    state () {
        return {
            user: null
        }
    },
    // stateの更新
    mutation: {
        setUser(state, value){
            state.user = value
        }
    },
    // actionsの中では非同期の操作を行うことができる
    actions: {
        async login({ dispatch }, credentials) {
            await axios.get('/sanctum/csrf-cookie')
                .catch(err => console.log(err));
            await axios.post('/api/login', credentials)
                .catch(err => console.log(err));
            await dispatch('me');
        },
        async me({ commit }) {
            try {
                const response = await axios.get('/api/user');
                console.log('認証情報の表示');
                console.log(response.data);

                // 認証情報を設定
                commit('setIsAuth', true);
                commit('setUser', response.data);
            } catch (error) {
                console.log('エラー情報の表示');
                console.log(error);

                // 認証情報を初期化
                commit('setIsAuth', false);
                commit('setUser', null);
            }
        },

        //ログアウト
        async logout({ dispatch }) {
            await axios.get('/sanctum/csrf-cookie');
            await axios.get('/api/logout');
            await dispatch('out');
        },
        async out({ commit }) {
            try {
                // 認証情報を初期化
                commit('setIsAuth', false);
                commit('setUser', null);
            } catch (error) {
                console.log(error)

                // 認証情報を初期化
                commit('setIsAuth', false);
                commit('setUser', null);
            }
        },
    }
})