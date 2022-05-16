const state = {
    buildersComments: [{
        name: 'ula',
        text: 'ula test comment',
    },
    {
        name: 'pik',
        text: 'pik test comment',
    }
    ],
    housesComments: [{
        name: 'pushkina 1',
        text: 'pushkina 1 test comment',
    },
    {
        name: 'pushkina 2',
        text: 'pushkina 2 test comment',
    }
    ],

};
const getters = {
    BUILDERS_COMMENTS: state => {
        return state.buildersComments;
    },
    HOUSES_COMMENTS: state => {
        return state.housesComments;
    },
};

const mutations = {

};

export default {
    state,
    getters,
    mutations,
};