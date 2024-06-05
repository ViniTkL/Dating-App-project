<script setup>
import { ref } from 'vue';
import ButtonComponent from '@/components/ui-components/ButtonComponent.vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';

const router = useRouter();
const store = useUserStore();

const email = ref('');
const password = ref('');

const goToNextPage = () => {
    router.push('/home');
}

const logIn = () => {
    
    //Fazer as valiações com o banco de dados
    const isValidUser = true // vai validar a partir do banco de dados se é ou não um usuário válido
    if(isValidUser){
        goToNextPage();
    }

    alert('Email ou senha incorretos')
}

</script>

<template>
<main class="sing-in-container">
    <div class="sing-in-header">
        <img src="../assets/trademark.png" class="app-logo">
        <h2 class="">USER LOG IN</h2>
    </div>
    <form class="sing-in-form">
        <div class="input-form">
         <label for="user-email">Email</label>
         <input type="email" name="user-email" placeholder="example@gmail.com" required v-model="email">
       
         <label for="user-password">Password</label>
         <input type="password" name="user-password" required v-model="password">
        </div> 

        <ButtonComponent title="Log in" @click.prevent="logIn" />
    </form>
</main>
</template>


<style scoped>
.sing-in-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #FFFFFF;
}

.sing-in-header{
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px 0;
    margin-top: 105px;
}

.sing-in-header > .app-logo{
    height: 100px;
    width: fit-content;
}

.sing-in-header > h2{
    color: #323755;
    font-size: 32px;
    font-weight: 700;
}

.sing-in-form{
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    width: 100%;
}

.input-form{
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    gap: 20px ;
    width: 75%;
}

label{
    font-size: 16px;
    color: #555555;
    font-weight: 400;
    position: relative;
    top: 30px;
    right: 60px;
    background-color: #FFFFFF;
    text-align: center;
}

input{
    height: 52px;
    width: 100%;
    border: 1px solid #555555;
    border-radius: 16px;
    outline: none;
    padding: 5px 10px;
    font-size: 14px;
    font-weight: 400;
}
</style>