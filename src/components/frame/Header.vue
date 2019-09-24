<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
        <img width="40" height="40" src="assets/iTourLogo.png" ><br><br>
        <a class="navbar-brand" id="logoName" href="#">iTour</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" id="searchButton" type="submit">Search</button>
            <button class="btn btn-link" id="login" style ="font-size:larger"  type="button" @click="redirect('/login')">Log In</button>
            <button class="btn btn-danger" id="signup" type="button" data-toggle="tool-tip" title="Register if you don't have an account yet!" @click="redirect('/register')">Register</button>
            </form>
        </div>
    </nav>
    <!-- <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#" class="title">MyFirstApp</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item @click="redirect('/login')">Login</b-nav-item>
          <b-nav-item @click="redirect('/register')">Register</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar> -->
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
<style scoped lang="scss">
@import "assets/style.scss";

.title {
  color: $danger !important;
}
</style>