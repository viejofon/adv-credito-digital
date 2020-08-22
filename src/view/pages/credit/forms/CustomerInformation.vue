<template>
  <div>
    <div class="row">
      <div class="col-xxl-8">
        <KTCard ref="preview" v-bind:title="title" v-bind:example="false">
          <template v-slot:title v-if="hasTitleSlot">
            <h3 class="card-title">
              <slot name="title">Información Personal del Cliente</slot>
            </h3>
          </template>
          <template v-slot:body>
            <h2>Nos interesa conocer<br> un poco más de ti</h2>
            <v-form v-model="valid">
                <v-expansion-panels
                    v-model="panel"
                    accordion="true"
                    multiple
                >
                  <v-expansion-panel active-class="v-item--active">
                    <v-expansion-panel-header><span class="order-panel" data-order="1" aria-status="active"></span>Datos Personales</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <v-container>
                        <v-row>
                          <TextBox
                              label="Cédula de Identidad"
                              placeholder="Ej: 1712963261"
                              model_id="identification"
                          ></TextBox>
                          <TextBox
                              label="Código Dactilar"
                              placeholder="Ej: V3332V2221"
                              model_id="fingerprint"
                              help-link="¿Necesitas ayuda?"
                              helper="info-fingerprint"
                          ></TextBox>
                          <LastNameBox
                              label="Apellidos"
                              model-id-last-name="last-name"
                              model-id-middle-last-name="middle-last-name"
                          ></LastNameBox>
                          <TextBox
                              label="Nombres"
                              placeholder="Ingresa tus nombres"
                              model_id="customer-name"
                          ></TextBox>
                          <DateControl
                              label="Fecha de Nacimiento"
                              model_id="customer-name"
                          ></DateControl>
                          <RadioButtonGroup
                              label="Género"
                              :items="genderList"
                              item-value="name"
                              item-model="value"
                          ></RadioButtonGroup>
                          <SelectBox
                              label="Estado Civil"
                              placeholder="Selecciona tu estado civil"
                              model_id="civil-status"
                              :items="listCivilStatus"
                              name-item="name"
                              item-key="value"
                          ></SelectBox>
                          <TextBox
                              label="Celular"
                              placeholder="0983020911"
                              model_id="customer-mobile"
                          ></TextBox>
                          <TextBox
                              label="Correo Electrónico"
                              placeholder="email@personal.com"
                              model_id="customer-email"
                          ></TextBox>
                        </v-row>
                      </v-container>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel>
                    <v-expansion-panel-header><span class="order-panel" data-order="2" aria-status="inactive"></span>Datos de Ubicación de tu Domicilio</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <v-container>
                        <v-row>
                          <SelectBox
                              label="Provincia"
                              placeholder="Selecciona tu estado civil"
                              model_id="civil-status"
                              :items="listProvince"
                              name-item="name"
                              item-key="value"
                          ></SelectBox>
                          <SelectBox
                              label="Cantón"
                              placeholder="Selecciona el cantón"
                              model_id="civil-status"
                              :items="listCanton"
                              name-item="name"
                              item-key="value"
                          ></SelectBox>
                          <SelectBox
                              label="Parroquia"
                              placeholder="Selecciona la parroquia"
                              model_id="civil-status"
                              :items="listParish"
                              name-item="name"
                              item-key="value"
                          ></SelectBox>

                        </v-row>
                      </v-container>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
                <v-container class="p-0 mt-6">
                  <v-row>
                    <v-col class="m-0">
                      <ActionPanel
                          label-prev="Regresar"
                          hide-prev-button="false"
                          label-next="Solicitar Crédito"
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
import TextBox from "@/view/content/components/TextBox";
import LastNameBox from "@/view/content/components/LastNameBox";
import DateControl from "@/view/content/components/DateControl";
import RadioButtonGroup from "@/view/content/components/RadiobuttonGroup";
import SelectBox from "@/view/content/components/SelectBox";
import ActionPanel from "@/view/content/components/ActionPanel";
//import CheckboxGroup from "@/view/content/components/CheckboxGroup";
import KTCard from "@/view/content/Card.vue";
import StatsWidget7 from "@/view/content/widgets/stats/Widget7";

export default {
  data: () => ({
    valid: false,
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
        name: "Compartir mi ubicación",
        select: false
      }
    ]
  }),
  components: {
    RadioButtonGroup,
    //CheckboxGroup,
    TextBox,
    LastNameBox,
    SelectBox,
    DateControl,
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
.v-expansion-panel:before {
    box-shadow: none !important;
}
.v-expansion-panel-content__wrap {
  padding: 0 !important;
}
.v-application--is-ltr .v-expansion-panel-header__icon {
  display: none !important;
}
.v-application--is-ltr .v-expansion-panel-header {
  text-align: left;
  padding-left: 0.9rem;
  font-size: 20px;
  font-weight: 600;
}
.order-panel {
  width: 40px;
  height: 40px;
  display: block;
  position: absolute;
  left: -30px;
}
.order-panel {
  width: 2rem;
  height: 2rem;
  display: block;
  position: absolute;
  left: -30px;
  border-radius: 50%;
  background: #074a7b;
}
.order-panel.completed {
  background: #378EF0;
}
.order-panel[aria-status="inactive"] {
  background: #E0E0E0;
}
.order-panel::before {
  content: attr(data-order);
  color: #fff;
  text-align: center;
  width: 28px;
  display: block;
  line-height: 28px;
}
.v-expansion-panel[aria-expanded="false"] .v-expansion-panel-header{
  color: #E0E0E0;
}
</style>