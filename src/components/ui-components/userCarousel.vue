<script setup>
import { computed, onMounted } from 'vue';
const props = defineProps(['user'])

</script>

<template>
 <el-carousel
            height="300px"
            direction="vertical"
            :autoplay="false"
    >
        <el-carousel-item v-for="item in 4" :key="item">
            <img class="user-img" src="../../assets/onboard-image-02.png" alt="">
            <div class="user-info">
                <p>{{user.first_name + " " + user.last_name}}</p>
            </div>
        </el-carousel-item>
    </el-carousel>
</template>

<style>

.user-img{
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
 
.user-info{
    display: flex;
    flex-flow: column;
    align-items: center;
    position: relative;
    bottom: 80px;
    background-color: transparent;
    width: 226px;
    height: 60px;
    border-bottom-right-radius: 16px;
    border-bottom-left-radius: 16px;
    background-color: rgba(51, 48, 48, 0.2);
}

.user-info > p {
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 700;
}

.user-info > span {
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 400;
}

.user-info > .blur-bg{
    background-color: #E8E6EA;
    width: 295px;
    height: 60px;
    filter: blur(5px);
}

li.el-carousel__indicator > .el-carousel__button{
    border: 1px solid #E8E6EA;
    border-radius: 50%;
    height: 8px;
    width: 8px;
    background-color: #E8E6EA;
  }

  ul.el-carousel__indicators{
    background-color: #FFFFFF26;
    border-radius: 16px;
  }

  ul.el-carousel__indicators.el-carousel__indicators--vertical.el-carousel__indicators--right{
    right: 20%
  }

  .el-carousel__indicator.is-active > button{
    background-color: #FFFFFF;
    border: 1px solid #FFFFFF;
  }
</style>