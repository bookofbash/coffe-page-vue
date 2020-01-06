<template>
  <div class="container">
      <div class="header">
          <div class="title">Buy Now</div>
          <div class="subtitle">Our Best Deal</div>
          <div class="details">Coffee company with straight-forward mission: to make an office and on-the-go type of coffee that we'd like to drink.</div>
      </div>
      <div class="products">
          <div class="product">
            <div class="product-image platinum"></div>
            <div class="product-type">PLATINUM</div>
            <div class="product-name">Platinum Coffee Blend</div>
                      <div class="action-button">
              <button><span>👉🏽</span>$30.00</button>
          </div>
          </div>
           <div class="product">
            <div class="product-image classic"></div>
            <div class="product-type">CLASSIC</div>
            <div class="product-name">Classic Coffee Blend</div>
                      <div class="action-button">
              <button><span>👉🏽</span>$20.00</button>
          </div>
          </div>
           <div class="product">
            <div class="product-image general"></div>
            <div class="product-type">GENERAL</div>
            <div class="product-name"> General Coffee Blend</div>
                      <div class="action-button">
              <button><span>👉🏽</span>$15.00</button>
          </div>
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
    margin-bottom: 50px;
}
.header{
    margin: 200px 300px 100px 300px;
    
}
.subtitle{
    font-size: 36px;
    font-family: Garamond,Baskerville,Baskerville Old Face,Hoefler Text,Times New Roman,serif; 
    font-weight: 900;
}
.products{
    display: grid;
    grid-template-columns: auto auto auto;
}
.details{
    margin-top: 20px;
}
.product-image{
    width: 120px;
    height: 200px;
    background-color: black;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-bottom: 30px;
}
.product-type{
    font-size: 12px;
    margin-bottom: 10px;
}
.product-name{
    font-family: Garamond,Baskerville,Baskerville Old Face,Hoefler Text,Times New Roman,serif; 
    font-weight: 900;
    font-size: 18px;
}
.action-button button{
    margin-top: 10px;
    width: 100px;
    font-size: 12px;
    padding: 5px 5px;
    border-radius: 50px;
    border: none;
    background-color:rgb(255, 190, 50)
}
</style>