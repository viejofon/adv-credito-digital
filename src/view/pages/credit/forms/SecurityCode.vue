<template>
  <div>
    <div class="row">
      <div class="col-xxl-12">
        <KTCard ref="preview" v-bind:title="title" v-bind:example="false">

          <template v-slot:title v-if="hasTitleSlot">
            <h3 class="card-title">
              <slot name="title">Información de Solicitud de Crédito</slot>
            </h3>
          </template>
          <template v-slot:body>
            <div class="header-message">
              <div class="img-svg-lg">
                <inline-svg src="media/svg/icons/Actions/icn-security-code.svg"/>
              </div>
              <h1>Código de Seguridad</h1>
            </div>
            <v-form v-model="valid">
              <v-container class="p-0">
                <v-row>
                  <div class="code-wrapper mt-4 ">
                    <div class="input-code-fields">
                      <v-col cols="3" sm="3" md="3" class="position-relative pt-0 pb-0">
                        <v-text-field outlined></v-text-field>
                      </v-col>
                      <v-col cols="3" sm="3" md="3" class="position-relative pt-0 pb-0">
                        <v-text-field outlined></v-text-field>
                      </v-col>
                      <v-col cols="3" sm="3" md="3" class="position-relative pt-0 pb-0">
                        <v-text-field outlined></v-text-field>
                      </v-col>
                      <v-col cols="3" sm="3" md="3" class="position-relative pt-0 pb-0">
                        <v-text-field outlined></v-text-field>
                      </v-col>
                    </div>
                  </div>
                  <div class="text-center">
                    <h2 class="pl-8 pr-8 lg-caption">Te enviamos un mensaje con un código de verificación a tu celular y correo electrónico registrados. Ingresa el código para continuar</h2>
                    <a href="#" class="link-info-lg">¿No recibiste el código de verificación?</a>
                  </div>
                  <v-col class="m-0">
                    <CheckboxGroup
                        :items="aceptshareLocation"
                        item-value="name"
                        item-model="value"
                        class="mb-5"
                    ></CheckboxGroup>
                    <ActionPanel
                        label-prev="Regresar"
                        hide-prev-button="false"
                        label-next="Autorizar"
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

    </div>
  </div>
</template>

<script>
//import TextBox from "@/view/content/components/TextBox";
//import DateControl from "@/view/content/components/DateControl";
//import SelectBox from "@/view/content/components/SelectBox";
import ActionPanel from "@/view/content/components/ActionPanel";
import CheckboxGroup from "@/view/content/components/CheckboxGroup";
import KTCard from "@/view/content/Card.vue";


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
    CheckboxGroup,
    //TextBox,
    //SelectBox,
    //DateControl,
    ActionPanel,
    KTCard,

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