const state = {
    builders: [{
        name: 'ula',
        houses: 5,
        description: 'test ula description',
    },
    {
        name: 'pik',
        houses: 22,
        description: 'test pik description',
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