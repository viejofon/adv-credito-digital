<template>
  <v-col cols="12" sm="12" md="12" class="position-relative pt-0 pb-0">
    <h4 v-if="label">{{label}}</h4>
    <a v-if="helpLink" href="javascript:void(0);" class="link-help" :data-infobox="helper">{{helpLink}}</a>
    <p v-if="hint">{{hint}}</p>
    <v-row>
      <v-col class="d-flex pb-0 pt-0" cols="4" sm="4">
        <v-select
            :items="year"
            placeholder="Año"
            dense
            outlined
        ></v-select>
      </v-col>
      <v-col class="d-flex pb-0 pt-0" cols="4" sm="4">
        <v-select
            :items="month"
            placeholder="Mes"
            dense
            outlined
        ></v-select>
      </v-col>
      <v-col class="d-flex pb-0 pt-0" cols="4" sm="4">
        <v-select
            :items="day"
            placeholder="Día"
            dense
            outlined
        ></v-select>
      </v-col>
    </v-row>
  </v-col>
</template>
<script>
export default {
  name: "DateControl",
  props: {
    label: { type: String, required: false, default: "" },
    hint: { type: String, required: false, default: "" },
    helpLink: { type: String, required: false, default: "" },
    helper: { type: String, required: false, default: "" },
    modelId: { type: String, required: true, default: "" },
    value: { type: String, required: false, default: "" }
  },
  data: () => ({
    year: ['1980', '1981', '1982', '1983'],
    month: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    day: ['1', '2', '3', '4','5', '6', '7', '8','9', '10'],
  }),
}
</script>