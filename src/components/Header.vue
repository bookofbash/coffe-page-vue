<template>
  <div class="header">
    <transition name="fade" mode="out-in" appear>
    <div class="logo animated fadeInRight delay-.25s">Coffee Roasters</div>
    </transition>
    <transition name="fade" mode="out-in" appear>
    <div class="navigation animated fadeInRight delay-.25s">
      <div class="navigation-btn"><button>SHOP</button></div>
      <div class="navigation-btn"><button>WHOLESALE</button></div>
      <div class="navigation-btn"><button>LOCATIONS</button></div>
      <div class="navigation-btn last"><button>OUR STORY</button></div>
    </div>
    </transition>
    <div class="icons animated fadeInRight delay-.30s">
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
  font-family: Garamond,Baskerville,Baskerville Old Face,Hoefler Text,Times New Roman,serif; 
  font-weight: 700;
  font-size: 1.4rem;
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
  .fade-enter{
      opacity: 0;
  }
  .fade-enter-active{
      transition: opacity 1s;
  }
  .fade-leave{
      /* opacity: 1; */
  }
  .fade-leave-active{
      transition: opacity 1s;
      opacity: 0;
  }
</style>
