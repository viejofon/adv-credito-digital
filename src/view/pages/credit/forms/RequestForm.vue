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
            <h2>Excelente {Nombre del Cliente}, te estábamos esperando por favor completa la información solicitada.</h2>
            <v-form v-model="valid">
              <v-expansion-panels
                  v-model="panel"
                  accordion="true"
                  multiple
              >
                <v-expansion-panel active-class="v-item--active">
                  <v-expansion-panel-header><span class="order-panel completed" data-order="1" aria-status="active"></span>Datos de Domicilio</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-container>
                      <v-row>
                        <SelectBox
                            label="Tipo de Vivienda"
                            placeholder="Selecciona tu tipo de vivienda"
                            model_id="type-housing"
                            :items="listTypeHousing"
                            name-item="name"
                            item-key="value"
                        ></SelectBox>
                        <TextBox
                            label="Calle Principal"
                            placeholder="Ej: Av. Amazonas"
                            model_id="main-street"
                        ></TextBox>
                        <TextBox
                            label="Calle Secundaria"
                            placeholder="Ej: Av. Veintimilla"
                            model_id="secondary-street"
                        ></TextBox>
                        <TextBox
                            label="No. de Inmueble"
                            placeholder="Ej: N24-15"
                            model_id="house-number"
                        ></TextBox>
                        <TextBox
                            label="Teléfono"
                            placeholder="Ej: 02 233 3313"
                            model_id="phone-number"
                        ></TextBox>
                      </v-row>
                    </v-container>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header><span class="order-panel completed" data-order="2" aria-status="inactive"></span>Nivel de Educación</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-container>
                      <v-row>
                        <SelectBox
                            label="Nivel de Instrucción"
                            placeholder="Selecciona tu nivel de instrucción"
                            model_id="civil-status"
                            :items="listProvince"
                            name-item="name"
                            item-key="value"
                        ></SelectBox>
                        <SelectBox
                            label="Profesión"
                            placeholder="Selecciona tu profesión"
                            model_id="civil-status"
                            :items="listCanton"
                            name-item="name"
                            item-key="value"
                        ></SelectBox>
                      </v-row>
                    </v-container>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header><span class="order-panel" data-order="3" aria-status="inactive"></span>Datos Laborales</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-container>
                      <v-row>
                        <SelectBox
                            label="Actividad Económica"
                            placeholder="Selecciona tu actividad económica"
                            model_id="economic-activity"
                            :items="listProvince"
                            name-item="name"
                            item-key="value"
                        ></SelectBox>
                        <SelectBox
                            label="Situación Laboral"
                            placeholder="Selecciona tu situación laboral"
                            model_id="laboral-status"
                            :items="listCanton"
                            name-item="name"
                            item-key="value"
                        ></SelectBox>
                        <TextBox
                            label="Nombre de la Empresa"
                            placeholder="Ej: CONECEL S.A."
                            model_id="company-name"
                        ></TextBox>
                        <SelectBox
                            label="Actividad Económica de la Empresa"
                            placeholder="Selecciona al actividad económica de la empresa"
                            model_id="company-economic-activity"
                            :items="listCanton"
                            name-item="name"
                            item-key="value"
                        ></SelectBox>
                        <DateControl
                            label="Fecha de Ingreso"
                            model-id="admission-date"
                        ></DateControl>
                        <SelectBox
                            label="Cargo"
                            placeholder="Ej: Gerente Financiero"
                            model_id="job-description"
                            :items="listCanton"
                            name-item="name"
                            item-key="value"
                        ></SelectBox>
                      </v-row>
                    </v-container>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header><span class="order-panel" data-order="4" aria-status="inactive"></span>Situación Financiera</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-container>
                      <v-row>
                        <TextBox
                            label="Cargas familiares"
                            placeholder="Ej: 4"
                            model_id="family-responsibilities"
                        ></TextBox>
                        <TextBox
                            label="Activos"
                            placeholder="Ej: 5.700 USD"
                            model_id="assets"
                        ></TextBox>
                        <TextBox
                            label="Pasivos"
                            placeholder="Ej: 2.300 USD"
                            model_id="liabilities"
                        ></TextBox>
                        <SelectBox
                            label="Destino del Crédito"
                            placeholder="Selecciona el destino de tu crédito"
                            model_id="loan-destination"
                            :items="listProvince"
                            name-item="name"
                            item-key="value"
                        ></SelectBox>
                        <SelectBox
                            label="Actividad Económica del Crédito"
                            placeholder="Selecciona la actividad económica del crédito"
                            model_id="loan-economic-activity"
                            :items="listCanton"
                            name-item="name"
                            item-key="value"
                        ></SelectBox>
                      </v-row>
                    </v-container>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header><span class="order-panel" data-order="5" aria-status="inactive"></span>Referencia Personal</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-container>
                      <v-row>
                        <TextBox
                          label="Nombres y Apellidos"
                          placeholder="Ingresa el nombre completo"
                          model_id="name-reference"
                        ></TextBox>
                        <TextBox
                            label="Celular"
                            placeholder="Ej: 0998291711"
                            model_id="mobile-reference"
                        ></TextBox>
                        <TextBox
                            label="Dirección"
                            placeholder="Ej: Mariana de Jesús Oe3-191 y Ulloa"
                        ></TextBox>
                        <SelectBox
                            label="Parentesco"
                            placeholder="Selecciona la relación de parentesco"
                            model_id="parental-status"
                            :items="listProvince"
                            name-item="name"
                            item-key="value"
                        ></SelectBox>
                      </v-row>
                    </v-container>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
              <v-container class="p-0">
                <v-row>
                  <v-col class="m-0">
                    <CheckboxGroup
                        label="¿Has revisado que la información ingresada esté correcta?"
                        :items="aceptshareLocation"
                        item-value="name"
                        item-model="value"
                        class="mb-5"
                    ></CheckboxGroup>
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
import DateControl from "@/view/content/components/DateControl";
import SelectBox from "@/view/content/components/SelectBox";
import ActionPanel from "@/view/content/components/ActionPanel";
import CheckboxGroup from "@/view/content/components/CheckboxGroup";
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
        name: "Confirmo que la información ingresada está correcta.",
        select: false
      }
    ]
  }),
  components: {
    CheckboxGroup,
    TextBox,
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
}
.v-expansion-panel[aria-expanded="true"] .v-expansion-panel-header .order-panel {
  background: #074a7b;
}
.order-panel.completed,
.v-expansion-panel[aria-expanded="true"] .v-expansion-panel-header .order-panel.completed {
  background: #378EF0;
}
.order-panel[aria-status="inactive"],
.v-expansion-panel[aria-expanded="false"] .v-expansion-panel-header .order-panel {
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
.order-panel.completed:before,
.v-expansion-panel[aria-expanded="true"] .v-expansion-panel-header .order-panel.completed::before {
  content: "";
  background: url("/media/svg/icons/Code/icn-check.svg") no-repeat 0 0;
  display: block;
  width: 28px;
  height: 28px;
}
.v-expansion-panel[aria-expanded="false"] .v-expansion-panel-header {
  color: #E0E0E0;
}
</style>