<template>
  <v-app id="app">

    <!-- Navigation -->
    <v-navigation-drawer color="background" width="200" app permanent expand-on-hover>
      <v-list nav dense>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-gamepad-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="text-left">Music Pad</v-list-item-title>
        </v-list-item>

      </v-list>

      <v-divider/>

      <v-list nav dense>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-notification-clear-all</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="text-left">Notes Lines</v-list-item-title>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-cards</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="text-left">Notes Cards</v-list-item-title>
        </v-list-item>

      </v-list>

      <v-divider/>

      <v-list nav dense>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-music-box-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="text-left">Music Collections</v-list-item-title>
        </v-list-item>

      </v-list>

      <v-divider/>

      <v-list nav dense>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-robot</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="text-left">COTL Sound</v-list-item-title>
        </v-list-item>

      </v-list>

      <v-divider/>

      <v-list nav dense>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-import</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="text-left">Import Music</v-list-item-title>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-export</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="text-left">Export Music</v-list-item-title>
        </v-list-item>

      </v-list>

      <v-divider/>

      <v-list nav dense>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-github</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="text-left">Fork Me</v-list-item-title>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-coffee</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="text-left">Donate</v-list-item-title>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <!-- Content -->
    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>

    <!-- Splash -->
    <SkyStudioSplash
        :show="splashVisible"
        :messages="splashMessages"
    />
  </v-app>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import {NamespaceSplash, NamespaceBuild} from "@/store"

import SkyStudioSplash from '@/components/SkyStudioSplash/index.vue'

@Component({
  components: {
    SkyStudioSplash,
  },
})
export default class App extends Vue {
  @NamespaceSplash.State('visible') splashVisible!: boolean
  @NamespaceSplash.State('messages') splashMessages!: string[]
  @NamespaceSplash.Action('update') splashUpdate!: (message: string) => void
  @NamespaceSplash.Action('hide') splashHide!: () => void

  @NamespaceBuild.Getter('version') buildVersion!: string
  @NamespaceBuild.Getter('name') buildName!: string
  @NamespaceBuild.Getter('mode') buildMode!: string
  @NamespaceBuild.Getter('homepage') buildHomepage!: string

  mounted() {
    // SkyStudio preloading
    this.splashUpdate(`Visit ${this.buildHomepage} to get more info`)
    this.splashUpdate(`Welcome to ${this.buildName} ${this.buildVersion} ${this.buildMode}`)
    setTimeout(() => {
      this.splashHide()
    }, 3000)
  }
}
</script>

<style lang="sass">
@import './src/assets/styles/main'

body
  margin: 0

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: $color-primary
  background: $color-background-deep
</style>
