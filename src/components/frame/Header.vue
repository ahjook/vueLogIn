<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#" class="title">MyFirstApp</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item @click="redirect('/login')">Login</b-nav-item>
          <b-nav-item>Register</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import ROUTER from "router";
export default {
  name: "home",
  methods: {
    redirect(route) {
      ROUTER.push(route);
    }
  }
};
</script>
<style scoped lang="scss">
@import "assets/style.scss";

.title {
  color: $danger !important;
}
</style>