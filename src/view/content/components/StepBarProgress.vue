<template>
  <!--begin::step-->
  <div class="wizard-step">
    <inline-svg v-if="stepProcess==1" src="media/svg/step/01-active.svg"/>
    <inline-svg v-if="stepProcess==2" src="media/svg/step/01-complete.svg"/>
    <inline-svg v-if="stepProcess==3" src="media/svg/step/02-active.svg"/>
    <inline-svg v-if="stepProcess==4" src="media/svg/step/02-complete.svg"/>
    <inline-svg v-if="stepProcess==5" src="media/svg/step/03-active.svg"/>
    <inline-svg v-if="stepProcess==6" src="media/svg/step/03-complete.svg"/>
    <inline-svg v-if="stepProcess==7" src="media/svg/step/04-active.svg"/>
    <inline-svg v-if="stepProcess==8" src="media/svg/step/04-complete.svg"/>
  </div>
</template>
<script>
export default {
  name: "StepBarProgress",
  props: {
    stepProcess: { type: String, required: true }
  },
}
</script>