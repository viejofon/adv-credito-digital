<template>
  <v-col cols="12" sm="12" md="12" class="position-relative pt-0 pb-0">
    <h4 v-if="label">{{label}}</h4>
    <a v-if="helpLink" href="javascript:void(0);" class="link-help" :data-infobox="helper">{{helpLink}}</a>
    <p v-if="hint">{{hint}}</p>
    <v-text-field
        :v-model="model_id"
        :placeholder="placeholder"
        :value="value"
        outlined
    >
    </v-text-field>
  </v-col>
</template>

<script>
export default {
  name: "InputSecurityCode"
}
</script>