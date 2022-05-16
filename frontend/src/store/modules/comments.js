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

};
const getters = {
    BUILDERS_COMMENTS: state => {
        return state.buildersComments;
    },
};

const mutations = {

};

export default {
    state,
    getters,
    mutations,
};