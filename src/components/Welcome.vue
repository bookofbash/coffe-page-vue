<template>
  <div class="container">
      <div class="left">
          <div class="heading">PREMIUM COFFEE</div>
          <div class="slogan">A cup of coffee is one of the most important, simple pleasures in life.</div>
          <div class="action-button">
              <button><span>👉🏽</span>Shop Now</button>
          </div>
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
    grid-template-columns: auto auto;
    margin: 80px 100px;
    padding-bottom: 200px;
}
.left div{
    display: flex;
}
.left .heading {
    font-size: .75rem;
}
.left .slogan {
    font-size: 2.15rem;
    font-family: Garamond,Baskerville,Baskerville Old Face,Hoefler Text,Times New Roman,serif; 
    font-weight: 900;
    max-width: 40%;
    text-align: left;
    margin-bottom: 40px;
}
.left .action-button button{
    width: 180px;
    font-size: 1rem;
    padding: 10px 10px;
    border-radius: 50px;
    border: none;
    background-color:rgb(255, 190, 50)
}
.action-button span{
    margin-right: 3px;
}

</style>