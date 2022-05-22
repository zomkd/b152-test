import axios from 'axios';

const state = {
    houses: [],
};
const getters = {
    HOUSES: state => {
        return state.houses;
    },
};

const mutations = {
    SET_HOUSES(state, houses) {
        state.houses = houses
    }
};

const actions = {
    async GET_HOUSES({ commit }) {
        try {
            const data = await axios.get('http://localhost:8000/houses/')
            commit('SET_HOUSES', data.data)
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