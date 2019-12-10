<template>
  <div id="tutorial">
    <div class="screen">
      <div class="dialogue">
        <img
          src="../assets/aragornTutorialDialogue.png"
          alt="aragorn"
          title="aragorn"
          id="npc"
        />

        <div class="bubble">
          <div class="slideWindow">
            <img src="../assets/aragornCard.jpg" alt="card of aragorn" />
            <div class="conversation">
              <h3>This is a companion</h3>
              <ul>
                <li>Name: Aragorn</li>
                <li>Strenght: 8</li>
                <li>Vitality: 4</li>
                <li>Strong, but costs much to equip his weapons.</li>
                <li>Battle skill: +2 strenght against Sauron</li>
              </ul>
            </div>
          </div>
          <div id="slideNavigation">
            <div
              class="circle"
              v-bind:class="[this.activeSlide === 1 ? 'active' : '']"
              @click="selectSlide1"
            ></div>
            <div
              class="circle"
              v-bind:class="[this.activeSlide === 2 ? 'active' : '']"
              @click="selectSlide2"
            ></div>
            <div
              class="circle"
              v-bind:class="[this.activeSlide === 3 ? 'active' : '']"
              @click="selectSlide3"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tutorial",
  data() {
    return {
      activeSlide: 1
    };
  },
  methods: {
    selectSlide1() {
      this.activeSlide = 1;
    },
    selectSlide2() {
      this.activeSlide = 2;
    },
    selectSlide3() {
      this.activeSlide = 3;
    }
  }
};
</script>

<style lang="scss">
@import "../scss/mixins";
@import "../scss/colors";
@import "../scss/responsive";

#tutorial {
  background: url("../assets/tutorialBg.jpg") center center;
  background-size: cover;
  width: 100%;
  height: 100%;
  .screen {
    @include flex(column, center, flex-end);
    .dialogue {
      position: relative;
      height: $calcSizeMinusNav;
      #npc {
        display: none;
        @include for-tablet-landscape-up {
          display: block;
          @include absolutePosition(auto, auto, 0, 5px);
          max-height: 80%;
          max-width: 20%;
        }
      }
      .bubble {
        background: rgba(#fff, 0.5);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        @include absolutePosition(0, 5%, 0, 0);
        @include for-tablet-landscape-up {
          max-width: 75%;
          max-height: 80%;
          border-radius: 35px;
          left: auto;
          top: 10%;
        }
        #slideNavigation {
          position: absolute;
          bottom: 0;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          .circle {
            height: 1rem;
            width: 1rem;
            justify-self: center;
            border: 1px solid $primary-color;
            border-radius: 50%;
            margin: 0 5px 5px;
            &.active {
              background: $primary-color;
            }
          }
        }
        .slideWindow {
          @include absolutePosition(5px, 1rem, 1rem, 1rem);
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;

          img {
            height: 40%;
          }
          .conversation {
            text-align: left;
            li {
              list-style: none;
            }
          }
          @include for-tablet-landscape-up {
            flex-direction: row;
            img {
              height: 80%;
              margin-right: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
