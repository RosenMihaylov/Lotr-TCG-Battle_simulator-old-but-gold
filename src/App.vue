<template>
  <div id="app">
    <div id="nav">
      <a href="https://www.facebook.com/ravensvt" target="_blank" id="logo">
        <img alt="logo" src="./assets/fenix-logo.png" title="logo" />
        <p>LOTR TCG Battle Simulator</p>
      </a>
      <div id="navigation" :class="{ active: active }">
        <div id="responsiveNavigation">
          <router-link to="/">Home</router-link> |
          <router-link to="/tutorial">Tutorial</router-link> |
          <router-link to="/battleSimulation">Battle Simulation</router-link>
        </div>
        <div id="navButton" @click="openMenu">
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
@import "/scss/navigation.scss";
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;

  background: darken($primary-color, 5);
}
.screen {
  @include flex(column, center, center);
  width: 100%;
  height: 100%;
  background: rgba($secondary-color, 0.5);

  .dialogue {
    background: darken(rgba($logo-color, 0.5), 50);
    height: 100%;
    width: 100%;
    max-width: 1200px;
    @include flex(column, center, center);
    text-align: center;
    grid-template-columns: 1fr 1fr;
    .dialogueNavigation {
      display: grid;
      width: calc(100% - 2px);
      grid-template-columns: 1fr;
      border: 1px solid $primary-color;
      background: darken(rgba($primary-color, 0.8), 50);
      div {
        @include flex(column, space-around, space-around);
        border: 1px solid $primary-color;
        p {
          margin: 0;
        }
      }
    }
    h1,
    h2 {
      color: $gold;
      margin-bottom: 20px;
      font-size: 8.5vw;
    }
    p,
    li,
    .button {
      color: $secondary-color;
      margin-bottom: 10px;
      font-size: 6.5vw;
    }
    @include for-tablet-portrait-up {
      h1,
      h2 {
        font-size: 5.5vw;
      }
      p,
      li,
      .button {
        font-size: 1rem;
      }
      .dialogueNavigation {
        grid-template-columns: 1fr 1fr;
      }
    }

    @include for-tablet-landscape-up {
      height: 75vh;
      max-width: 1200px;

      .dialogueNavigation {
        grid-template-columns: 1fr 1fr;
      }
    }
    @include for-desktop-up {
      h1,
      h2 {
        font-size: 2rem;
      }
      p,
      li,
      .button {
        font-size: 1rem;
      }
    }
  }
}

.button {
  border: 1px solid #000;
  background: rgba($primary-color, 0.5);
  color: $secondary-color;
  text-decoration: none;
  width: 50%;
  margin: 0 auto;
}
</style>
