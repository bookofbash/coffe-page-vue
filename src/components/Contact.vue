<template>
  <div class="container">
      <div class="title">Would you like to hear from us?</div>
      <div class="subtitle">Submit your email address to our newsletter</div>
      <div class="input"><input placeholder="yourname@email.com"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
    padding-top: 80px;
    padding-bottom: 80px;
    color: white;
    background-color: #010101
}
.title{
    font-size: 40px;
    font-family: Garamond,Baskerville,Baskerville Old Face,Hoefler Text,Times New Roman,serif; 
    font-weight: 900;
    margin-bottom: 10px;
}
.input input{
    margin-top: 20px;
    border: 0;
    outline: 0;
    border-bottom: 2px solid white;
    font-size: 18px;
    width: 300px;
    text-align: center;
    padding-bottom: 10px;
    background: #010101;
    color: white;
}
</style>