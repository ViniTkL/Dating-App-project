<script setup>
import ButtonComponent from '@/components/ui-components/ButtonComponent.vue';
import GoBackButton from '@/components/ui-components/VIconButton.vue';
import VPassionsCheckbox from '@/components/ui-components/VPassionsCheckbox.vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';

const router = useRouter();

const store = useUserStore();



const finishSingUp = () => {
    goToNextPage();
    //salnvar informações no banco de dados :)
}

const goToNextPage = () => {
    router.push('/')
}

const goToPreviousPage = () => {
    router.push('/i-am')
}


const setPassionSelected = (passion, isSelected) => {
    store.passionSelected(passion, isSelected)
}
</script>

<template>
<main class="passions-container">
    <GoBackButton icon="fa-angle-left" @click="goToPreviousPage()" class="go-back-button"/>

    
    <header class="passions-header">
        <h2>Your interests</h2>
        <p>Select a few of your interests and let everyone know what you’re passionate about.</p>
    </header>
    
    <form class="passions-form">
        <VPassionsCheckbox @passion-selected="setPassionSelected"/>
    </form>
    
    <ButtonComponent title="Finish"  @click="finishSingUp"/>
</main>
</template>

<style scoped>

h2{
    font-size: 34px;
    font-weight: 700;
}

p{
    font-size: 14px;
    font-weight: 400;
}


.passions-container{
    height: 100vh;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    gap: 20px 0;
    background-color: #FFFFFF;
}

.go-back-button{
    position: relative;
    right: 120px
}

.passions-header{
    padding: 30px;
}

.passions-form{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px 0;
    padding: 20px
}

.passions-header{
    color: #000000;
}

</style>