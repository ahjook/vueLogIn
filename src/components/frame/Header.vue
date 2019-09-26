<template>
  <div id="header">
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;color:">
      <a>
        <b-navbar-brand href="#" class="title">iTour</b-navbar-brand>
      </a>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              class="btn btn-outline-success my-2 my-sm-0"
              id="searchButton"
              type="submit"
            >Search</button>
            <button
              class="btn btn-link"
              id="login"
              style="font-size:larger"
              type="button"
              @click="redirect('/login')"
            >Log In</button>
            <button
              class="btn btn-danger"
              id="signup"
              type="button"
              data-toggle="tool-tip"
              title="Register if you don't have an account yet!"
              @click="redirect('/register')"
            >Register</button>
          </form>
        </b-navbar-nav>
      </b-collapse>
    </nav>
   
  </div>
</template>
<script>
import ROUTER from "router";
export default {
  methods: {
    redirect(route) {
      ROUTER.push(route);
    }
  }
};
</script>
<style  lang="scss">
@import "assets/style.scss";

.title {
  font-weight: 1000;
  font-family: "Times New Roman", Times, serif;
  color: $primary !important;
}



</style>