import axios from 'axios';

const state = {
    builders: [],
};
const getters = {
    BUILDERS: state => {
        return state.builders;
    },
};

const mutations = {
    SET_BUILDERS(state, builders) {
        state.builders = builders
    }
};

const actions = {
    async GET_BUILDERS({ commit }) {
        try {
            const data = await axios.get('http://localhost:8000/builders/')
            commit('SET_BUILDERS', data.data)
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