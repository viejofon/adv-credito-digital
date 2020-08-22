<template>
  <v-col cols="12" sm="12" md="12" class="position-relative pt-0 pb-0">
    <h4 v-if="label">{{label}}</h4>
    <a v-if="helpLink" href="javascript:void(0);" class="link-help" :data-infobox="helper">{{helpLink}}</a>
    <p v-if="hint">{{hint}}</p>
    <v-select
        :v-model="modelId"
        :items="items"
        :item-text="nameItem"
        :item-key="itemKey"
        :placeholder="placeholder"
        dense
        outlined
    ></v-select>
  </v-col>
</template>
<script>
export default {
  name: "SelectBox",
  props: {
    label: { type: String, required: false, default: "" },
    hint: { type: String, required: false, default: "" },
    helpLink: { type: String, required: false, default: "" },
    helper: { type: String, required: false, default: "" },
    model_id: { type: String, required: true, default: "" },
    placeholder: { type: String, required: false, default: "" },
    value: { type: String, required: false, default: "" },
    items: {
      type: Array,
      required:true
    },
    itemKey:{
      type:String,
      default: 'title',
      // validate props if you need
      //validator: function (value) {
      //  return ['title', 'name'].indexOf(value) !== -1
      // }
      // or make required
    },
    nameItem:{
      type:String,
      default: 'state',
      // validate props if you need
      //validator: function (value) {
      // validate props if you need
      // return ['state', 'deleted'].indexOf(value) !== -1
      // }
      // or make required
    }
  }
}
</script>