<template>
  <div id="home">
    <h2>Hello</h2>
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
}
</style>
