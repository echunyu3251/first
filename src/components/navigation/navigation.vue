<template>
  <div id="app">
    <ul>
      <li>
        <span>Whole</span>
        <div class="sanjiaoxing" style="margin-left: 20px;"></div>
        <div class="NavHiddenList" style="height: 52.125rem;">
          <whole></whole>
        </div>
      </li>
      <li>
        <span>Milk</span>
        <div class="sanjiaoxing" style="margin-left: .9375rem;"></div>
        <div class="NavHiddenList" style="margin-left: -105px;">
          <milk></milk>
        </div>
      </li>
      <li>
        <span>Shose</span>
        <div class="sanjiaoxing" style="margin-left: 25px;"></div>
        <div class="NavHiddenList" style="margin-left:-183px;">
          <shose></shose>
        </div>
      </li>
      <li>
        <span>Mother&Baby</span>
        <div class="sanjiaoxing" style="margin-left: 60px;"></div>
        <div class="NavHiddenList" style="margin-left: -281px;">
          <baby></baby>
        </div>
      </li>
      <li>
        <span>Health</span>
        <div class="sanjiaoxing" style="margin-left: 20px;"></div>
        <div class="NavHiddenList" style="margin-left:-465px;">
          <health></health>
        </div>
      </li>
      <li>
        <span>Make Up</span>
        <div class="sanjiaoxing" style="margin-left: 40px;"></div>
        <div class="NavHiddenList" style="margin-left:-570px;">
          <makeup></makeup>
        </div>
      </li>
      <li>
        <span>Daily</span>
        <div class="sanjiaoxing" style="margin-left: 20px;"></div>
        <div class="NavHiddenList" style="margin-left:-700px;">
          <daily></daily>
        </div>
      </li>
      <li>
        <span>Jewelry</span>
        <div class="sanjiaoxing" style="margin-left: 25px;"></div>
        <div class="NavHiddenList" style="margin-left:-790px;">
        
          <jewelry></jewelry>
        </div>
      </li>
      <li>
        <span>AUS</span>
        <div class="sanjiaoxing" style="margin-left: 15px;"></div>
        <div class="NavHiddenList" style="margin-left:-900px;">
          <aus></aus>
        </div>
      </li>
      <li>
        <span>JPN</span>
        <div class="sanjiaoxing" style="margin-left: 14px;"></div>
        <div class="NavHiddenList" style="margin-left: -978px;">
        
          <jpn></jpn>
        </div>
      </li>
      <li>
        <span>CHN</span>
        <div class="sanjiaoxing" style="margin-left: 20px;"></div>
        <div class="NavHiddenList" style="margin-left: -1053px;">
          <chn></chn>
        </div>
      </li>
      <li>
        <span><router-link to="Brand">Brand</router-link></span>
        
        <!-- <div class="sanjiaoxing" style="margin-left: 20px;"></div>
        <div class="NavHiddenList" style="margin-left: -1138px;"></div> -->
      </li>
    </ul>

  </div>
</template>

<script>
  import whole from "../navigation/whole/whole";
  import milk from "../navigation/milk/milk";
  import shose from "../navigation/Shose/Shose";
  import baby from "../navigation/Baby/Baby";
  import health from "../navigation/Health/Health";
  import makeup from "../navigation/MakeUp/MakeUp";
  import daily from "../navigation/Daily/Daily";
  import jewelry from "../navigation/Jewelry/Jewelry";
  import aus from "../navigation/AUS/AUS";
  import jpn from "../navigation/JPN/JPN";
  import chn from "../navigation/CHN/CHN";



  export default {
    name: 'navigation',
    data() {
      return {}
    },
    components: {
      whole,
      milk,
      shose,
      baby,
      health,
      makeup,
      daily,
      jewelry,
      aus,
      jpn,
      chn,

    }
  }
</script>

<style scoped>
  @import "../navigation/navigation.css"
</style>