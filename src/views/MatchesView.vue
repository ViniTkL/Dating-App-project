<script setup>
import VCardItem from '@/components/ui-components/VCardItem.vue';
import VIconButton from '@/components/ui-components/VIconButton.vue';



</script>

<template>
    <main class="matches-container">
        <header class="matches-header">
            <div class="head">
                <h2>Matches</h2>
                <VIconButton icon="fa-solid fa-arrow-down-up-across-line" />
            </div>
            <p>This is a list of people who have liked you and your matches.</p>
        </header>
        
        <div class="user-matches">
            <VCardItem class="match-card"  v-for="num in 5" :key="num">
                <img src="../assets/onboard-image-03.png" alt="">
                <p>name, age</p>
                <div class="matches-button">
                    <VIconButton class="dislike" icon="fa-solid fa-xmark"/>
                    <VIconButton class="like" icon="fa-solid fa-heart"/>
                </div>
            </VCardItem>
        </div>
    </main>
</template>

<style scoped>

.matches-container{
    position: relative;
    height: 100vh;
    background-color: #FFFFFF;
    padding: 10px;
    overflow-y: scroll;
}

.matches-header{
    display: flex;
    flex-flow: column wrap;
    padding: 14px;
    gap: 10px 0
}

.matches-header > .head{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.matches-header > .head > h2{
    color: #000000;
    font-size: 34px;
    font-weight: 700;
}

.matches-header > p {
    color: #000000;
    font-size: 16px;
    font-weight: 400;
}

.user-matches{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px 0;
    padding: 28px;
}

.match-card{
    position: relative;
    align-items: self-start;
    flex: 1;
    padding: 0px 0px 0 24px;
}

.match-card > img{
    width: 140px;
    height: 200px;
    border-radius: 16px;
}

.match-card > p{
    position: absolute;
    bottom: 50px;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 700;
}

.match-card > .matches-button{
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    bottom: 0;
}

.match-card > .matches-button > button{
    width: 70px;
    color: #FFFFFF;
    font-size: 24px;
}

.match-card > .matches-button > .like{
    border: 1px solid rgba(51, 48, 48, 0.5);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 16px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;

    background-color: rgba(51, 48, 48, 0.2);
}

.match-card > .matches-button > .dislike{
    
    border: 1px solid rgba(51, 48, 48, 0.5);
    border-bottom-left-radius: 16x;
    border-bottom-right-radius: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;

    background-color: rgba(51, 48, 48, 0.2);
}

</style>