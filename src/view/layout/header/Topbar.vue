<template>
  <!-- begin:: Header Topbar -->
  <div class="topbar">
    <span v-if="stepProcess==1" class="svg-icon svg-icon-xl svg-copy"><img src="media/svg/credito-digital/copy-state-01.svg" /></span>
    <span v-if="stepProcess==2" class="svg-icon svg-icon-xl svg-copy"><img src="media/svg/credito-digital/copy-state-02.svg" /></span>
    <span v-if="stepProcess==3" class="svg-icon svg-icon-xl svg-copy"><img src="media/svg/credito-digital/copy-state-03.svg" /></span>
    <span v-if="stepProcess==4" class="svg-icon svg-icon-xl svg-copy"><img src="media/svg/credito-digital/copy-state-04.svg" /></span>
  </div>
  <!-- end:: Header Topbar -->
</template>

<style lang="scss">
.svg-copy {
  width: 180px;
  height: 62px;
  &.svg-icon.svg-icon-xl svg {
    width: 100% !important;
    height: 100% !important;
  }
}
</style>

<script>
import i18nService from "@/core/services/i18n.service.js";
export default {
  name: "KTTopbar",
  props: {
    stepProcess: { type: String, required: true }
  },
  data() {
    return {
      languageFlag: "",
      languages: i18nService.languages
    };
  }/*,
  components: {
    KTSearchDefault
  }*/,
  methods: {
    onLanguageChanged() {
      this.languageFlag = this.languages.find(val => {
        return val.lang === i18nService.getActiveLanguage();
      }).flag;
    }
  },
  computed: {
    getLanguageFlag() {
      return this.onLanguageChanged();
    }
  }
};
</script>
