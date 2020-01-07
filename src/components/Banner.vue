<template>
  <div class="container">
      <div class="title">#COFFEE</div>
      <div class="subtitle">Coffee perfection since 1927.</div>
      <div class="banner-grid">

          <div class="banner-image"><img src="@/assets/banner-images/alisha-hieb-4-Pj2x7J22M-unsplash.jpg"></div>
          <div class="banner-image"><img src="@/assets/banner-images/brigitte-tohm-lbdNTcejZQs-unsplash.jpg"></div>
          <div class="banner-image"><img src="@/assets/banner-images/clem-onojeghuo-9AEh9i-WPhI-unsplash.jpg"></div>
          <div class="banner-image"><img src="@/assets/banner-images/janko-ferlic-specialdaddy-h9Iq22JJlGk-unsplash.jpg"></div>
          <div class="banner-image"><img src="@/assets/banner-images/lex-sirikiat-1tEkissU8dY-unsplash.jpg"></div>
          <div class="banner-image"><img src="@/assets/banner-images/nathan-dumlao-ikU3J1nr52w-unsplash.jpg"></div>
          <div class="banner-image"><img src="@/assets/banner-images/nathan-dumlao-r-KfktlyBL0-unsplash.jpg"></div>
          <div class="banner-image"><img src="@/assets/banner-images/nathan-dumlao-tA90pRfL2gM-unsplash.jpg"></div>
          <div class="banner-image"><img src="@/assets/banner-images/nolan-issac-It0DCaCBr40-unsplash.jpg"></div>
          <div class="banner-image"><img src="@/assets/banner-images/pablo-merchan-montes-SCbq6uKCyMY-unsplash.jpg"></div>
          <div class="banner-image"><img src="@/assets/banner-images/toa-heftiba-09SxeOdtlPE-unsplash.jpg"></div>
          <div class="banner-image"><img src="@/assets/banner-images/toa-heftiba-BgtVT7bVVcc-unsplash.jpg"></div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
    margin-top: 140px;
}
.title{
    font-size: 40px;
    font-family: Garamond,Baskerville,Baskerville Old Face,Hoefler Text,Times New Roman,serif; 
    font-weight: 900;
    margin-bottom: 10px;
}
.banner-grid{
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

}
.banner-image img {
    display: flex;
    height: 192px;
    width: 192px;
    flex-basis: auto;
    flex-grow: auto;
    margin-bottom: 0;
    justify-content: center;
}
</style>