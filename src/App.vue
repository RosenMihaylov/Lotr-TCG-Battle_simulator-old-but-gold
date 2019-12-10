<template>
  <div id="app">
    <div id="nav">
      <a href="https://www.facebook.com/ravensvt" target="_blank" id="logo">
        <img alt="logo" src="./assets/fenix-logo.png" title="logo" />
        <p>LTR TCG Battle Simulator</p>
      </a>
      <div id="navigation" :class="{ active: active }">
        <div id="responsiveNavigation">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/tutorial">Tutorial</router-link> |
          <router-link to="/battleSimulation">Battle Simulation</router-link>
        </div>
        <div id="navbutton" @click="openMenu">
          <div id="navButtonLine"></div>
          <div id="navButtonLine"></div>
          <div id="navButtonLine"></div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "app",
  data() {
    return {
      active: ""
    };
  },
  methods: {
    openMenu() {
      if (this.active) {
        this.active = "";
      } else {
        this.active = "true";
      }
    }
  },
  computed: mapGetters(["allColors"])
};
</script>

<style lang="scss">
@import "/scss/colors.scss";
@import "/scss/mixins.scss";
@import "/scss/responsive.scss";
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
  @include flex(row, center, space-between);
  width: 100%;
  max-width: 1200px;
  margin: 30px auto;
  background: rgba(178, 190, 181, 0.3);
  a {
    font-weight: bold;
    color: $secondary-color;
    @include easeOut(all, 0.4s);
    &#logo {
      background: $logo-color;
      text-decoration: none;
      @include flex(row, center, flex-start);
      p {
        margin-left: 10px;
        color: $secondary-color;
      }
    }
    &.router-link-exact-active {
      color: #42b983;
    }
    &:hover {
      color: #42b983;
    }
  }
  #navigation {
    @include flex(row, center, center);
    @include easeOut(all, 50s);
    &.active {
      a {
        color: #fff;
        @include easeOut(all, 0.3s);
        &.router-link-exact-active,
        &:hover {
          color: #42b983;
        }
      }
      #responsiveNavigation {
        @include positionFixed(0, 0, 0, 0, 200);
        background: $secondary-color;
        opacity: 0.8;
      }
      #navbutton {
        border: 1px solid #fff;
        #navButtonLine {
          background: #fff;
        }
      }
    }
    a {
      margin: 0 10px;
    }
    #responsiveNavigation {
      height: 100vh;
      @include positionFixed(-100%, 0, 0, 0, 200);
      @include easeOut(all, 0.3s);
      @include flex(column, center, space-around);
      @include for-tablet-landscape-up {
        height: 100%;
        position: relative;
        @include flex(row, center, center);
      }
    }
    #navbutton {
      width: 50px;
      height: 50px;
      border: 1px solid $secondary-color;
      margin-right: 10px;
      z-index: 500;
      cursor: pointer;
      @include flex(column, center, space-around);
      @include easeOut(all, 0.3s);
      @include for-tablet-landscape-up {
        display: none;
      }
      #navButtonLine {
        height: 5px;
        width: 40px;
        background: $secondary-color;
      }
      &:hover {
        background: $logo-color;
      }
    }
  }
}
</style>
