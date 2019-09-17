<template>
  <div id="app">
     <div id="nav">
            <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
        </div>
        <router-view @authenticated="setAuthenticated" />
    <LogInForm msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import LogInForm from './components/Form.vue'

export default {
  name: 'app',
  data() {
            return {
                authenticated: false,
                logAccount: {
                    email: "example@email.com",
                    password: "**********"
                }
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        },
  components: {
    LogInForm
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


  

</style>
