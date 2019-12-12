<template>
  <div id="tutorial">
    <div class="screen">
      <div class="dialogue">
        <div class="bubble">
          <div class="slideWindow">
            <img :src="selectImage(image)" alt="aragorn" title="aragorn" />
            <div class="conversation">
              <h2>
                {{ slideText.title }}
              </h2>

              <ul>
                <li v-for="(data, d) in slideText.data" :key="d">
                  {{ data }}
                </li>
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
            <div
              class="circle"
              v-bind:class="[this.activeSlide === 4 ? 'active' : '']"
              @click="selectSlide4"
            ></div>
            <div
              class="circle"
              v-bind:class="[this.activeSlide === 5 ? 'active' : '']"
              @click="selectSlide5"
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
      activeSlide: 1,
      image: [
        "aragornCard.jpg",
        "enqueaCard.jpg",
        "rangersSword.jpg",
        "aragornsBow.jpg",
        "aRangersVersatility.jpg"
      ],
      text: [
        {
          title: "This is a Companion",
          data: ["name: Aragorn", "cost: 4"]
        },
        {
          title: "This is a Minion",
          data: ["name: Enquea", "cost:6"]
        },
        {
          title: "This is Melee weapon",
          data: ["name: Ramger`s Sword", "cost:1"]
        },
        {
          title: "This is a ranged weapon",
          data: ["name: Aragorn`s Bow", "cost:1"]
        },
        {
          title: "This is an Event",
          data: ["name: A Ranger`s Versatility", "cost:1"]
        }
      ]
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
    },
    selectSlide4() {
      this.activeSlide = 4;
    },
    selectSlide5() {
      this.activeSlide = 5;
    },
    selectImage(image) {
      const slideNumber = this.activeSlide - 1;
      return require("../assets/" + image[slideNumber]);
    }
  },
  computed: {
    slideText() {
      const slideNumber = this.activeSlide - 1;
      return this.text[slideNumber];
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
      .bubble {
        background: rgba(#fff, 0.5);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        @include absolutePosition(0, 5%, 0, 0);
        h2 {
          text-align: center;
          font-size: 1.5rem;
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
            flex: 1;
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
