<template>
  <div>
    <div class="row">
      <div class="col-xxl-8">
        <KTCard ref="preview" v-bind:title="title" v-bind:example="false">
          <template v-slot:title v-if="hasTitleSlot">
            <h3 class="card-title">
              <slot name="title">Simulador de Crédito</slot>
            </h3>
          </template>
          <template v-slot:body>
            <h2>Establece la cantidad de dinero y el tiempo que necesitas para tu préstamo</h2>
            <v-form v-model="valid">
              <v-container>
                <v-row>
                  <RadioButtonGroup
                      label="¿Cuál es la fuente de tus ingresos?"
                      :items="incomeSource"
                      item-value="name"
                      item-model="value"
                  ></RadioButtonGroup>
                  <RadioButtonGroup
                      label="¿Cómo prefieres pagar tus cuotas?"
                      :items="paymentPreference"
                      item-value="name"
                      item-model="value"
                  ></RadioButtonGroup>
                  <TextBox
                    label="¿Cuánto necesitas?"
                    hint="El encaje para tu préstamo es del 10% del monto que necesites."
                    placeholder="Ej. 1200 USD"
                    helpLink="¿Necesitas ayuda?"
                    helper="nombre-infobox"
                    model_id="amount"
                  ></TextBox>
                  <TextBoxAction
                    label="¿Cuánto tiempo necesitas para pagar tu préstamo?"
                    hint="El tiempo máximo de pago varía dependiendo del monto que necesites."
                    placeholder="Ej. 24 meses"
                    helpLink="¿Necesitas ayuda?"
                    helper="nombre-infobox"
                    model_id="amount"
                  >
                  </TextBoxAction>
                  <CheckboxGroup
                      label="¿Cómo prefieres pagar tus cuotas?"
                      :items="aceptshareLocation"
                      item-value="name"
                      item-model="value"
                  ></CheckboxGroup>
                  <v-col cols="12" sm="12" md="12" class="msg-justification">
                    <h4>¿Por qué debo compartir mi ubicación?</h4>
                    <p>Al compartir tu ubicación podremos direccionar tu requerimiento de mejor manera.</p>
                  </v-col>
                  <ActionPanel
                      label-prev="Regresar"
                      hide-prev-button="false"
                      label-next="Solicitar Crédito asddsa"
                      hide-next-button="false"
                  >
                  </ActionPanel>
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
import RadioButtonGroup from "@/view/content/components/RadiobuttonGroup";
import TextBoxAction from "@/view/content/components/TextBoxAction";
import ActionPanel from "@/view/content/components/ActionPanel";
import CheckboxGroup from "@/view/content/components/CheckboxGroup";
import KTCard from "@/view/content/Card.vue";
import StatsWidget7 from "@/view/content/widgets/stats/Widget7";

export default {
  data: () => ({
    valid: false,
    incomeSource: [
      {
        id: 1,
        name: "Sueldo",
        value: "sueldo"
      },
      {
        id: 2,
        name: "Negocio Propio",
        value: "negocio_propio"
      }
    ],
    paymentPreference: [
      {
        id: 1,
        name: "Cuota Fija",
        value: "cuota_fija"
      },
      {
        id: 2,
        name: "Cuota Variable",
        value: "cuota_variable"
      }
    ],
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
    CheckboxGroup,
    TextBox,
    TextBoxAction,
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