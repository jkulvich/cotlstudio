<template>
  <div class="container">
    <SkyStudioSplash/>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import SkyStudioSplash from '@/components/SkyStudioSplash/index.vue'

@Component({
  components: {
    SkyStudioSplash,
  },
})
export default class SkyStudioLoading extends Vue {

}
</script>

<style lang="sass" scoped>
@import './src/assets/styles/main'

.container
  display: flex
  align-items: center
  justify-content: center
  height: 100vh
  width: 100%
</style>
