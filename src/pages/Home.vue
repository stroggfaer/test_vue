<template>
  <div class="wrap">
      <Header></Header>
      <Container>
        <div class="sidebar">
          <div class="title bold font-16">Поиск сотрудников</div>
           <input-search-ul  @on-change="handleSearch" @on-clear="handleClearSearch"/>
           <div class="title bold font-16">Результаты</div>
           <list-user @on-user="handleUser" :is-search="isSearch"></list-user>
        </div>
         <div class="main active">
            <view-user></view-user>
         </div>
      </Container>
  </div>
</template>

<script>

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import InputSearchUl from "@/components/ul/input-search-ul";
import SpinnerUl from "@/components/ul/spinner-ul";
import ViewUser from "@/components/user/view-user";
import ListUser from "@/components/user/list-user";
import {FETCH_USER, FETCH_USERS, GET_USER, RESET_USER, RESET_USERS} from "@/store/users";

export default {
  name: "home",

  components: {
    ListUser,
    ViewUser,
    SpinnerUl,
    InputSearchUl,
    Container,
    Footer,
    Header
  },
  data() {
    return {
      search: '',
      isSearch: false,
    }
  },
  computed: {},
  methods: {

    async handleSearch (v) {
      this.search = v;
      const params = {search: v}
      await this.fetchUsers(params);
      this.isSearch = true;

    },

    async handleClearSearch() {
       this.search = '';
       this.isSearch = false;
       await this.$store.dispatch(RESET_USERS);
       await this.$store.dispatch(RESET_USER);
    },

    async handleUser(userId) {
      await this.fetchUserView(userId);
    },

    async fetchUsers (params = {}) {
      await this.$store.dispatch(FETCH_USERS, {query: params});
    },

    async fetchUserView (userId) {
       if(userId) {
         await this.$store.dispatch(FETCH_USER, userId)
       }else{
         await this.$store.dispatch(RESET_USER)
       }
    }

  },

  mounted() {
    this.$nextTick(async () => {});
  }
}
</script>

<style scoped lang="scss">
 .main {
  // width: 975px;
   flex: auto;
   padding: 25px;
   &.active {
     background: $color-light-grey;
   }
 }
 .sidebar {
   width: 291px;
   flex: 0 0 291px;
   min-height: 100%;
   background: $color-light-grey;
   border-right: 1px solid $color-grey;
   border-radius: 10px 0 0 10px;
   padding:  $padding-content;
   overflow: hidden;
   .title,.search-input {
     margin-bottom: 20px;
   }
   .default {

   }
 }






</style>
