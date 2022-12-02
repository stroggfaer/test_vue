<template>
  <div class="result-search__com">
    <div v-if="!users.loading && users.result.length" class="items">
      <div class="item" v-for="(item, key) in users.result" :key="key" :class="{'open': Boolean(item.id === userId)}" @click="handleToggle(item.id)">
        <div class="image">
          <img width="70" height="70" src="@/assets/no_image.webp" :alt="item.username" />
        </div>
        <div class="content">
          <div class="name bold">{{item.username}}</div>
          <div class="email">{{item.email}}</div>
        </div>
      </div>
    </div>
    <div v-else-if="!users.loading" class="text-grey default-text">
      {{isSearch ? 'ничего не найдено' : 'начните поиск'}}
    </div>
    <spinner-ul v-if="users.loading"></spinner-ul>

  </div>
</template>

<script>
import {mapGetters} from "vuex";
import {GET_USERS} from "@/store/users";
import SpinnerUl from "@/components/ul/spinner-ul";

export default {
  components: {SpinnerUl},
  props: {
    isSearch: { type: Boolean, default: false},
  },
  data() {
    return {
      userId: null,
    }
  },
  computed: {
    ...mapGetters({
      users: GET_USERS
    })
  },
  methods: {
    handleToggle(id) {
      if(this.userId === id) {
        this.userId = null;
      }else{
        this.userId = id;
      }
      this.$emit('on-user', this.userId);
    }
  },
  mounted() {
    this.userId = null;
  },
  watch: {
    isSearch() {
      this.userId = null;
    }
  }
}
</script>

<style scoped lang="scss">
.result-search__com {
  max-height: 575px;
  overflow: auto;
  margin: 0 -15px;
  .default-text {
    padding-left: $padding-content;
    padding-right: $padding-content;
  }
  .items {
    padding: $padding-content;
    .item {
      display: flex;
      border: 1px solid transparent;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      border-radius:10px;
      align-items: center;
      flex: auto;
      overflow: hidden;
      height: 70px;
      cursor: pointer;
      margin-bottom: 20px;
      @include ease();
      &.open {
        border: 1px solid $color-grey;
        .content {
          background: $color-bg-grey;
        }
      }
      &:hover {
        border: 1px solid $color-grey;
      }
      &:last-child {
        margin-bottom: 0px;
      }
      .image {
        width: 70px;
        border-right: 1px solid $color-grey;
        height: 70px;
      }
      .content {
        width: 100%;
        padding: 15px;
        .email {
          margin-top: 5px;
        }
        .email,.name {
          text-overflow: ellipsis;
          max-width: 165px;
          overflow: hidden;
          white-space: nowrap;
        }
      }
    }
  }
}

:deep(.spinner) {
  text-align: center;
  padding: 5px;
}
</style>
