<template>
	<Header/>
	<router-view/>
	<Footer/>
  </template>
  
  
  <script>
  import Header from "@/components/Header";
  import Footer from "@/components/Footer";
  
  export default {
	components: {Header, Footer}
  }
  </script>


  <style>
  * {
	margin: 0;
	padding: 0;
  }
  
  #app {
	position: relative;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	text-align: center;
	color: #2c3e50;
  }

  .home {
	padding-top: 11vh;
	padding-bottom: 1vh;
	min-height: 78vh;
	width: 100%;
	display: flex;
	gap: 5vw;
	justify-content: space-around;
  }
  
  </style>
  
