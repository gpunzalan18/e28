<template>
  <div class="form-group">
    <label :for="id" class="col-xs-3 control-label">{{ label }}</label>
    <div class="col-xs-6">
      <input v-if="type == 'input'" class="form-control" :id="id" />
      <textarea v-else-if="type == 'textarea'" class="form-control" rows="4" :id="id"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInput",
  props: ["type", "label"],
  data: function() {
    return {};
  },
  computed: {
    id: function() {
      let test = this.label.replace(" ", "-").toLowerCase() + "-" + this.type;
      console.log(test);
      return test;
    }
  }
};
</script>

<style>
</style>