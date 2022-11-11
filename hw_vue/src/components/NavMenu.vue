<template>
	<div class="nav">
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link> |
	</div>
</template>

<script>
export default {
	name: "NavMenu",
};
</script>

<style scoped lang="scss">
.nav {
	min-width: 200px;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;

	a {
		font-weight: bold;
		color: #2284e7;

		&.router-link-exact-active {
			color: #b332da;
		}
	}
}
</style>