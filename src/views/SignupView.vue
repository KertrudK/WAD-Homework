<template>
	<div class="login">
	  <div class="content">
	  <form action="index.html" method="post">
		<p>Email</p>
		<input type="email" name = "email" placeholder="Email" required="required">
		<br><br>
		<p>Password</p>
		<input type="password" placeholder="Password" required="required">
		<br><br>
		<input type="submit" class="login-button" value="Signup">
	  </form>
	</div>
	</div>
  </template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'SignUpView',
  components: {
	Header, Footer
  }
}
</script>
  
  <style scoped>
  
  .login {
	padding-top: 11vh;
	padding-bottom: 1vh;
	min-height: 78vh;
	width: 100%;
	display: flex;
	gap: 5vw;
	justify-content: space-around;
  }
  
  .center-box {
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  height: 100%;
	  padding: 0 0; 
	  justify-content: space-evenly;
	}
  
  div strong {
	  color: rgb(0, 0, 0);
	  font-size: 25px;
  }
  
  .content {
	  display: flex;
	  flex-direction:column;
	  align-items: center;
	  justify-content: space-between;
	  margin-bottom: 20px;
  }
  
  .login-button {
	  font-size: 20px;
	  margin: 10px 10% 0 25%;
	  background-color: #266150;;
	  border: none;
	  color: white;
	  padding: 10px 20px;
	  border-radius: 5px;
	  cursor: pointer;
  }
  
  .login-button:hover {
	  background-color: #9edecb;
  }
  .content p {
	  margin: 25px 0 0 0;
	  
  }
  p::first-line {
	  font-size:x-large;
  }
  </style>