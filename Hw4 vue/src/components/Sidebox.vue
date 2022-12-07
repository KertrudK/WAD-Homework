<template>
  <div class="column"></div>
</template>

<script>
export default {
  name: "Sidebox"
}
</script>

<style scoped>
.column {
  flex: 1;
  background-color: #f7ebe4;
  border-radius: 5px;
}

@media (max-width: 600px) {
  .column {
    display: none;
  }
}
</style>