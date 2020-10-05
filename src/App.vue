<template>
  <v-app id="app">
    <!--    <v-navigation-drawer app>-->
    <!--      &lt;!&ndash; &ndash;&gt;-->
    <!--    </v-navigation-drawer>-->

    <v-app-bar app>
      <!-- -->
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <!--        <router-view/>-->
      </v-container>
    </v-main>

    <SkyStudioSplash
        :show="$store.state.splash.show"
        :messages="$store.state.splash.messages"
    />
  </v-app>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'

import SkyStudioSplash from '@/components/SkyStudioSplash/index.vue'

@Component({
  components: {
    SkyStudioSplash,
  },
})
export default class App extends Vue {
  mounted() {
    this.$store.dispatch('splash/update', '123')
  }
}
</script>

<style lang="sass">
body
  margin: 0

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
</style>
