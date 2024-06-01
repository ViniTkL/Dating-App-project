<script setup>
import VIconButton from '@/components/ui-components/VIconButton.vue';
import ButtonComponent from '@/components/ui-components/ButtonComponent.vue';
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';

const store = useUserStore();
const router = useRouter();

const goToHome = () => {
    router.push('/');
}

</script>


<template>
<main class="match-container">
    <div class="card-1">
        <VIconButton class="card-1-btn" icon="fa-solid fa-heart"/>
        <img class="card-1-img" src="" alt="">
    </div>
    
    <div class="card-2">
        <img class="card-2-img" src="" alt="">
        <VIconButton class="card-2-btn" icon="fa-solid fa-heart"/>
    </div>

    <div class="match-header">
        <h2>{{`It’s a match, ${store.getUserFullName()} !`}}</h2>
        <p>Start a conversation now with each other</p>
    </div>

    <div class="match-button">
        <ButtonComponent title="Say hello" />
        <ButtonComponent @click="goToHome" title="Keep swipimg" />
    </div>
</main>
</template>


<style scoped>

.match-container{
    height: 100vh;
    background-color: #FFFFFF;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 14px 0 14px 0;
}

.card-1, .card-2{
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    align-items: center;
}

.card-1 {
    position: relative;
    top: 80px;
    left: 40px;
    transform: rotate(10deg);
}

.card-2 {
    position: relative;
    bottom: 80px;
    right: 40px;
    transform: rotate(-10deg);
}


.card-1 > button, .card-2 > button{
    border: 1px solid #FFFFFF;
    border-radius: 50%;
    color: #E94057;
    background-color: #FFFFFF;
    font-size: 26px;
    width: 60px;
    height: 60px;
    box-shadow: 0  0  10px rgba(0, 0, 0, 0.2);
}

.card-1 > button{
    position: relative;
    top: 30px;
    right: 70px;
}

.card-2 > button{
    position: relative;
    bottom: 30px;
    right: 70px;
}

.card-1 > img, .card-2 > img{
    width: 160px;
    height: 240px;
    border-radius: 16px;
    box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.2);
}

.match-header{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;
    bottom: 60px;
}

.match-header > h2{
    font-size: 34px;
    color: #E94057;
    font-weight: 700;
}

.match-header > p{
    font-size: 14px;
    font-weight: 400;
    color: #000000;
}

.match-button{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 10px 0px;
    margin-bottom: 20px;
}

.match-button > button + button {
    background-color: #ffc2ca;
    border: #ffc2ca;
    color: #E94057;
}

</style>