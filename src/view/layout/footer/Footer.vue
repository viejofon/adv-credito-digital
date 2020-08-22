<template>
  <!-- begin:: Footer -->
  <div class="footer bg-light-gray py-4 d-flex flex-lg-column" id="kt_footer">
    <div
      class="d-flex align-items-center justify-content-between"
      v-bind:class="{ 'container-fluid': widthFluid, container: !widthFluid }"
    >
      <div class="text-dark-blue">
        <span class="font-weight-bold mr-2">
          2020 &nbsp;&copy;&nbsp;
        </span>
        <a class="text-dark-blue" href="https://www.alianzadelvalle.fin.ec" target="_blank">Alianza del Valle</a>
      </div>
      <div class="nav nav-dark">
        <a href="#" target="_blank" class="nav-link pr-3 pl-0">Políticas de Privacidad</a>
        <a href="#" target="_blank" class="nav-link px-3">Términos y Condiciones</a>
        <a href="https://www.facebook.com/CooperativaAlianzaDelValle/"
           target="_blank"
           class="nav-link px-3 svg-social-media-icon"
           aria-label="link to https://www.facebook.com/CooperativaAlianzaDelValle/"
           rel="noopener nofollow">
          <span class="svg-icon svg-icon-xl"><img src="media/svg/social-icons/facebook.svg" /></span>
        </a>
        <a href="https://www.instagram.com/coopalianzadelvalle/"
           target="_blank"
           class="nav-link px-3 svg-social-media-icon"
           aria-label="link to https://www.instagram.com/coopalianzadelvalle/"
           rel="noopener nofollow">
          <span class="svg-icon svg-icon-xl"><img src="media/svg/social-icons/instagram.svg" /></span>
        </a>
        <a href="https://www.youtube.com/channel/UC5C5OUZgsTpXK-O3QFCTKKw"
           target="_blank"
           class="nav-link px-3 svg-social-media-icon"
           aria-label="link to https://www.youtube.com/channel/UC5C5OUZgsTpXK-O3QFCTKKw"
           rel="noopener nofollow">
          <span class="svg-icon svg-icon-xl"><img src="media/svg/social-icons/youtube.svg" /></span>
        </a>
      </div>
    </div>
  </div>
  <!-- end:: Footer -->
</template>

<style lang="scss">
.bg-light-gray {
  background: #f1f1f1;
}
.text-dark-blue {
  color: #074a7b !important;
}
.nav a.nav-link {
  color: #074a7b;
}
a.text-dark-blue:hover,
.nav a.nav-link:hover {
  color: #1A3F69 !important;
}
.svg-social-media-icon img {
  width: 2rem;
  height: auto;
}
</style>

<script>
import { mapGetters } from "vuex";
export default {
  name: "KTFooter",
  computed: {
    ...mapGetters(["layoutConfig"]),

    /**
     * Check if footer container is fluid
     */
    widthFluid() {
      return this.layoutConfig("footer.width") === "fluid";
    }
  }
};
</script>
