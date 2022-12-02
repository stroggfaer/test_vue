<template>
  <div class="header">
    <div class="flex">
      <div class="title">Жилфонд</div>
      <div class="user">Пользователь</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped lang="scss">
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      color: $color-red;
      font-weight: 700;
      font-size: 32px;
      line-height: 39px;
    }
  }
</style>
