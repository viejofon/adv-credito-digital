<template>
  <v-col cols="12" sm="12" md="12" class="position-relative pt-0 pb-0">
    <h4 v-if="label">{{label}}</h4>
    <a v-if="helpLink" href="javascript:void(0);" class="link-help" :data-infobox="helper">{{helpLink}}</a>
    <p v-if="hint">{{hint}}</p>
    <v-row class="ml-0 mr-0">
      <v-text-field class="col-md-8 pr-4" v-model="plazo" outlined placeholder="Ej. 24 meses"></v-text-field>
      <v-btn class="col-md-4 simulate" :loading="loading4" :disabled="loading4" color="primary" dark large  @click="loader = 'loading4'">
        Simular Cuota
        <span class="icon-button">
          <inline-svg src="media/svg/icons/Actions/icn-calculate.svg"/>
        </span>
        <template v-slot:loader>
          <span class="custom-loader"><v-icon light>cached</v-icon></span>
        </template>
      </v-btn>
    </v-row>
  </v-col>
</template>
<script>
export default {
  name: "TextBoxAction",
  props: {
    label: { type: String, required: false, default: "" },
    hint: { type: String, required: false, default: "" },
    helpLink: { type: String, required: false, default: "" },
    helper: { type: String, required: false, default: "" },
    model_id: { type: String, required: true, default: "" },
    placeholder: { type: String, required: false, default: "" },
    value: { type: String, required: false, default: "" }
  }
}
</script>