<template>
  <div>
    <div id="loginwrap" style="display:block">
      <!--wrap start-->
      <div id="login2">
        <!--wrap2 start-->

        <h2 class="free_account text-white">Log In Account</h2>

        <form id="log_inform">
          <p>
            <label>Username</label>
            <input v-model="uname" type="text" id="username" placeholder="Username" />
          </p>
          <p>
            <label for="password">Password</label>
            <input v-model="password" name="password" id="logPass" type="password" placeholder="********" />
          </p>
          <input type="submit" @click="login" name="submit" id="logSub" value="Log In" />
        </form>
      </div>
      <!--wrap2 end-->
    </div>
    <!--wrap start-->
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      uname: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      console.log("Username: "+this.uname+"\nPassword: "+this.password),
      alert("Username: "+this.uname +"\nPassword: "+this.password)
    }
  }
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#wrap,
#loginwrap {
  width: 500px;
  padding: 20px;
  margin: 20px auto;
  background-color: rgba(192, 192, 192, 0.5);
  border: 1px solid #ccc;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  color: white;
  margin-top: 100px;
}
div#wrap2,
div#login2 {
  border: 1px solid #cccccc;
  margin-bottom: 10px;
  padding: 15px;
}
h2.free_account {
  color: #3399ff;
  display: block;
  margin-bottom: 25px;
}
form#register_form label,
form#log_inform label {
  display: inline-block; /* with block na */
  width: 125px;
  font-weight: bold;
}
form#register_form label:after,
form#log_inform label:after {
  content: ":";
}
form#register_form input[type="text"],
input[type="password"] {
  display: inline-block; /* with block na */
  width: 400px;
  border: 1px solid #ccc;
  margin: 0;
  padding: 5px;
}

form#log_inform input[type="text"],
input[type="password"],
input[type="email"] {
  display: inline-block; /* with block na */
  width: 400px;
  border: 1px solid #ccc;
  margin: 0;
  padding: 5px;
}

form#register_form select {
  border: 1px solid #cccccc;
  display: inline-block;
  margin: 0;
  padding: 5px 0;
  width: 68px;
  color: black;
}
form#register_form input[name="submit"] {
  border: 1px solid #3399ff;
  background: #3399ff;
  border-radius: 5px;
  margin: 10px;
  color: #fff;
  padding: 5px;
  font-weight: bold;
  cursor: pointer;
}
form#log_inform input[name="submit"] {
  border: 1px solid #3399ff;
  background: #3399ff;
  border-radius: 5px;
  margin: 10px;
  color: #fff;
  padding: 5px;
  font-weight: bold;
  cursor: pointer;
}
p.validate_msg {
  border: 1px solid #ff0000;
  font-weight: bold;
  padding: 10px;
  display: none;
  margin-bottom: 25px;
}
span.validate {
  color: #f00;
  padding-left: 8px;
  font-style: italic;
}
</style>
