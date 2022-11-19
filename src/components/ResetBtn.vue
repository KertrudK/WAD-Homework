<template>
    <button class="reset-btn" @click="$store.commit('resetLikes')">Reset likes</button>
</template>

<script>
export default {
    name: "ResetBtn",
};
</script>

<style>
    .reset-btn {
        width: 100px;
        height: 50px;
        background-color: red;
        bottom: 20px;
        right: 20px;
        cursor: pointer;
        position: fixed;
    }
</style>
