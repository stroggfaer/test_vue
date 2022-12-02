<template>
  <div id="app">
       <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
}
</script>

<style lang="scss">
#app {

}
body,html {
  margin: 0;
  padding: 0;
  height: 100%;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
html {
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 400;
  font-size: 14px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: $color-black;
  background:$color-white;
}

/*Макет*/
.wrap {
  min-width: 1300px;
  margin: auto;
  max-width: 1296px;
  height: 80vh;
  min-height: 100%;
  padding-left: $padding-content;
  padding-right: $padding-content;
}

.header {
  padding-top: 25px;
  padding-bottom: 25px;
}

.footer {
  outline: 1px solid #000;
  height: 50px;
}




</style>
