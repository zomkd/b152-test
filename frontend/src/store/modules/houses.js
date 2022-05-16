const state = {
    houses: [{
        city: 'Moscow',
        address: 'Pushkina,1',
    },
    {
        name: 'St.P',
        address: 'Pushkina,4',
    }
    ],

};
const getters = {
    HOUSES: state => {
        return state.houses;
    },
};

const mutations = {

};

export default {
    state,
    getters,
    mutations,
};