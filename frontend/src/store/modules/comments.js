import axios from 'axios';

const state = {
    comments: [],

};
const getters = {
    COMMENTS: state => {
        return state.comments;
    },
};

const mutations = {
    SET_COMMENTS(state, comments) {
        state.comments = comments
    },
    PUSH_COMMENTS(state, comments) {
        state.comments.push(comments)
    }
};

const actions = {
    async GET_COMMENTS({ commit }) {
        try {
            const data = await axios.get('http://localhost:8000/comments/')
            commit('SET_COMMENTS', data.data)
        }
        catch (error) {
            alert(error)
            console.log(error)
        }
    },
    async SAVE_COMMENT({commit}, payload) {
        try {
            const data = await axios.post('http://localhost:8000/comments/', {
                name: payload.name,
                text: payload.text,
                builder: payload.builder,
                house: payload.house,
            })
            console.log(payload)
            commit('PUSH_COMMENTS', data.data)
        }   
        catch (error) {
            alert(error)
            console.log(error)
        }
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};