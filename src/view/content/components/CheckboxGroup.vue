<template>
  <v-col cols="12" sm="12" md="12" class="position-relative pt-0 pb-0">
    <h4 v-if="label">{{label}}</h4>
    <a v-if="helpLink" href="javascript:void(0);" class="link-help" :data-infobox="helper">{{helpLink}}</a>
    <p v-if="hint">{{hint}}</p>
    <v-checkbox
      v-for="(item, index) in items"
      :key="index"
      v-model="item[itemModel]"
      :label="item[itemValue]"
    ></v-checkbox>
  </v-col>
</template>
<script>
export default {
  name: "CheckboxGroup",
  props: {
    label: { type: String, required: false, default: "" },
    hint: { type: String, required: false, default: "" },
    helpLink: { type: String, required: false, default: "" },
    helper: { type: String, required: false, default: "" },
    items: {
      type: Array,
      required:true
    },
    itemValue:{
      type:String,
      default: 'title',
      // validate props if you need
      //validator: function (value) {
      //  return ['title', 'name'].indexOf(value) !== -1
      // }
      // or make required
    },
    itemModel:{
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
};
</script>