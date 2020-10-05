<template>
  <div class="cotl-studio">
    <COTLPadIcon class="cotl-pad"/>
    <div class="content">
      <div class="cotl-title">COTL</div>
      <div class="cotl-subtitle">Studio for WEB</div>
    </div>
    <div class="border"></div>
  </div>
</template>

<script>
import {Vue, Component} from 'vue-property-decorator'

import COTLPadIcon from './COTLPadIcon'

@Component({
  components: {
    COTLPadIcon,
  },
})
export default class COTLStudio extends Vue {
}
</script>

<style lang="sass" scoped>
@import './src/assets/styles/theme'

.cotl-studio
  position: relative
  width: 200px
  height: 70px
  overflow: hidden
  opacity: 0
  animation: 10s linear anim-cotl forwards infinite .3s

  .cotl-pad
    position: absolute
    left: 20px
    top: 5px
    animation: 10s ease-out anim-pad forwards infinite .3s

  .border
    position: absolute
    top: 0
    left: 0
    width: 5px
    height: 100%
    transform: translateY(0)
    background: $color-primary
    animation: 10s ease-out anim-border forwards infinite .3s

  .content
    position: absolute
    top: 0
    transform: translate(0)
    animation: 10s ease-out anim-content forwards infinite .3s

    .cotl-title
      font-size: 50px
      letter-spacing: 10px
      margin: 0 0 0 20px
      line-height: 80%

    .cotl-subtitle
      position: relative
      font-size: 20px
      text-align: right
      transform: translate(0)
      animation: 10s ease-out anim-subtitle forwards infinite .3s

@keyframes anim-cotl
  0%
    opacity: 0
  2%
    opacity: 1
  98%
    opacity: 1
  100%
    opacity: 0

@keyframes anim-pad
  0%
    opacity: 1
  15%
    opacity: 1
  20%
    opacity: .5
  100%
    opacity: .5

@keyframes anim-border
  0%
    transform: translateY(-70px)
  10%
    transform: translateY(0)
  100%
    transform: translateY(0)

@keyframes anim-content
  0%
    transform: translate(-200px)
  15%
    transform: translate(-200px)
  23%
    transform: translate(0)
  100%
    transform: translate(0)

@keyframes anim-subtitle
  0%
    transform: translate(-20px)
    opacity: 0
  15%
    transform: translate(-20px)
    opacity: 0
  23%
    transform: translate(0)
    opacity: 1
  100%
    transform: translate(0)
    opacity: 1
</style>
