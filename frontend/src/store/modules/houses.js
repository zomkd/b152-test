import axios from 'axios';

const state = {
    // houses: [{
    //     city: 'Moscow',
    //     address: 'Pushkina,1',
    //     builder: 'ula',
    //     description: 'test Pushkina,1 description',
    // },
    // {
    //     city: 'St.P',
    //     address: 'Pushkina,4',
    //     builder: 'pik',
    //     description: 'test Pushkina,4 description',
    // }
    // ], 
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