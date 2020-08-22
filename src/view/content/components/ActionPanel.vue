<template>
  <v-row class="m-0">
    <v-col cols="6" sm="12" md="6">
      <v-btn v-if="hidePrevButton" outlined color="primary" dark large>
        <v-icon left>mdi-keyboard-backspace</v-icon>{{labelPrev}}
      </v-btn>
    </v-col>
    <v-col cols="6" sm="12" md="6" class="text-right">
      <v-btn v-if="hideNextButton" color="primary" dark large>{{labelNext}}</v-btn>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: "ActionPanel",
    props: {
      labelPrev: { type: String, required: false, default: "" },
      hidePrevButton: { type: Boolean, required: false, default: false },
      labelNext: { type: String, required: false, default: "" },
      hideNextButton: { type: Boolean, required: false, default: false },
    }
  }
</script>