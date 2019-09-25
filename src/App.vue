<template>
  <div id="app">
    <Header></Header>
    <!-- <LogInForm></LogInForm>  -->
    <AppBody></AppBody>
  </div>
</template>

<script>
// import LogInForm from "./components/Form.vue";
import Header from "components/frame/Header.vue";
import AppBody from "components/frame/Body.vue";

export default {
  name: "app",
  components: {
    // LogInForm,
    Header,
    AppBody
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("http://static.asiawebdirect.com/m/phuket/portals/philippines-hotels-ws/homepage/cebu-island/best-cebu-attractions/pagePropertiesImage/best-cebu-attractions.jpg");
  background-size: cover;
}


</style>
