<template>
  <div id="battleSimulation">
    <h2>This is a battle simulation</h2>
    <div id="batttleScreen">
      <div id="companion" class="fighterInfo">
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
            {{ selectedCompanion.Vitality }}
          </li>
        </ul>
      </div>
      <div id="battleSimulationCommandButtons">
        <h3>
          Twilight:
          <span>{{ twilight }}</span>
        </h3>
        <div id="commands">
          <h5>Battle Commands</h5>
          <button class="button">Battle Start</button>
          <button class="button">Reset</button>
        </div>
      </div>
      <div id="minion" class="fighterInfo">
        <h5>Here You can see your Minion</h5>
        <div class="fighterPicture">
          Here Will be his picture
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
    height: 60%;
    background: darken(#fff, 20);
    display: grid;
    grid-template-columns: 4fr 1fr 4fr;
    #battleSimulationCommandButtons {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
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
    #minion {
      background: darkcyan;
    }
    #companion {
      background: lightcyan;
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
