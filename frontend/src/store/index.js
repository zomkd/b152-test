import Vue from 'vue';
import Vuex from 'vuex';
import builders from './modules/builders';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        builders,
    },
});

export default store