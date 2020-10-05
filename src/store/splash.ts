import {Module, VuexModule, Mutation, Action} from 'vuex-module-decorators'

@Module({namespaced: true})
export default class Splash extends VuexModule {
    // SkyStudioSplash state
    visible = false
    messages = [] as string[]

    // Adding new message
    @Mutation
    addMessage(message: string) {
        const maxMessages = 50
        this.messages.push(message)
        this.messages = this.messages.slice(-maxMessages)
    }

    // Changing visibility state
    @Mutation
    visibility(visible: boolean) {
        this.visible = visible
    }

    // Showing splash and adding new message
    @Action
    update(message: string) {
        this.context.commit('visibility', true)
        this.context.commit('addMessage', message)
    }

    // Hiding splash
    @Action
    hide() {
        this.context.commit('visibility', false)
    }
}
