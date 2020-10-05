<template>
  <svg class="cotl-pad-icon" width="100" height="60" ref="pad">
    <rect id="B11" x="2" y="2" rx="3" ry="3" width="16" height="16" style="fill:#1de9b6;opacity:.2"/>
    <rect id="B12" x="22" y="2" rx="3" ry="3" width="16" height="16" style="fill:#1de9b6;opacity:.2"/>
    <rect id="B13" x="42" y="2" rx="3" ry="3" width="16" height="16" style="fill:#1de9b6;opacity:.2"/>
    <rect id="B14" x="62" y="2" rx="3" ry="3" width="16" height="16" style="fill:#1de9b6;opacity:.2"/>
    <rect id="B15" x="82" y="2" rx="3" ry="3" width="16" height="16" style="fill:#1de9b6;opacity:.2"/>

    <rect id="B21" x="2" y="22" rx="3" ry="3" width="16" height="16" style="fill:#1de9b6;opacity:.2"/>
    <rect id="B22" x="22" y="22" rx="3" ry="3" width="16" height="16" style="fill:#1de9b6;opacity:.2"/>
    <rect id="B23" x="42" y="22" rx="3" ry="3" width="16" height="16" style="fill:#1de9b6;opacity:.2"/>
    <rect id="B24" x="62" y="22" rx="3" ry="3" width="16" height="16" style="fill:#1de9b6;opacity:.2"/>
    <rect id="B25" x="82" y="22" rx="3" ry="3" width="16" height="16" style="fill:#1de9b6;opacity:.2"/>

    <rect id="B31" x="2" y="42" rx="3" ry="3" width="16" height="16" style="fill:#1de9b6;opacity:.2"/>
    <rect id="B32" x="22" y="42" rx="3" ry="3" width="16" height="16" style="fill:#1de9b6;opacity:.2"/>
    <rect id="B33" x="42" y="42" rx="3" ry="3" width="16" height="16" style="fill:#1de9b6;opacity:.2"/>
    <rect id="B34" x="62" y="42" rx="3" ry="3" width="16" height="16" style="fill:#1de9b6;opacity:.2"/>
    <rect id="B35" x="82" y="42" rx="3" ry="3" width="16" height="16" style="fill:#1de9b6;opacity:.2"/>
  </svg>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'

@Component({})
export default class COTLPadIcon extends Vue {
  // Interval's handler
  interval: number = 0

  // List of pad's buttons
  btns: Element[] = []

  mounted() {
    // Buttons filling
    for (let y = 1; y <= 3; y++) {
      for (let x = 1; x <= 5; x++) {
        const id = `#B${y}${x}`
        const btn = (this.$refs.pad as Element).querySelector(id)
        if (btn !== null)
          this.btns.push(btn)
      }
    }

    // Creating interval animation
    this.interval = setInterval(() => {
      // Getting random button
      const btn = this.btns[(Math.random() * this.btns.length) | 0]
      // Playing animation
      btn.animate([
        {
          opacity: 1,
        },
        {
          opacity: .2,
        },
      ], {
        duration: 500,
      })
    }, 100)
  }

  beforeDestroy() {
    clearInterval(this.interval)
  }
}
</script>

<style lang="sass" scoped>
.cotl-pad-icon
  position: relative
</style>
