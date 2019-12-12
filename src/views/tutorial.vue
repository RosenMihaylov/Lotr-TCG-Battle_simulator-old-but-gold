<template>
  <div id="tutorial">
    <div class="screen">
      <div class="dialogue">
        <div class="bubble">
          <div class="slideWindow">
            <button
              id="slideLeft"
              v-if="this.activeSlide > 1"
              @click="goToPrevSlide"
            >
              &#8810;
            </button>
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
            <button
              id="slideRight"
              @click="goToNextSlide"
              v-if="this.activeSlide < this.slideShow.length"
            >
              &#8811;
            </button>
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
        "aragornsBow.jpg",
        "aRangersVersatility.jpg",
        "rangersSword.jpg",
        "paleBlade.jpg"
      ],
      slideShow: [
        {
          title: "Fellowship phase",
          data: [
            "You can Chose your Companion",
            "You can equip 1 melee weapon and 1 Ranged weapon",
            "The cost of those cards is added to the twilight pool"
          ]
        },
        {
          title: "Shadow phase",
          data: [
            "The shadow player can play Minions",
            "The shadow player can equip 1 melee and 1 ranged weapon",
            "The cost is reduced from the twilight pool.",
            "The twilight pool can`t be negative"
          ]
        },
        {
          title: "Maneuver phase",
          data: [
            "Players take turns to use manewver skills",
            "First is the fellowship player",
            "The rule for the twilight pool stays the same",
            "If at any point a side reaches 0 strenght or 0 vitality they lose the game",
            "This phase is skipped if neither side has manewver skills"
          ]
        },
        {
          title: "Archery phase",
          data: [
            "Players take turns to use Archery skills",
            "First is the fellowship player",
            "The rule for the twilight pool stays the same",
            "If at any point a side reaches 0 strenght or 0 vitality they lose the game",
            "This phase is skipped if neither side has Archery skills",
            "After all the skills are used, if there are shots left - they reduce opposing vitality"
          ]
        },
        {
          title: "Battle phase",
          data: [
            "Players take turns to use Battle skills",
            "First is the fellowship player",
            "If at any point a side reaches 0 strenght or 0 vitality they lose the game",
            "After all the skills are used the battle commence",
            "If any side has strenght 2 times more than the opponent - the opponent is dead",
            "If the companion has more strenght - the minion takes damage equal to the critical of the companion",
            "If the minion has more or equal strenght - the companion takes damage equal to the critical of the minion",
            "If after the battle both sides are alive and the minion has fierce skill - starts the fierce battle phase",
            "If both sides are alive, or the minion is dead - you win the game"
          ]
        },
        {
          title: "Fierce Battle phase",
          data: [
            "Players take turns to use Battle skills",
            "First is the fellowship player",
            "If at any point a side reaches 0 strenght or 0 vitality they lose the game",
            "After all the skills are used the battle commence",
            "If any side has strenght 2 times more than the opponent - the opponent is dead",
            "If the companion has more strenght - the minion takes damage equal to the critical of the companion",
            "If the minion has more or equal strenght - the companion takes damage equal to the critical of the minion",
            "If both sides are alive, or the minion is dead - you win the game"
          ]
        }
      ]
    };
  },
  methods: {
    selectImage(image) {
      if (image) {
        const slideNumber = this.activeSlide - 1;
        return require("../assets/" + image[slideNumber]);
      }
    },
    goToNextSlide() {
      const number = this.slideShow.length - this.activeSlide;
      if (number >= 1) {
        this.activeSlide += 1;
      } else return;
    },
    goToPrevSlide() {
      if (this.activeSlide > 1) {
        this.activeSlide -= 1;
      } else return;
    }
  },
  computed: {
    slideText() {
      const slideNumber = this.activeSlide - 1;
      return this.slideShow[slideNumber];
    }
  }
};
</script>

<style lang="scss">
@import "../scss/mixins";
@import "../scss/colors";
@import "../scss/responsive";

#tutorial {
  background-size: cover;
  width: 100%;
  height: 100%;
  .screen {
    background: url("../assets/tutorialBg.jpg") center center;
    @include flex(column, center, flex-end);
    height: 100%;

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
          font-size: 3vh;
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
          @include absolutePosition(5px, 0, 0, 0);
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: row;
          button {
            margin: 0 5px;
            font-size: 2rem;
          }
          img {
            margin-right: 5px;
            height: 25vh;
          }
          .conversation {
            text-align: left;
            flex: 4;
            li {
              list-style: none;
              font-size: 2vh;
            }
          }
          @include for-tablet-landscape-up {
            img {
              height: 80%;
              margin-right: 20px;
            }
            h2 {
              font-size: 2rem;
            }
            .conversation li {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
}
</style>
