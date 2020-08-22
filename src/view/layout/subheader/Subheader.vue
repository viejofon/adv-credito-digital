<template>
  <div
    class="subheader py-2 py-lg-12 subheader-transparent"
    v-bind:class="subheaderClasses"
    id="kt_subheader"
  >
    <div
      class="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap"
      v-bind:class="{ 'container-fluid': widthFluid, container: !widthFluid }"
    >
      <div class="d-flex col-xxl-8 align-items-center flex-wrap mr-2">
        <StepBarProgress v-bind:step-process="1"></StepBarProgress>
      </div>
      <div class="d-flex col-xxl-4 align-items-center justify-content-center">
        <div id="app-progress" class="load percentage">
            <Progress v-bind:progress="10"></Progress>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Progress from "@/view/content/components/Progress.vue";
import StepBarProgress from "@/view/content/components/StepBarProgress";

export default {
  name: "KTSubheader",
  props: {
    breadcrumbs: Array,
    title: String
  },
  components: {
    Progress,
    StepBarProgress
  },
  computed: {
    ...mapGetters(["layoutConfig"]),
    /**
     * Check if subheader width is fluid
     */
    widthFluid() {
      return this.layoutConfig("subheader.width") === "fluid";
    },
    subheaderClasses() {
      const classes = [];
      const style = this.layoutConfig("subheader.style");
      if (style) {
        classes.push(style);
        if (style === "solid") {
          classes.push("bg-white");
        }
        if (this.layoutConfig("subheader.fixed")) {
          classes.push("border-top");
        }
      }
      return classes.join(" ");
    }
  }
};
</script>

<style lang="scss">
.wizard-step {
  width: 100%;
  height: 110px;
  & svg {
    width: 100%;
    height: 110px;
  }
}
</style>