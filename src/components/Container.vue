<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Container",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  margin: 20px auto;
  border: 1px solid rgba(225, 225, 225, 0.7);
  width: 90%;
}
</style>
