<template>
  <div>
    <h1>WELCOME to VUEjs REGISTER Page</h1>
    <div id="logIn">
      <h2 class="free_account text-white">Create an Account</h2>

      <p>
        <label>Full Name</label>
        <input v-model="fname" type="text" id="fullname" placeholder="First Middle Last" />
      </p>
      <p>
        <label>Username</label>
        <input v-model="uname" type="text" id="username" placeholder="Username" />
      </p>
      <p>
        <label>Email</label>
        <input v-model="uname" type="email" id="email" placeholder="Email" />
      </p>
      <p>
        <label>Password</label>
        <input v-model="password" type="password" id="password" placeholder="**********" />
      </p>
      <button @click="login">Log In</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      uname: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      console.log("Username: " + this.uname + "\nPassword: " + this.password);
      alert("Username: " + this.uname + "\nPassword: " + this.password);
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#logIn {
  width: 500px;
  padding: 20px;
  margin: 20px auto;
  background-color: #00b38f;
  border: 1px solid #ccc;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  color: white;
  margin-top: 100px;
}

#logIn input[type="text"],
input[type="password"],
input[type="email"] {
  display: inline-block; /* with block na */
  width: 400px;
  border: 1px solid #ccc;
  margin: 0;
  padding: 5px;
}

#logIn button {
  border: 1px solid #3399ff;
  background: #3399ff;
  border-radius: 5px;
  margin: 10px;
  color: #fff;
  padding: 5px;
  font-weight: bold;
  cursor: pointer;
}

/* template{
background-image: url("https://blog.pusher.com/wp-content/uploads/2017/12/getting-started-pwa-vue.png");
  background-size: cover;
} */
</style>
