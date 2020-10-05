import Vue from 'vue'
import Vuex from 'vuex'
import {namespace} from "vuex-class";

import Splash from './splash'
import Build, {BuildHelper} from './build'
import {BindingHelper} from "vuex-class/lib/bindings";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        // Build info
        Build,
        // SplashScreen control
        Splash,
    }
})

// Exporting modules namespaces
const NamespaceBuild = namespace('Build')
const NamespaceSplash = namespace('Splash')

export {
    NamespaceBuild,
    NamespaceSplash,
}
