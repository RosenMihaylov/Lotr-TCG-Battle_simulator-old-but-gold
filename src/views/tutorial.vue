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
              @click="goToNextSlide(10)"
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
        "rangersSword.jpg",
        "aragornsBow.jpg",
        "aRangersVersatility.jpg"
      ],
      slideShow: [
        {
          title: "This is a Companion",
          data: [
            "name: Aragorn",
            "Culture:	Gondor",
            "Twilight cost:	4",
            "Card Type:	Companion • Man",
            "Strength:	8",
            "Vitality:	4",
            "Game Text:	Ranger. Maneuver: Exert Aragorn to make him defender +1 until the regroup phase.",
            "Companions can be played during the Fellowship phase.",
            "There can be up to 9, and if one is dead, you can`t play them again",
            "The twilight cost is added to the twilight pool, to be used by the opponent"
          ]
        },
        {
          title: "This is a Minion",
          data: [
            "Name: Enquea",
            "Culture:	Wraith",
            "Twilight cost:	6",
            "Card Type:	Minion • Nazgul",
            "Strength:	11",
            "Vitality:	4",
            "Site:	3",
            "Game Text:	Fierce. Maneuver: Spot 6 companions (or 5 burdens) and exert Ulaire Enquea to wound a companion (except the Ring-bearer).",
            "Minions can be played during the shadow phase.",
            "There is no limit as long as you have enough twilight in the twilight pool",
            "The twilight cost is substracted to the twilight pool"
          ]
        },
        {
          title: "This is Melee weapon",
          data: [
            "Name: Ramger`s Sword",
            "Culture:	Gondor",
            "Twilight cost:	1",
            "Card Type:	Possession • Hand Weapon",
            "Strength:	+2",
            "Game Text:	Bearer must be Aragorn. He is damage +1.",
            "Every character can have only 1 melee weapon, unless the game text specifies something else",
            "Weapons for the companions can be played during the Fellowship phase on the appropriate companion. They add to the twilight pool.",
            "Weapons for the Minions can be played during the shadow phase on the appropriate minion. They substract from the twilight pool"
          ]
        },
        {
          title: "This is a ranged weapon",
          data: [
            "Name: Aragorn`s Bow",
            "Culture:	Gondor",
            "Twilight cost:	1",
            "Card Type:	Possession • Ranged Weapon",
            "Game Text:	Bearer must be Aragorn. He is an archer. Archery: Exert Aragorn to wound a minion; if you use the skill Aragorn does not add to the fellowship archery total.",
            "Every character can have only 1 ranged weapon",
            "Weapons for the companions can be played during the Fellowship phase on the appropriate companion. They add to the twilight pool.",
            "Weapons for the Minions can be played during the shadow phase on the appropriate minion. They substract from the twilight pool"
          ]
        },
        {
          title: "This is an Event",
          data: [
            "Name: A Ranger`s Versatility",
            "Type: Fellowship",
            "Culture:	Gondor",
            "Twilight cost:	1",
            "Card Type:	Event",
            "Game Text:	Maneuver: Exert a ranger at a river or forest to exhaust a minion.",
            "Events can be played during the phase - specified in the game text.",
            "Unlike the other cards, events apply effects and do not stay on the field",
            "Fellowship events add to the twilight pool",
            "Shadow events substract from the twilight pool"
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
