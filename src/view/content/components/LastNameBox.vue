<template>
  <v-col cols="12" sm="12" md="12" class="position-relative pt-0 pb-0">
    <h4 v-if="label">{{label}}</h4>
    <a v-if="helpLink" href="javascript:void(0);" class="link-help" :data-infobox="helper">{{helpLink}}</a>
    <p v-if="hint">{{hint}}</p>
    <v-row>
      <v-col class="d-flex pb-0 pt-0" cols="6" sm="6">
      <v-text-field
          :v-model="modelIdLastName"
          placeholder="Primer Apellido"
          :value="value"
          outlined
      >
      </v-text-field>
      </v-col>
      <v-col class="d-flex pb-0 pt-0" cols="6" sm="6">
      <v-text-field
          :v-model="modelIdMiddleLastName"
          placeholder="Segundo Apellido"
          :value="value"
          outlined
      ></v-text-field>
      </v-col>
    </v-row>
  </v-col>
</template>
<script>
export default {
  name: "LastNameBox",
  props: {
    label: { type: String, required: false, default: "" },
    hint: { type: String, required: false, default: "" },
    helpLink: { type: String, required: false, default: "" },
    helper: { type: String, required: false, default: "" },
    modelIdLastName: { type: String, required: true, default: "" },
    modelIdMiddleLastName: { type: String, required: true, default: "" },
    value: { type: String, required: false, default: "" }
  }
}
</script>