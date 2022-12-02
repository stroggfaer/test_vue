<template>
 <div class="view">
   <div v-if="!user.result" class="text-center-flex">
     <div class="text-grey text-default">
       <span v-if="!user.loading">Выберите сотрудника, чтобы посмотреть его профиль</span>
       <spinner-ul v-if="user.loading" />
     </div>
   </div>
   <div v-if="!user.loading && user.result" class="view__user">
     <div class="image empty-img ">
       <img src="@/assets/no_image.webp" :alt="user.result.username" />
     </div>
     <div class="content">
       <h1 class="title">{{user.result.username}}</h1>
       <view-title
           label="email:"
           :value="user.result.email"
       />
       <view-title
           label="phone:"
           :value="user.result.phone"
       />
       <view-title
           is-line
           label="О себе:"
           value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
"
       />
     </div>
   </div>
 </div>
</template>

<script>
import ViewTitle from "@/components/shared/view-title";
import {mapGetters} from "vuex";
import {GET_USER, GET_USERS} from "@/store/users";
import SpinnerUl from "@/components/ul/spinner-ul";
export default {
  components: {SpinnerUl, ViewTitle},
  computed: {
    ...mapGetters({
      user: GET_USER
    })
  },

}
</script>

<style scoped lang="scss">
.view {
  height: 100%;
}
.view__user {
  display: flex;
  .image {
    width: 424px;
    height: 286px;
    flex: 0 0 424px;
    margin-right: 60px;
    &.empty-img {
      border: 1px solid $color-grey;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .content {
    .title {
      margin-bottom: 15px;
    }
  }
}
.text-default {
  flex: auto;
}
</style>
