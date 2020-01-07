<template>
  <div id="app">
    <img class="head-image" src="@/assets/img/coffee_spill.jpg">
    <Header />
    <Welcome />
    <Details />
    <WelcomeTwo/>
    <Deals/>
    <WelcomeThree />
    <Banner />
    <Contact />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Welcome from './components/Welcome.vue'
import WelcomeTwo from './components/WelcomeTwo.vue'
import Details from './components/Details.vue'
import Deals from './components/Deals.vue'
import WelcomeThree from './components/WelcomeThree.vue'
import Banner from './components/Banner.vue'
import Contact from './components/Contact.vue'


export default {
  name: 'app',
  components: {
    Header,
    Welcome,
    Details,
    WelcomeTwo,
    Deals,
    WelcomeThree,
    Banner,
    Contact
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
  margin-left: -10px;
  margin-right: -10px;
}
.head-image {
  position: absolute; right: -0px; top: -60px;
  width: 100%;
  z-index: -4;
}
button:hover{
  cursor:pointer;
}

</style>
//TODO: Make mobile-responsive