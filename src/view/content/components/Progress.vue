<template>
  <!-- begin::App progress -->
  <v-progress-circular
      :rotate="360"
      :size="120"
      :width="4"
      :value="value"
      color="#378EF0"
  ><span class="value-percent">
        {{ value }}%</span><span class="label-progress">Completado</span>
  </v-progress-circular>
  <!-- end::App progress -->
</template>
<style>
.v-progress-circular__underlay {
  stroke: #e2e8ef !important;
}
.v-progress-circular__info {
  flex-wrap: wrap;
}
.value-percent {
  font-size: 2.2857rem;
  color: #000;
  font-weight: 600;
  display: block;
  flex: 0 0 100%;
  text-align: center;
  height: 2.4857rem;
}
.label-progress {
  font-size: 0.7857rem;
  color: #666;
  font-weight: 600;
}
</style>
<script>
export default {
  name: "Progress",
  props: {
    progress: String,
  },
  data () {
    return {
      interval: {},
      value: this.progress,
    }
  },
  beforeDestroy () {
    clearInterval(this.interval)
  }/*,
  mounted () {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0)
      }
      this.value += 1
    }, 1000)
  }*/
}
</script>