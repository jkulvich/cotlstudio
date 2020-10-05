<template>
  <v-app id="app">

    <!-- Navigation -->
    <v-app-bar app color="background">
      <!-- -->
    </v-app-bar>

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
