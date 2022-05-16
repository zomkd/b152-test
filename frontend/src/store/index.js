import Vue from 'vue';
import Vuex from 'vuex';

import builders from './modules/builders';
import houses from './modules/houses';
import comments from './modules/comments';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        builders,
        houses,
        comments,
    },
});

export default store