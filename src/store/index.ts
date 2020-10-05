import Vue from 'vue'
import Vuex from 'vuex'

import Splash from './splash'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {
        APP: state => {
            /* eslint-disable */
            /* tslint:disable */
            return {
                // @ts-ignore
                VERSION: APP.VERSION || 'test',
                // @ts-ignore
                MODE: APP.MODE || 'unknown',
                // @ts-ignore
                NAME: APP.NAME || 'cotlstudio',
                // @ts-ignore
                HOMEPAGE: APP.HOMEPAGE,
            }
            /* tslint:enable*/
            /* eslint-enable */
        },
    },
    modules: {
        // Control of SplashScreen
        splash: Splash,
    }
})
