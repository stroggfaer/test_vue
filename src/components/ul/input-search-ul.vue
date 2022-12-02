<template>
  <div class="search-input">
    <input
        v-model="search"
        class="form-control"
        :placeholder="placeholder"
        @input="handleInputSearch"
    >
    <div v-if="visibleClear" class="input-close" @click="handleClear">
      <svg width="18" height="18" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.5 3.5L8.5 8.5" stroke="#76787D" stroke-width="0.7"/>
        <path d="M8.5 3.5L3.5 8.5" stroke="#76787D" stroke-width="0.7"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: { type: String, default: 'Введите Id или имя' },
  },
  data() {
    return {
      search: '',
      delaySelects: 1000,
      currentTimeoutSelects: undefined,
      visibleClear: false
    }
  },
  methods: {
    handleInputSearch() {
      if (this.search && this.search.length) {
        this.visibleClear = true;
        this.cancelTimeout()
        this.currentTimeoutSelects = setTimeout(async () => {
           this.$emit('on-change', this.search)
        }, this.delaySelects)
      }else{
        this.search = '';
        this.$emit('on-change', null)
      }
    },

    handleClear () {
      this.cancelTimeout()
      this.search = ''
      this.visibleClear = false
      this.$emit('on-clear', null);
    },

    cancelTimeout () {
      clearTimeout(this.currentTimeoutSelects)
      this.currentTimeoutSelects = undefined
    },
  },
  beforeDestroy () {
    this.cancelTimeout()
  },
  mounted() {

  }
}
</script>

<style scoped lang="scss">
  .search-input {
  width: 240px;
  position: relative;
  .input-close {
    cursor: pointer;
    position: absolute;
    top: 32%;
    right: 8px;
    opacity: .9;
    @include  ease();
    &:hover {
      opacity: .6;
    }
  }
}
</style>
