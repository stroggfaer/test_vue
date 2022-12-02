<template>
  <div class="view-title" :class="{'line': isLine}">
    <div class="label bold" > {{ label}}</div>
    <div class="value text-grey" v-html="value"></div>
  </div>
</template>

<script>
export default {
  props: {
    label: { type: String},
    value: { type: String},
    isLine: { type: Boolean, default: false},
  },
}
</script>

<style scoped lang="scss">
  .view-title {
    display: flex;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0px;
    }
    &.line {
      display: block;
      .value {
        margin-top: 15px;
      }
    }
    .label {
      white-space: nowrap;
      margin-right: 15px;
    }
    .value {}
  }
</style>
