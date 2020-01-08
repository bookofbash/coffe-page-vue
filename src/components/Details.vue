<template>
  <div class="container">
      <div class="grid-item"  tabindex="1" v-focus >
          <div class="heading-icon"> <span
          ><font-awesome-icon class="icon" icon="leaf" size="2x" :style="{ color: '#000000' }"
        /></span>
        </div>
        
          <div class="content">Quality Coffee Cultivated by Good</div>
      </div>
      <div class="grid-item" tabindex="2" >
          <div class="heading-icon"><span
          ><font-awesome-icon class="icon" icon="coffee" size="2x" :style="{ color: '#000000' }"
        /></span>
        </div>
        
          <div class="content">Flavor single origin froth in spooned ice</div>
      </div>
      <div class="grid-item"  tabindex="3">
          <div class="heading-icon"><span
          ><font-awesome-icon class="icon" icon="tree" size="2x" :style="{ color: '#000000' }"
        /></span></div>
          <div class="content">Milk gounds single beans single origin</div>
      </div>
      <div class="grid-item"  tabindex="4">
          <div class="heading-icon"><span
          ><font-awesome-icon class="icon" icon="seedling" size="2x" :style="{ color: '#000000' }"
        /></span></div>
          <div class="content">Coffee irish robust spoon robust</div>
      </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import {  faLeaf, faCoffee, faTree, faSeedling } from "@fortawesome/free-solid-svg-icons";

library.add(faCoffee);
library.add(faLeaf);
library.add(faTree);
library.add(faSeedling);
export default {

directives: {
  focus: {
    // directive definition
    inserted: function (el) {
      el.focus()
    }
  }
}

}
</script>

<style scoped>
.container{
    margin: 400px 100px 100px 100px;
    display: grid;
    grid-template-columns: auto auto auto auto;
    min-height: 400px;
}
.container div{
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 15px;
}
.heading-icon {
    background-color:white;
    color: black;
    border-radius :0 50px 0 0;
    padding-top: 40px !important;
    margin-left: 20px;

}
.content {
    background-color:white;
    margin-left: 20px;
    font-family: Garamond,Baskerville,Baskerville Old Face,Hoefler Text,Times New Roman,serif; 
    font-size: 1.75rem;
    font-weight: 900;
    padding-top: 40px !important;
    padding-bottom: 40px !important;
}
.grid-item:focus{
      outline: none;

}
.grid-item:focus .heading-icon{
    background-color:rgb(255, 190, 50);
    border-radius :0 50px 0 0;
    padding-top: 40px !important;
    margin-left: 20px;
}
.grid-item:focus .content {background-color:lemonchiffon;
}
.grid-item{
  min-height: 300px;
}

</style>