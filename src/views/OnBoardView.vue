<script setup>
import ButtonComponent from '@/components/ui-components/ButtonComponent.vue';
import { computed, ref } from 'vue';

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

  const currentIndex = ref(0);

  const isCurrentIndex = (index) => {
    return index == currentIndex.value
  }
  
</script>

<template>
  <div class="on-board-container">
    <el-carousel type="card" :autoplay="false" trigger="click" @change="(newIndex) => currentIndex = newIndex">
      <el-carousel-item v-for="(item, index) in carrouselText" :key="item.title">
        <img  :src="item.image" alt="" class="item-image">
        <h2 v-if="isCurrentIndex(index)" class="item-title">{{ item.title }}</h2>
        <p v-if="isCurrentIndex(index)" class="item-subtitle">{{ item.subtitle }}</p>
      </el-carousel-item>
    </el-carousel>
  
    <div class="on-board-login">
      <ButtonComponent title="Create an account" />
      <p>Already have an account? Sign In</p>
    </div>
</div>
</template>

<style>
  h2.item-title{
    text-align: center;
    color: #E94057;
    font-size: 26px;
  }
  p.item-subtitle{
    text-align: center;
    color: #323755;
    font-size: 16px;
  }
  img.item-image{
    height: 50%;
    width: 100%;
  }

  .on-board-container{
    padding: 10px;
    height: 100vh;
    width: 100%;
    background-color: #FFFFFF;
  }
  
  .on-board-login{
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
  }

  .on-board-login > button{
    width: 75%;
    height: 56px;
  }

  .el-carousel, .el-carousel__item{
    height: 500px;
  }

  .el-carousel__container{
    display: flex;
    gap: 200px;
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
