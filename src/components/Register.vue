<template>
  <div>
   <div id="loginwrap" style="display:block">
      <!--wrap start-->
      <div id="login2">
        <!--wrap2 start-->

        <h2 class="free_account text-white">Register Here!</h2>

        <form id="log_inform">
          <p>
            <label>First Name</label>
            <input v-model="fname" type="text" placeholder="First Name" />
          </p>
          <p>
            <label>Middle Name</label>
            <input v-model="mname" type="text" placeholder="Middle Name" />
          </p>
          <p>
            <label>Last Name</label>
            <input v-model="lname" type="text" placeholder="Last Name" />
          </p>
          <p>
            <label>Email Address</label>
            <input v-model="email" type="email" placeholder="Last Name" />
          </p>
          <p>
            <label>Username</label>
            <input v-model="uname" type="text" id="username" placeholder="Username" />
          </p>
          <p>
            <label for="password">Password</label>
            <input v-model="password" name="password" id="logPass" type="password" placeholder="********"/>
          </p>
          <input type="submit" @click="register" name="submit" id="logSub" value="Register" />
        </form>
      </div>
      <!--wrap2 end-->
    </div>
    <!--wrap start-->
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      fname:"",
      mname:"",
      lname:"",
      email:"",
      uname: "",
      password: ""
    };
  },
  methods: {
    register: function() {
      console.log("Name: " + this.fname+" "+this.mname+" "+this.lname + "\nEmail Address: " + this.email+"\nUsername: " + this.uname + "\nPassword: " + this.password);
      alert("Name: " + this.fname+" "+this.mname+" "+this.lname + "\nEmail Address: " + this.email+"\nUsername: " + this.uname + "\nPassword: " + this.password);
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

/* template{
background-image: url("https://blog.pusher.com/wp-content/uploads/2017/12/getting-started-pwa-vue.png");
  background-size: cover;
} */


</style>
