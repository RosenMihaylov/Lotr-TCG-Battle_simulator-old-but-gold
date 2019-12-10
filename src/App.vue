<template>
  <div id="app">
    <div id="nav">
      <a href="https://www.facebook.com/ravensvt" target="_blank" id="logo">
        <img alt="logo" src="./assets/fenix-logo.png" title="logo" />
      </a>
      <div id="navigation">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/tutorial">Tutorial</router-link> |
        <router-link to="/battleSimulation">Battle Simulation</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "app",
  computed: mapGetters(["allColors"])
};
</script>

<style lang="scss">
@import "/scss/colors.scss";
@import "/scss/mixins.scss";
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: end;
  height: 100vh;
  width: 100vw;
  background: darken($primary-color, 5);
}

#nav {
  @include positionFixed(0, 0, auto, 0, 500);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 30px auto;
  background: rgba(178, 190, 181, 0.3);
  a {
    font-weight: bold;
    color: $secondary-color;
    @include easeOut(all, 0.3s);
    &#logo {
      background: $logo-color;
    }
    &.router-link-exact-active {
      color: #42b983;
    }
    &:hover {
      color: #42b983;
    }
  }
}
</style>
