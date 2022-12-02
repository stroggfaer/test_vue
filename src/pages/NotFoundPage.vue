<template>
  <div class="wrap">
   <Header></Header>
   <Container>
     <div class="text-center-flex">
       <div class="t_404">404</div>
     </div>

   </Container>
  </div>
</template >
<script>
import Header from "@/components/Header";
import Container from "@/components/Container";

export default {
  components: {
    Container,
    Header
  },
}
</script>

<style scoped lang="scss">
 .t_404 {
   font-weight: bold;
   text-align: center;
   font-size: 2em;
   width: 100%;
 }
</style>
