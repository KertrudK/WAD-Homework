<template>
	<nav>
	  <router-link to="/">Home</router-link>
	  <router-link to="/signup">Sign up</router-link>
	</nav>
  </template>
  
  <script>
  export default {
	name: "Header"
  }
  </script>
  
  <style scoped>
  nav {
	position: fixed;
	display: flex;
	box-sizing: border-box;
	width: 100%;
	height: 10vh;
	background-color: #f7ebe4;
	border-radius: 5px;
	align-items: center;
	justify-content: space-between;
	padding: 0 3% 0 3%;
	font-size: x-large;
	z-index: 1;
  }
  
  a {
	font-weight: bold;
	color: darkorange;
	text-decoration: none;
  }
  
  a.router-link-exact-active {
	color: #e8cebf;
  }
  </style>