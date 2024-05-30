<script setup>
import ButtonComponent from '@/components/ui-components/ButtonComponent.vue';
import {useUserStore} from "@/stores/user"
import { useRouter } from 'vue-router';
import { Select } from "@element-plus/icons-vue"
import GoBackButton from '@/components/ui-components/VIconButton.vue'

const store = useUserStore();
const router = useRouter();

const goToPreviousPage = () => {
    router.push('/profile-details')
}

const goToNextPage = () => {
    router.push('/passions')
}

</script>

<template>
<main class="iam-container">
    <GoBackButton class="go-back" @click="goToPreviousPage()" />
    <h2>I am a</h2>
    <form class="iam-choices">
        <div>
            <input type="radio" value="womam" name="gender" id="womam" v-model="store.gender">
            <label for="womam">Womam<el-icon><Select /></el-icon></label>
        </div>
        <div>
            <input type="radio" value="man" name="gender" id="man" v-model="store.gender">
            <label for="man">Man<el-icon><Select /></el-icon></label>
        </div>
        <div>
            <input type="radio" value="another" name="gender" id="another" v-model="store.gender">
            <label for="another">Another<el-icon><Select /></el-icon></label>
        </div>
    </form>
    <ButtonComponent title="Continue" @click.prevent="goToNextPage()"/>     
    
</main>
</template>

<style scoped>

h2{
    position: relative;
    right: 100px;
    font-size: 34px;
    font-weight: 700;
    color: #000000;
}

.iam-container{
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: space-evenly;
    height: 100vh;
    background-color: #FFFFFF;
}

.go-back{
    position: relative;
    right: 120px;
}

.iam-choices, .iam-choices div{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    width: 100%;
    gap: 12px
}

.iam-choices  div > input{
    display: none;
}

.iam-choices div > label {
    display: flex;
    justify-content: space-between;
    width: 75%;
    height: 58px;
    border: 1px solid#E8E6EA;
    border-radius: 16px;
    padding: 14px;
    text-align: left;
    font-size: 16px;
    font-weight: 700;
    color: #000000;
}

.iam-choices div > label .el-icon{
    align-self: center;
}

.iam-choices div > input:checked + label {
    background-color: #E94057;
    color: #FFFFFF;
}
</style>
