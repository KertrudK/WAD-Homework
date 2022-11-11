<template>
	<div class="contactUs">
		<div>
			<h1>
				Feel free to contact our team.
			</h1>
			<ul>
				<li>
					<h2>Phone nr:</h2> 
					<p>+372 58584545</p>
				</li>
				<li>
					<h2>Email:</h2> 
					<p>contact@WADCourse.com</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: "ContactUs",
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
