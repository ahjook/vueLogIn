<template>
<div>
	<h1>WELCOME to VUEjs LOGin PAGE</h1>
  <div id="logIn">
	  	
        <h2 class="free_account text-white">Log In Account</h2> 
        
          
                <p> <label>Your Email</label> <input v-model="input.email" type="email" placeholder="example@email.com" /> </p>
                <p> <label>Password</label>  <input v-model="input.password" type="password" placeholder="**********"/></p>
                <input type="button" v-on:click="login()" id="logSub" value="Log In">
  
    </div> 
</div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    email: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.logAccount.username && this.input.password == this.$parent.logAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "secure" });
                    } else {
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
            }
        }
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#logIn { 
	width:500px; 
	padding:20px; 
	margin:20px auto;
	background-color:#00b38f;
	border:1px solid #ccc;
	-moz-border-radius:10px;
	-webkit-border-radius:10px;
	color: white;
	margin-top: 100px;
}

#logIn input[type='text'], input[type='password'],input[type='email']{ 
	display:inline-block; /* with block na */
	width:400px;
	border:1px solid #ccc;
	margin:0;
	padding:5px;
}

#logIn input[name='submit'] { 
	border:1px solid #3399FF;
	background:#3399FF;
	border-radius: 5px;
	margin:10px;
	color:#FFF;
	padding:5px;
	font-weight:bold;
	cursor:pointer;
	}

/* template{
background-image: url("https://blog.pusher.com/wp-content/uploads/2017/12/getting-started-pwa-vue.png");
  background-size: cover;
} */
</style>
