import { createStore } from 'vuex'
import axios from 'axios'

export const store = createStore({
    state() {
        return {
            // 認証
            isAuth: false,
            user: null,
            userToken: ''
        }
    },
    getters: {
        isAuth(state) {
            return state.isAuth;
        },
        user(state) {
            return state.user;
        },
    },
    // stateの更新
    mutations: {
        setIsAuth(state, value) {
            state.isAuth = value;
        },
        setUser(state, value) {
            state.user = value;
        },
        setUserToken(state, value) {
            state.userToken = value;
        }
    },
    // actionsの中では非同期の操作を行うことができる
    actions: {
        //会員登録
        async register({ dispatch }, credentials) {
            // 新規ユーザーの作成
            await axios.post('/api/register', credentials);
            // 新規ユーザーでログイン
            await dispatch('login', credentials)
        },

        // ログイン
        async login({ dispatch, commit }, credentials) {
            const token = await axios.get('/sanctum/csrf-cookie')
            console.log(token);
            commit('setUserToken', token)

            await axios.post('/api/login', credentials)
            await dispatch('me');
        },

        async me({ commit, state }) {
            try {
                const response = await axios.get('/api/user', {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": state.userToken
                    },
                });
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