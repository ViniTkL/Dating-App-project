<script setup>
import VIconButton from '@/components/ui-components/VIconButton.vue';
import userCarousel from '@/components/ui-components/userCarousel.vue';
import { useRouter } from 'vue-router';
import { useUserStore } from "@/stores/user"
import { useMatchStore } from "@/stores/match"
import { computed, onBeforeMount, onMounted } from 'vue';
import { ref } from 'vue';

const store = useUserStore();

const matchStore = useMatchStore();

const router = useRouter();

const hasMoreUsers = ref(true) 

const currentUser = store.getUser

const users = ref([])

const goToPreviousPage = () => {
    router.push('/on-board');
}

const like = () => {
    getNextUser()
    // router.push("/match")
}

const superLike = () => {
    getNextUser()
    // router.push("/match")
}

const dismiss = () => {
    getNextUser()
}

const getNextUser = () => {
    if(users.value.length - 1 >= (matchStore.getCurrentUserIndex + 1)){
        matchStore.nextUserIndex();
    }else{
        matchStore.noMoreUsers()
    }
}  

const fetchUsers =  async () => {
    await store.fetchUsers()
    setUsers()
    filterUsersToShow()
}

const setUsers = () => {
    users.value = store.getUsers
}

const filterUsersToShow = () => {

    const passions = currentUser.passions.split('-')  
    
    const matchUsers = users.value.filter((user) => {
        const userPassion = user.passions.split('-')
        const hasEqualPassions =  passions.map((passion, index) => {
            const passionInCommon = userPassion.includes(passion)
            
            if(passionInCommon){
                return true
            }
        });

        if(hasEqualPassions.includes(true)){
            return user
        }   
    })
    
    users.value = matchUsers
}

fetchUsers()


const getUsersToShow =  computed( () => {
    return users.value[matchStore.getCurrentUserIndex]
})

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
    <userCarousel :user="getUsersToShow" v-if="matchStore.getHasMoreUsers"/>
    <p class="empty-carousel" v-else>Não há mais usuários para serem listados</p>
    </div>
    <div class="discover-buttons">
        <VIconButton class="cancel-button" icon="fa-solid fa-xmark" @click="dismiss"/>
        <VIconButton class="like-button" icon="fa-solid fa-heart" @click="like"/>
        <VIconButton class="super-like-button" icon="fa-solid fa-star" @click="superLike"/>
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

.empty-carousel{
    text-align: center;
    font-size: 20px;
    margin: 1em;
    color: black;
    font-weight: 600;
}

.discover-content img{
    height: 350px;
    border-radius: 16px;
}

.discover-buttons{
    display: flex;
    justify-content: space-evenly;
    width: 80%;
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