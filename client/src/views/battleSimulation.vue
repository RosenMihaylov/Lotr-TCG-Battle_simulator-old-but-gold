<template>
  <div id="battleSimulation">
    <h2>This is a battle simulation</h2>
    <div id="batttleScreen">
      <div id="battleScreenLeftSide">
        <div id="companionsList" v-if="currentPhase === 1">
          <h2>click to chose a companion</h2>
          <div
            class="selectionWindow"
            v-for="(companion, c) in companionList"
            :key="c"
          >
            <img :src="companion.image" alt="img" />
            <div class="companionData">
              <p>
                Strenght:
                {{ companion.strength }}
              </p>
              <p>
                Vitality:
                {{ companion.vitality }}
              </p>
              <p>
                Twilight:
                {{ companion.twilight }}
              </p>
            </div>
            <button
              class="button"
              @click="
                nextPhase();
                selectACompanion(companion);
              "
            >
              Select a Companion
            </button>
          </div>
        </div>
        <div
          id="selectedCompanionInfo"
          class="fighterInfo"
          v-if="currentPhase > 1"
        >
          <h5>Here You can see your Companion</h5>
          <div class="fighterPicture">
            <img
              :src="selectedCompanionImage"
              alt="selected companion picture"
            />
          </div>
          <ul>
            <li>
              Strenght:
              <span class="green">{{ selectedCompanionStrength }}</span>
            </li>
            <li>
              Vitality:
              <span class="red"> {{ selectedCompanionVitality }}</span>
            </li>
          </ul>
        </div>
        <button v-if="currentPhase === 2" @click="nextPhase">
          Select the Oponnent
        </button>
      </div>
      <div id="battleSimulationCommandButtons">
        <h3>
          Twilight:
          <span class="green">{{ twilight }}</span>
        </h3>
        <div id="commands">
          <button class="button" v-if="currentPhase === 0" @click="nextPhase">
            Start Simulation
          </button>
          <button
            v-if="currentPhase !== 0"
            class="button"
            @click="resetSimulation"
          >
            Reset Simulation
          </button>
          <button
            v-if="currentPhase === 5"
            @click="
              startBattle();
              nextPhase();
            "
          >
            Start Battle
          </button>
          <div id="battleResult" v-if="currentPhase === 6">
            <h2>Here is the conclusion of the battle and an animation</h2>
            <h2>
              Conclusion:
              {{ result }}
            </h2>
            <img :src="resultGif" alt="resultGif" />
            <button @click="continueToNextBattle">
              Continue to the next battle
            </button>
            <button
              v-if="currentPhase !== 0"
              class="button"
              @click="resetSimulation"
            >
              Reset Simulation
            </button>
          </div>
        </div>
      </div>
      <div id="battleScreenRightSide">
        <div id="selectYourOpponent" v-if="currentPhase === 3">
          <div v-for="(minion, m) in minionList" :key="m">
            <img :src="minion.image" alt="minion image" />
            <div class="minionData">
              <p>
                strength:
                <span class="green">
                  {{ minion.strength }}
                </span>
              </p>
              <p>
                vitality:
                <span class="red">
                  {{ minion.vitality }}
                </span>
              </p>
              <p>
                twilight:
                {{ minion.twilight }}
              </p>
              <button @click="selectAnOpponent(minion)">
                Select an Opponent
              </button>
            </div>
          </div>
        </div>
        <div id="minion" class="fighterInfo" v-if="currentPhase > 3">
          <h5>Here You can see your Opponent</h5>
          <div class="fighterPicture">
            <img :src="selectedMinionImage" alt="" />
          </div>
          <ul>
            <li>
              strenght:
              <span class="green"> {{ selectedMinionStrength }}</span>
            </li>
            <li>
              Vitality:
              <span class="red">
                {{ selectedMinionVitality }}
              </span>
            </li>
          </ul>
          <button v-if="currentPhase === 4" @click="nextPhase">
            Complete Selection
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import companions from "../api/companions";
import minions from "../api/minions";

