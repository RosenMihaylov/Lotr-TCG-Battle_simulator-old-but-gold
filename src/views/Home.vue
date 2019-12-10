<template>
  <div id="home">
    <div id="dialogue">
      <h2>Hello</h2>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {}
};
</script>

<style lang="scss">
@import "../scss/mixins";
#home {
  @include flex(column, center, center);
  height: 100vh;
  max-width: 1200px;
  margin: auto;
}
</style>
