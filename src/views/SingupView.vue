<script setup>
    import ButtonComponent from '@/components/ui-components/ButtonComponent.vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const goToNextPage = () => {
        router.push('/profile-details')
    }

</script>

<template>
<main class="sing-up-container">
    <img src="../assets/trademark.png" class="app-logo">
    <h1>Sign up to continue</h1>
    <ButtonComponent title="Continue with email" @click="goToNextPage"/>
    <div class="sing-up-footer">
        <a>Terms of use</a>
        <a>Privacy Policy</a>
    </div>
</main>
</template>

<style scoped> 

.sing-up-container{
    display: flex;
    position: relative;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 22px;
    background-color: #FFFFFFFF;
}

.sing-up-container > h1{
    color: #323755;
    font-size: 18px;
    font-weight: 700
}

.app-logo{
    position: relative;
    bottom: 58px; 
}

.sing-up-footer{
    display: flex;
    position: absolute;
    bottom: 32px;
    width: 15em;
    justify-content: space-between
}

.sing-up-footer > a{
    color: #E94057;
}

.sing-up-footer > a:hover{
    cursor: pointer;
    background-color: transparent;
}
</style>