<template>
  <div id="home" class="screen">
    <div class="dialogue">
      <h1>
        Welcme to LOTR TCG
        <br />
        The Battle Simulator
      </h1>
      <p>
        This is a beta test!
      </p>
      <div class="dialogueNavigation">
        <div class="option1">
          <p>If you wish to see the Tutorial:</p>
          <router-link to="/tutorial" class="button">Tutorial</router-link>
        </div>
        <div class="option2">
          <p>If you are ready to play:</p>
          <router-link to="/battleSimulation" class="button">
            Battle
          </router-link>
        </div>
      </div>
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
  margin: auto;
  background: url("../assets/homeBg.jpg") center center;
  background-size: cover;
}
</style>
