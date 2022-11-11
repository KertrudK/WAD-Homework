<template>
	<div class="about">
		<div>
			<h1>
				This website is being developed by three people.
			</h1> 
			<ul>
				<li><Developer name="Vitali Zaikov" /></li>
				<li><Developer name="Helen Siil" /></li>
				<li><Developer name="Kertrud Geddily Küüt" /></li>
			</ul>
		</div>
	</div>
</template>

<script>
import Developer from "@/components/Developers.vue";

export default {
	name: "About",
	components: {
		Developer,
	},
};
</script>

<style scoped lang="scss">
h1 {
	margin-bottom: 100px;
}

ul {
	list-style: none;
	display: flex;
	justify-content: space-around;
	flex-flow: row wrap;
	padding: 0;
}
</style>
