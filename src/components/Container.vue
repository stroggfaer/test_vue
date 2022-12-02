<template>
  <div class="container">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "Main"
}
</script>

<style scoped lang="scss">
  .container {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    height: 100%;
    min-height: 300px;
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-basis: auto;
    width: 100%;
  }
</style>
