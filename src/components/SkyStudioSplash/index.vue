<template>
  <div
      class="splash-container"
      :class="{
        visible: show,
      }"
  >
    <v-fade-transition>
      <v-card v-if="show" elevation="5" flat class="splash">
        <v-progress-linear indeterminate color="primary"/>

        <COTLStudio class="cotl-studio"/>

        <div class="messages">
          <div
              v-for="(text, i) in showedMessages"
              :key="i"
              class="text-caption message"
          >
            {{ text }}
          </div>
        </div>

        <div class="sky-logo"></div>

        <div class="links-buttons">
          <v-btn text color="primary" @click="btnGithubClick">
            Fork Me
            <v-icon right>
              mdi-github
            </v-icon>
          </v-btn>
        </div>

      </v-card>
    </v-fade-transition>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'

import COTLStudio from './components/COTLStudio.vue'

@Component({
  components: {
    COTLStudio,
  },
})
export default class SkyStudioSplash extends Vue {
  // The splash window visibility
  @Prop({type: Boolean, default: false})
  show!: boolean

  // The splash window messages
  @Prop({type: Array, default: () => []})
  messages!: string[]

  // Returns messages to show
  get showedMessages() {
    const maxMessages = 8
    return this.messages.slice(-maxMessages)
  }

  btnGithubClick() {
    window.open(this.$store.getters.APP.HOMEPAGE, '_blank')
  }
}
</script>

<style lang="sass" scoped>
@import './src/assets/styles/theme'

.splash-container
  position: absolute
  display: flex
  justify-content: center
  align-items: center
  top: 0
  left: 0
  width: 100%
  height: 100%
  z-index: 9999
  visibility: hidden
  transition: .3s ease-out

  &.visible
    visibility: visible
    background: rgba(0, 0, 0, .3)
    backdrop-filter: blur(3px)

  .links-buttons
    position: absolute
    right: 10px
    top: 20px

  .splash
    position: relative
    width: 600px
    height: 300px
    background: $color-background
    overflow: hidden

    .cotl-studio
      position: absolute
      margin: 20px 0 0 20px

    .messages
      position: absolute
      bottom: 20px
      left: 20px
      text-align: left

      .message
        text-overflow: ellipsis
        overflow: hidden
        white-space: nowrap
        width: 450px
        opacity: .3

        &:last-child
          opacity: 1

    .sky-logo
      position: absolute
      width: 100px
      height: 100px
      bottom: 0
      right: 0
      margin: 20px
      background-image: url('assets/sky-logo.png')
      background-repeat: no-repeat
      background-position: center
      background-size: contain
</style>
