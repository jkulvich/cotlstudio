import Vue from 'vue'
import {BindingHelper} from 'vuex-class/lib/bindings'
import {Module, VuexModule} from 'vuex-module-decorators'

@Module({namespaced: true})
export default class Build extends VuexModule {
    get version() {
        /* @ts-ignore */
        return APP.VERSION || 'in dev'
    }

    get mode() {
        /* @ts-ignore */
        return APP.MODE
    }

    get name() {
        /* @ts-ignore */
        return APP.NAME || 'cotlstudio'
    }

    get homepage() {
        /* @ts-ignore */
        return APP.HOMEPAGE
    }
}

export class BuildHelper {

}
