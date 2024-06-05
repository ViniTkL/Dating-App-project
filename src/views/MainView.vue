<script setup>
import VIconButton from '@/components/ui-components/VIconButton.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToPreviousPage = () => {
    router.push('/on-board');
}
</script>


<template>
<main class="main-container">   
    <header class="discover-header">
        <VIconButton icon="fa-angle-left" @click="goToPreviousPage"/>
        <div class="header-text">
            <h3>Discover</h3>
            <span>Chicago, II</span>
        </div>
        <VIconButton icon="fa-filter"/>
    </header>
    <div class="discover-content">
        <el-carousel
            height="500px"
            direction="vertical"
            :autoplay="false"
    >
        <el-carousel-item v-for="item in 4" :key="item">
            <img class="user-img" src="../assets/onboard-image-02.png" alt="" height="250px">
            <div class="user-info">
                <p>name, age ,{{ item }}</p>
                <span>Profession</span>
            </div>
            <div class="blur-bg">a</div>
        </el-carousel-item>
    </el-carousel>
    </div>
    <div class="discover-buttons">
        <VIconButton class="cancel-button" icon="fa-solid fa-xmark"/>
        <VIconButton class="like-button" icon="fa-solid fa-heart"/>
        <VIconButton class="super-like-button" icon="fa-solid fa-star"/>
    </div>

</main>
</template>


<style>

h1{
    color: #000000
}

.main-container{
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    height: 100vh;
    background-color: #FFFFFF;
}

.discover-header{
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    padding: 8px;
    margin-top: 22px;
}

.discover-header > button{
    width: 52px;
}

.header-text{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.header-text > h3{
    color: #000000;
    font-size: 24px;
    font-weight: 700;
}

.header-text > span {
    font-size: 12px;
    font-weight: 400;
    color: #000000B2;
}

.discover-content{
    width: 100%;
}

.discover-content img{
    width: 295px;
    height: 350px;
    border-radius: 16px;
}

.el-carousel__container{
    position: relative;
    top: 80px;
}

.el-carousel__item{
    display: none;
  }

.el-carousel__item.is-active{
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    gap: 20px;
}

.discover-content .user-info{
    display: flex;
    flex-flow: column;
    align-items: center;
    position: relative;
    bottom: 80px;
    background-color: transparent;
    width: 295px;
    height: 60px;
    border-bottom-right-radius: 16px;
    border-bottom-left-radius: 16px;
    background-color: rgba(51, 48, 48, 0.2);
}

.discover-content .user-info > p {
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;
}

.discover-content .user-info > span {
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 400;
}

.discover-content .user-info > .blur-bg{
    background-color: #E8E6EA;
    width: 295px;
    height: 60px;
    filter: blur(5px);
}

.discover-content .el-carousel__button{
    border: 1px solid #E8E6EA;
    border-radius: 50%;
    height: 8px;
    width: 8px;
    background-color: #E8E6EA;
  }

  .discover-content ul.el-carousel__indicators{
    background-color: #FFFFFF26;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }

  .discover-content ul.el-carousel__indicators.el-carousel__indicators--vertical.el-carousel__indicators--right{
    right: 14%;
  }

  .discover-content .el-carousel__indicator.is-active > button{
    background-color: #FFFFFF;
    border: 1px solid #FFFFFF;
  }

.discover-buttons{
    display: flex;
    justify-content: space-evenly;
    width: 100%;
}

.discover-buttons > .cancel-button{
    border-radius: 50%;
    border: none;
    height: 68px;
    width: 68px;
    color: #F27121;
    box-shadow: 0  0  10px rgba(0, 0, 0, 0.2);
}

.discover-buttons > .like-button{
    border-radius: 50%;
    border: none;
    color: #FFFFFF;
    height: 88px;
    width: 88px;
    font-size: 36px;
    background-color: #E94057;
    box-shadow: 0  0  30px #E9405733;
}

.discover-buttons > .super-like-button{
    border-radius: 50%;
    border: none;
    height: 68px;
    width: 68px;
    color: #8A2387;
    box-shadow: 0  0  10px rgba(0, 0, 0, 0.2);
}
</style>