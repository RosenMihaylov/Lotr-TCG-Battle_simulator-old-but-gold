<template>
  <div id="battleSimulation">
    <h2>This is a battle simulation</h2>
    <div id="batttleScreen">
      <div id="battleScreenLeftSide">
        <div id="companion" class="fighterInfo" v-if="currentPhase > 1">
          <h5>Here You can see your Companion</h5>
          <div class="fighterPicture">
            Here Will be his picture
          </div>
          <ul>
            <li>
              Strenght:
              <span class="green">
                {{ selectedCompanion.Strenght }}
              </span>
            </li>
            <li>
              Vitality:
              <span class="red"> {{ selectedCompanion.Vitality }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div id="battleSimulationCommandButtons">
        <h3>
          Twilight:
          <span class="green">{{ twilight }}</span>
        </h3>
        <div id="commands">
          <button
            class="button"
            v-if="currentPhase === ''"
            @click="startSimulation"
          >
            Start Simulation
          </button>
          <button class="button" v-else-if="currentPhase === 'fellowship'">
            Select a Companion
          </button>
          <button
            v-if="currentPhase !== ''"
            class="button"
            @click="resetSimulation"
          >
            Reset Simulation
          </button>
        </div>
      </div>
      <div id="battleScreenRightSide">
        <div id="minion" class="fighterInfo" v-if="currentPhase > 2">
          <h5>Here You can see your Minion</h5>
          <div class="fighterPicture">
            Here Will be his picture
          </div>
          <ul>
            <li>
              Strenght:
              <span class="green">
                {{ selectedMinion.Strenght }}
              </span>
            </li>
            <li>
              Vitality:
              <span class="red"> {{ selectedMinion.Vitality }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "battleSimulation",
  data() {
    return {
      currentPhase: "",
      phases: {
        1: "Fellowhip",
        2: "Shadow",
        3: "Maneuver",
        4: "Archery",
        5: "Normal Battle",
        6: "Fierce Battle"
      },
      twilight: 0,
      selectedCompanion: {
        image: "",
        Strenght: 0,
        Vitality: 0,
        FellowshipSkill: "",
        ManeuverSkill: "",
        ArcherySkill: "",
        BattleSkill: "",
        MeleeWeapon: "",
        RangedWeapon: ""
      },
      selectedMinion: {
        image: "",
        Strenght: 0,
        Vitality: 0,
        ShadowSkill: "",
        ManeuverSkill: "",
        ArcherySkill: "",
        BattleSkill: "",
        MeleeWeapon: "",
        RangedWeapon: ""
      }
    };
  },
  methods: {
    startSimulation() {
      this.currentPhase = "fellowship";
    },
    resetSimulation() {
      this.currentPhase = "";
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
</style>
