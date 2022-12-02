import Axios from "axios";

export const FETCH_USERS = '[users] Fetch Users'
export const GET_USERS = '[users] Get Users'
export const SET_USERS = '[users] Set Users'
export const RESET_USERS = '[users] Reset Users'

export const FETCH_USER = '[users] Fetch User'
export const GET_USER = '[users] Get User'
export const SET_USER = '[users] Set User'
export const RESET_USER = '[users] Reset User'


const state = () => ({
    users: {
        loading: false,
        result: []
    },
    user: {
        loading: false,
        result: null
    },
})

const mutations = {

    [SET_USERS](state, {result, loading}) {
        state.users.result = result;
        state.users.loading = loading;
    },

    [SET_USER](state, {result, loading}) {
        state.user.result = result;
        state.user.loading = loading;
    },
}

const actions = {

    // Получить список;
    async [FETCH_USERS]({commit, state}, { query }) {
        let params = {}
        if (query) {
            params = query
        }
        params.search = String(query.search)  || '';
        commit(SET_USERS,{result: [], loading: true});
        try {
            const res = await Axios.get(`/users`, { params });
            let users = [];
            if(params.search && params.search !== '') {
                 users = res.data.filter((item) => {
                    return item.id === +params.search || params.search.toLowerCase().split(' ').every(v => item.username.toLowerCase().includes(v));
                }) || [];
            }
            setTimeout(()=>{
                commit(SET_USERS, {result: users, loading: false});
            },500)
            return res.data
        } catch (error) {
            commit(SET_USERS,{result: [], loading: false});
            commit('setError', error)
            throw error
        }

    },

    [RESET_USERS]({commit}) {
        commit(SET_USERS,{result: [], loading: false});
    },

    // Получить;
    async [FETCH_USER]({commit, state}, id) {
        commit(SET_USER,{result: null, loading: true});
        try {
            const res = await Axios.get(`/users/${id}`);
            setTimeout(()=>{
                commit(SET_USER,{result: res.data, loading: false});
            },1000)
            return res.data
        } catch (error) {
            commit(SET_USER,{result: null, loading: false});
            commit('setError', error)
            throw error
        }
    },

    [RESET_USER]({commit}) {
        commit(SET_USER,{result: null, loading: false});
    },
}

const getters = {
    [GET_USERS]: state => state.users,
    [GET_USER]: state => state.user,
}

export default {
    namespaced: false,
    state,
    mutations,
    actions,
    getters
}
