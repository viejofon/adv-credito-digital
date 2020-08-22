<template>
  <!-- begin:: Header -->
  <div
    id="kt_header"
    ref="kt_header"
    class="header bg-dark-blue red-border-md"
    v-bind:class="headerClasses"
  >
    <div
      class="d-flex align-items-center justify-content-between"
      v-bind:class="{ 'container-fluid': widthFluid, container: !widthFluid }"
    >
      <div class="d-flex align-items-stretch mr-3">
        <div class="header-logo">
          <router-link to="/">
            <img
              alt="Logo"
              :src="layoutConfig('self.logo.default')"
              class="logo-default max-h-65px"
            />
            <img
              alt="Logo"
              :src="layoutConfig('self.logo.sticky')"
              class="logo-sticky max-h-65px"
            />
          </router-link>
        </div>
      </div>
      <KTTopbar
          :step-process="4"
      ></KTTopbar>
    </div>
  </div>
  <!-- end:: Header -->
</template>

<style lang="scss">
.bg-dark-blue {
  background: #1a3f69;
  height: 100px;
}
.red-border-md {
  border-right: 4px solid #d62e2f;
}
</style>

<script>
import { mapGetters } from "vuex";
import KTTopbar from "@/view/layout/header/Topbar.vue";
import KTLayoutHeader from "@/assets/js/layout/base/header.js";
import KTLayoutHeaderMenu from "@/assets/js/layout/base/header-menu.js";

export default {
  name: "KTHeader",
  components: {
    KTTopbar
  },
  mounted() {
    // Init Desktop & Mobile Headers
    KTLayoutHeader.init("kt_header", "kt_header_mobile");

    // Init Header Menu
    KTLayoutHeaderMenu.init(
      this.$refs["kt_header_menu"],
      this.$refs["kt_header_menu_wrapper"]
    );
  },
  computed: {
    ...mapGetters(["layoutConfig", "getClasses"]),

    /**
     * Check if the header menu is enabled
     * @returns {boolean}
     */
    headerMenuEnabled() {
      return !!this.layoutConfig("header.menu.self.display");
    },

    /**
     * Get extra classes for header based on the options
     * @returns {null|*}
     */
    headerClasses() {
      const classes = this.getClasses("header");
      if (typeof classes !== "undefined") {
        return classes.join(" ");
      }
      return null;
    },

    /**
     * Get extra classes for header menu based on the options
     * @returns {null|*}
     */
    headerMenuClasses() {
      const classes = this.getClasses("header_menu");
      if (typeof classes !== "undefined") {
        return classes.join(" ");
      }
      return null;
    },

    /**
     * Check if header container is fluid
     */
    widthFluid() {
      return this.layoutConfig("header.self.width") === "fluid";
    }
  }
};
</script>
