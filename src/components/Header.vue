<template>
  <div class="header">
    <div class="logo">Coffee Roasters</div>
    <div class="navigation">
      <div class="navigation-btn"><button>SHOP</button></div>
      <div class="navigation-btn"><button>WHOLESALE</button></div>
      <div class="navigation-btn"><button>LOCATIONS</button></div>
      <div class="navigation-btn last"><button>OUR STORY</button></div>
    </div>
    <div class="icons">
      <span class="icon-container"
        ><font-awesome-icon class="icon" icon="search" size="xs" :style="{ color: '#888888' }"
      /></span>
      <span class="icon-container"
          ><font-awesome-icon class="icon" icon="user" size="xs" :style="{ color: '#888888' }"
        /></span>
    </div>

  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import {  faUser, faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);
library.add(faUser);


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  display:grid;
  grid-template-columns: 40% 48% 12%;
  margin: 0 100px;
}
.logo{
  display: flex;
}
.navigation{
  display: flex;
}
.navigation-btn{
  margin-right: 40px;
  border: none;
  
}
.navigation-btn button{
  border: none;
  background-color: transparent;
}
.navigation .last{
  margin-right: 20px !important;
}
.icons {
  display: flex;
  padding-top: 5px;
}
.icon-container {
  border-radius: 100%;
  height: 10px;
  padding: 2%;
  margin-right: 10px;
  display: flex
}
</style>
