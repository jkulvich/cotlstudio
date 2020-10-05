import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // SkyStudioSplash
        splash: {
            show: false,
            messages: [] as string[],
        },
    },
    mutations: {
        // Showing splash
        show: state => {
            state.splash.show = true
        },
        // Hiding splash
        hide: state => {
            state.splash.show = false
        },
        // Adding new message to splash
        addMessage: (state, payload: string) => {
            state.splash.messages.push(payload)
            state.splash.messages = state.splash.messages.slice(-100)
        },
    },
    actions: {
        // Adding new message and shows splash
        update: async ({commit}, message: string) => {
            commit('show')
            commit('addMessage', message)
        },
        // Hiding splash
        hide: async ({commit}) => {
            commit('hide')
        },
    },
    getters: {},
    modules: {}
})
