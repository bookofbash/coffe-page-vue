<template>
  <div class="container">
      <div class="left">
          <div class="heading">PREMIUM COFFEE</div>
          <div class="slogan">Quality Coffee Cultivated by Good</div>
          <p>Our love for specialty coffee is never-ending. With over 365 at origin working with the best growers on the planet, only the best beans make the grade.</p>
          <div class="action-button">
              <button><span>👉🏽</span>Shop Now</button>
          </div>
      </div>
     <div class="img-container">
          <img src="/src/static/coffee-hands.jpg" />
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
    display: grid;
    grid-template-columns: 50% auto;
    margin: 80px 100px; 
    padding-top:40px;
}
.left div{
    display: flex;
    margin-right: 40px;
}
.left p{
    display: flex;
    text-align: left;
    margin-top: 0px;
}
.left .heading {
    font-size: 12px;
    margin-top: 80px;
}
.left .slogan {
    font-size: 34px;
    font-family: Garamond,Baskerville,Baskerville Old Face,Hoefler Text,Times New Roman,serif; 
    font-weight: 900;
    max-width: 60%;
    text-align: left;
    margin-bottom: 20px;
    margin-right: 0px;
}
.left .action-button button{
    width: 180px;
    font-size: 16px;
    padding: 10px 10px;
    border-radius: 50px;
    border: none;
    background-color:rgb(255, 190, 50)
}
.action-button span{
    margin-right: 3px;
}
.img-container{
    background-color: brown;
    border-radius: 100% 100% 100% 0;
    width: 400px;
    height: 400px;
    margin-left: 80px;
}
.img-container img {
    border-radius: 100% 100% 100% 0;
    width: 400px;
    height: 400px;
}

</style>