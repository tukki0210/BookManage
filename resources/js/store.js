import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'

export const store = createStore({
    state: {

        // 認証
        isAuth: false,
        user: {
            id: '',
            name: '',
            email: '',
            token: ''
        },

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
            state.user = value.user;
        },
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
            // SanctumのSPA認証

            // アプリケーションのCSRF保護を初期化
            await axios.get('/sanctum/csrf-cookie')
            // ログインしてユーザー情報を受け取る
            const response = await axios.post('/api/login', credentials)

            // ユーザートークンをstateに設定
            commit('setUser', response.data)
            // ログイン成功後はLaravelがクライアントにセッションクッキーを発行する
            await dispatch('me');
            // 認証情報を設定
            // commit('setIsAuth', true);
            // commit('setUser', response.data);
        },

        async me({ commit, state }) {
            try {
                // console.log(state.user.token)
                // const response = await axios.get('/api/user', {
                //     headers: {
                //         Authorization: `Bearer ${state.user.token}`,
                //     }
                // });
                const response = await axios.get('/api/user');
                console.log('認証情報の表示');
                console.log(response.data);

                // 認証情報を設定
                commit('setIsAuth', true);
                // commit('setUser', response.data);
            } catch (err) {
                console.log('エラー情報の表示');
                console.log(err);

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
    },
    plugins: [createPersistedState(
        {
            key: 'booksApp',
            storage: window.localStorage
        }
    )]
})