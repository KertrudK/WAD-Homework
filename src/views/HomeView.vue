<template>
	<div class="home">
	  <Sidebar/>
	  <Content/>
	  <Sidebar/>
	  <ResetBtn/>
	</div>
  </template>
  
  <style scoped>
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
  
  <script>
  import Sidebar from "@/components/Sidebox";
  import Content from "@/components/Main";
  import ResetBtn from "@/components/ResetBtn";
  
  export default {
	name: 'HomeView',
	components: {
	  Content,
	  Sidebar,
	  ResetBtn
	}
  }
  </script>
  