<template>
	<div id="app">
		<Header />
		<div id="main">
			<div class="center-area">
				<router-view />
			</div>
		</div>
		<Footer />
	</div>
</template>
<script>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">

html {
	height: 100%;
	width: 100%;
}

body {
	height: 100%;
	width: 100%;
	background-color: rgb(34, 142, 185);
	position: relative;
	margin: 0;
	font-family: "Roboto", sans-serif;
}

#main {
	flex-grow: 1;
}

#app {
  height: 100%;
	display: flex;
	flex-flow: column nowrap;
	align-items: stretch;
}

.center-area {
    background-color: rgb(245, 245, 245);
    width: 50%;
    min-width: 300px;
    height: 99%;
    margin: 0 auto;
    padding: 3%;
    padding-top: 50px;
}
</style>
