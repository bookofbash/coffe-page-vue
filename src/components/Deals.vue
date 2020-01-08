<template>
  <div class="container">
      <div class="header">
          <div class="title">Buy Now</div>
          <div class="subtitle">Our Best Deal</div>
          <div class="details">Coffee company with straight-forward mission: to make an office and on-the-go type of coffee that we'd like to drink.</div>
      </div>
      <div class="products">
          <div class="product">
            <div class="product-image platinum"><img :src="images.pouchGoldImage"></div>
            <div class="product-type">PLATINUM</div>
            <div class="product-name">Platinum Coffee Blend</div>
                      <div class="action-button">
              <button><span>👉🏽</span>$30.00</button>
          </div>
          </div>
           <div class="product">
            <div class="product-image classic"><img src="./../../static/pouch_black.png"></div>
            <div class="product-type">CLASSIC</div>
            <div class="product-name">Classic Coffee Blend</div>
                      <div class="action-button">
              <button><span>👉🏽</span>$20.00</button>
          </div>
          </div>
           <div class="product">
            <div class="product-image general"><img src="./../../static/pouch_silver.png"></div>
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
      data() {
        return {
            images: {
                pouchGoldImage: require('./../../static/pouch_gold.png')
                
            }
        }
    }
}
</script>

<style scoped>
.container{
    padding-bottom: 50px;
    background-color: #fffded;

}
.header{
    margin: 80px 300px 100px 300px;
    padding-top: 160px;
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
    width: 200px;
    height: 200px;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-bottom: 30px;
}
.product-image img {
    width:200px;
height: inherit;
background: transparent;
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