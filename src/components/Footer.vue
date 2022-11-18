<template>
	<footer>
	  <p>Tartu Ülikool WAD Course ©</p>
	</footer>
  </template>
  
  <script>
  export default {
	name: "Footer"
  }
  </script>
  
  <style scoped>
  footer {
	width: 100%;
	box-sizing: border-box;
	display: flex;
	height: 10vh;
	background-color: #f7ebe4;
	border-radius: 5px;
	align-items: center;
	justify-content: center;
	padding: 0 3% 0 3%;
  }
  
  p {
	font-size: small;
  }
  </style>