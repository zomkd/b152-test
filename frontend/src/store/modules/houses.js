const state = {
    houses: [{
        city: 'Moscow',
        address: 'Pushkina,1',
        builder: 'ula',
        description: 'test Pushkina,1 description',
    },
    {
        city: 'St.P',
        address: 'Pushkina,4',
        builder: 'pik',
        description: 'test Pushkina,4 description',
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