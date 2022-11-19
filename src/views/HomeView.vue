<template>
	<div class="home">
	  <Sidebar/>
	  <Content/>
	  <Sidebar/>
	</div>
  </template>
  
  <style>
  </style>
  
  <script>
  import Sidebar from "@/components/Sidebox";
  import Content from "@/components/Main";
  
  export default {
	name: 'HomeView',
	components: {
	  Content,
	  Sidebar
	}
  }
  </script>
  