export default {
  name: "battleSimulation",
  modules: ["companions"],
  data() {
    return {
      currentPhase: 0,
      twilight: 0,
      companionList: companions,
      selectedCompanionStrength: 0,
      selectedCompanionVitality: 0,
      selectedCompanionImage: "",
      minionList: minions,
      selectedMinionStrength: 0,
      selectedMinionVitality: 0,
      selectedMinionImage: "",
      result: "",
      resultGif: ""
    };
  },
  methods: {
    nextPhase() {
      if (this.currentPhase <= 5) {
        const phase = this.currentPhase + 1;
        return (this.currentPhase = phase);
      } else this.currentPhase = 1;
    },
    resetSimulation() {
      this.currentPhase = 0;
      this.twilight = 0;
      this.selectedCompanionStrength = 0;
      this.selectedCompanionVitality = 0;
    },
    selectACompanion(companion) {
      this.selectedCompanionStrength = companion.strength;
      this.selectedCompanionVitality = companion.vitality;
      this.selectedCompanionImage = companion.image;
      this.twilight = companion.twilight;
    },
    selectAnOpponent(minion) {
      if (minion.twilight < this.twilight + 1) {
        this.selectedMinionStrength = minion.strength;
        this.selectedMinionVitality = minion.vitality;
        this.selectedMinionImage = minion.image;
        this.twilight = this.twilight - minion.twilight;
        this.currentPhase = this.currentPhase + 1;
      } else return;
    },
    startBattle() {
      if (
        this.selectedMinionStrength >= 2 * this.selectedCompanionStrength ||
        this.selectedCompanionStrength <= 0 ||
        this.selectedCompanionVitality <= 0
      ) {
        this.result = "You completely lose the Battle";
        this.resultGif =
          "https://thumbs.gfycat.com/LeftExcitableAfricanaugurbuzzard-size_restricted.gif";
        this.selectedMinionVitality = 0;
        return;
      } else if (this.selectedMinionStrength > this.selectedCompanionStrength) {
        this.selectedCompanionVitality = this.selectedCompanionVitality - 1;
        if (this.selectedCompanionVitality === 0) {
          this.result = "You completely lose the Battle";
          this.resultGif =
            "https://thumbs.gfycat.com/LeftExcitableAfricanaugurbuzzard-size_restricted.gif";
        } else {
          this.result = "You survive, but you are wounded";
          this.resultGif =
            "https://thumbs.gfycat.com/FlawedPracticalHalicore-small.gif";
        }
        return;
      } else if (
        this.selectedCompanionStrength >= 2 * this.selectedMinionStrength ||
        this.selectedMinionStrength === 0
      ) {
        (this.result = "You completely win the Battle"),
          (this.resultGif =
            "https://thumbs.gfycat.com/WarmheartedCornyJaeger-max-1mb.gif");
      } else {
        (this.result = "You barely win, but the opponent lives"),
          (this.resultGif =
            "https://thumbs.gfycat.com/ImportantBrilliantElectriceel-size_restricted.gif");
      }
    },
    continueToNextBattle() {
      this.currentPhase = 1;
    }
  }
};
</script>

<style lang="scss">
#battleSimulation {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 100px;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  #batttleScreen {
    width: 100%;
    height: 100%;
    background: darken(#fff, 20);
    display: flex;
    #battleSimulationCommandButtons {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      flex: 1;
      button {
        width: 100%;
        font-size: 16px;
        margin: 20px 0;
        cursor: pointer;
      }
    }

    .fighterInfo {
      display: flex;
      flex-direction: column;
      align-items: center;
      .fighterPicture {
        height: 100px;
        width: 100px;
        background: #fff;
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
    }
    #battleScreenRightSide {
      background: darkcyan;
      flex: 2;
    }
    #battleScreenLeftSide {
      background: lightcyan;
      flex: 2;
    }
    ul {
      width: 100%;
    }
    li {
      list-style: none;
      text-align: left;
    }
  }
  .green {
    color: green;
    background: #fff;
  }
  .red {
    color: red;
    background: #fff;
  }
}
#companionsList,
#selectYourOpponent {
  display: flex;
  flex-direction: column;
  img {
    float: left;
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
}
#battleResult {
  width: 80%;
  height: 80%;
  position: fixed;
  top: 10%;
  left: 10%;
  z-index: 500;
  background: lightgoldenrodyellow;
}
</style>
