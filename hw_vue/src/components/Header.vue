<template>
	<div class="header-wrapper">
		<div class="header">
			<div class="logo">
                <div>
                    <a href="index.html">Home</a>
                </div>
                
                <nav>
                    <button id="userOptions" ></button>
                    <ul class="hiddenMenu">
                        <li>Vitali Helenius</li>
                        <li>Kertrud@team43.com</li>
                        <li><a href="login.html">Login Options</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
import NavMenu from "@/components/NavMenu.vue";

export default {
	name: "Header",
	components: {
		NavMenu,
	},
};
</script>

<style scoped lang="scss">
.header-wrapper {
	background-color: white;
	padding: 20px;
	position: sticky;
	top: 0;

	.header {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;

		.logo {
			min-width: 300px;
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
			align-items: center;
		}

		.profile-picture {
			img {
				width: 32px;
				height: 32px;
				border-radius: 50%;
			}

			p {
				margin-top: 2px;
			}

			> a {
				float: right;
			}
		}

		@media screen and (max-width: 1300px) {
			.search {
				display: none;
			}

			.profile-picture {
				min-width: 50px;
			}
		}
	}
}
</style>