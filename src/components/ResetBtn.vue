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
        background-color: green;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px;
        font-size: 16px;
        bottom: 20px;
        right: 20px;
        cursor: pointer;
        position: fixed;
    }

    .reset-btn:hover
    {
        background-color: darkgreen;
    }
</style>
