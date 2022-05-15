const state = {
    builders: [{
        name: 'ula',
        houses: 5,
    },
    {
        name: 'pik',
        houses: 22,
    }
    ],

};
const getters = {
    BUILDERS: state => {
        return state.builders;
    },
};

const mutations = {

};

export default {
    state,
    getters,
    mutations,
};