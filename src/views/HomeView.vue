<script setup>
const carrouselText = [{
  title: "Algorithm",
  subtitle: "Users going through a vetting process to ensure you never match with bots.",
  image: "src/assets/onboard-image-01.png"
  }, 
  
  {
    title: "Matches",
    subtitle: "We match you with people that have a large array of similar interests.",
    image: "src/assets/onboard-image-02.png"
  },
   
  {
    title: "Premium",
    subtitle: "Sign up today and enjoy the first month of premium benefits on us.",
    image: "src/assets/onboard-image-03.png"
  }]
</script>

<template>
  <el-carousel type="card" :autoplay="false">
    <el-carousel-item v-for="item in carrouselText" :key="item.title">
      <img :src="item.image" alt="">
      <h2>{{ item.title }}</h2>
      <p>{{ item.subtitle }}</p>
    </el-carousel-item>
  </el-carousel>
</template>

<style>
  h2{
    text-align: center;
    color: #E94057;
    font-size: 26px;
  }
  p{
    text-align: center;
    color: #323755;
    font-size: 16px;
  }
  img{
    height: 50%;
    width: 100%;
  }

  

  .el-carousel, .el-carousel__item{
    height: 500px;
  }

  .el-carousel__button{
    border: 1px solid #E8E6EA;
    border-radius: 50%;
    height: 8px;
    width: 8px;
    background-color: #E8E6EA;
  }
  .el-carousel__indicator.is-active > button{
    background-color: #E94057;
    border: 1px solid #E94057;

  }
</style>
