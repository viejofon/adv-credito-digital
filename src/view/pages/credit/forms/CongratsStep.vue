<template>
  <div>
    <div class="row">
      <div class="col-xxl-8">
        <KTCard ref="preview" v-bind:title="title" v-bind:example="false">
          <template v-slot:title v-if="hasTitleSlot">
            <h3 class="card-title">
              <slot name="title">Información de Solicitud de Crédito</slot>
            </h3>
          </template>
          <template v-slot:body>
            <div class="header-message">
              <div class="img-svg-lg">
                <inline-svg src="media/svg/icons/Actions/icn-congrats.svg"/>
              </div>
              <h1>¡Felicitaciones!</h1>
            </div>
            <v-form v-model="valid">
              <v-container class="p-0">
                <v-row>
                  <div class="text-center">
                    <h2 class="pl-8 pr-8 lg-caption">Tu perfil crediticio cumple con las condiciones establecidas para aplicar a nuestro Crédito Digital para continuar con el proceso prepárate para sacarte una foto, asegúrate de activar la cámara de tu dispositivo cuando te lo solicitemos.</h2>
                    <a href="#" class="link-info-lg mb-6">¿Qué debes tomar en cuenta para la fotografía?</a>
                  </div>
                  <v-col class="m-0">
                    <ActionPanel
                        label-prev="Regresar"
                        hide-prev-button="true"
                        label-next="Tomar Fotografía"
                        hide-next-button="false"
                    >
                    </ActionPanel>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </template>
        </KTCard>
      </div>
      <div class="col-xxl-4">
        <StatsWidget7></StatsWidget7>
      </div>
    </div>
  </div>
</template>

<script>

import ActionPanel from "@/view/content/components/ActionPanel";
import KTCard from "@/view/content/Card.vue";
import StatsWidget7 from "@/view/content/widgets/stats/Widget7";

export default {
  data: () => ({
    valid: false,
    listTypeHousing: [
      {
        id: 1,
        name: "Propia",
        value: "propia"
      },
      {
        id: 2,
        name: "Arrendada",
        value: "arrendada"
      }
    ],
    genderList: [
      {
        id: 1,
        name: "Femenino",
        value: "femenino"
      },
      {
        id: 2,
        name: "Masculino",
        value: "masculino"
      }
    ],
    listCivilStatus: [
      {
        id: 1,
        name: "Soltero",
        value: "solttero"
      },
      {
        id: 2,
        name: "Casado",
        value: "casado"
      },
      {
        id: 3,
        name: "Divorciado",
        value: "divorciado"
      },
      {
        id: 4,
        name: "Unión Libre",
        value: "union-libre"
      },
      {
        id: 5,
        name: "Viudo",
        value: "viudo"
      }
    ],
    listProvince: [
      {
        id: 1,
        name: "Pichincha",
        value: "pichincha"
      },
      {
        id: 2,
        name: "Tungurahua",
        value: "guayas"
      },
      {
        id: 3,
        name: "Imbabura",
        value: "imbabura"
      }
    ],
    listCanton: [
      {
        id: 1,
        name: "Cantón Uno",
        value: "canton"
      },
      {
        id: 2,
        name: "Cantón Dos",
        value: "canton"
      },
      {
        id: 3,
        name: "Cantón Tres",
        value: "cantons"
      }
    ],
    listParish: [
      {
        id: 1,
        name: "Parroquia Uno",
        value: "parroquia"
      },
      {
        id: 2,
        name: "Parroquia Dos",
        value: "parroquia"
      },
      {
        id: 3,
        name: "Parroquia Tres",
        value: "parroquia"
      }
    ],
    panel: [0],
    aceptshareLocation: [
      {
        id: 1,
        name: "He leído las condiciones y acuerdos de términos de privacidad y  \n" +
            "autorizo a la Cooperativa Alianza del Valle a realizar la consulta \n" +
            "de mi estado crediticio en el Buró de Crédito y así como mis \n" +
            "datos personales en el Registro Civil del Ecuador.",
        select: false
      }
    ]
  }),
  components: {
    //TextBox,
    //SelectBox,
    //DateControl,
    ActionPanel,
    KTCard,
    StatsWidget7
  }/*,
  methods: {
    // code 1
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }*/
};
</script>
<style>
.img-svg-lg {
  width: 120px;
  display: block;
  margin: 2rem auto 1.5rem;
  height: auto;
}
h1 {
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  color: #363636;
}
.lg-caption {
  font-weight: 400 !important;
  line-height: 1.4;
  margin-top: 0 !important;
}
.link-info-lg {
  color: #378EF0 !important;
  text-decoration: underline;
  font-size: 20px;
}
.code-wrapper {
  width: 100%;
}
.input-code-fields {
  width: 50%;
  margin: 0 auto;
  display: flex;
}
.v-input.theme--light.v-input--selection-controls.v-input--checkbox .v-input__slot {
  align-items: flex-start;
}
.v-input .v-label {
  height: 20px;
  line-height: 24px;
}
</style>