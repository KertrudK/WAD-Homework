<template>
  <div>
    <Post/>
  </div>
</template>

<script>
import Post from "@/components/Post";

export default {
  name: "Main",
  components: {Post}
}
</script>

<style scoped>
div {
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 1vh;
}

</style>