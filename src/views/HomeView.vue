<template>
	<div class="home">
	  <Sidebar/>
	  <Content/>
	  <Sidebar/>
	  <ResetBtn/>
	</div>
  </template>
  
  <style>
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
  