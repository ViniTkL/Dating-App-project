<script setup>
import ButtonComponent from '@/components/ui-components/ButtonComponent.vue';
import { ref } from 'vue';
import { Calendar, CameraFilled } from "@element-plus/icons-vue"

const firstName = ref('');
const lastName = ref('');

const onConfirm = () => {
    if(firstName.value.length === 0 || lastName.value.length ===0 ){
        alert("Por favor, insira uma nome e sobrenome válidos")
    }
}
</script>

<template> 
    <main class="profile-detail-container">
            <h2>Profile Details</h2>
            <div class="user-profile-picture">
                <img class="user-image"  src="../assets/onboard-image-03.png" alt="foto">
                <label for="user-image"><el-icon><CameraFilled /></el-icon></label>
                <input type="file" name="user-image" id="user-image">
            </div>
            <div class="profile-info">
                <label for="first-name">First name</label>
                <input type="text" name="first-name" id="first-name" v-model="firstName" required>

                <label for="last-name">Last name</label>
                <input type="text" name="last-name" id="last-name" v-model="lastName"  required>

                <button><el-icon><Calendar /></el-icon></button>
            </div>
            <ButtonComponent title="Confirm" @click="onConfirm()" />
    </main>
</template>

<style scoped>
.profile-detail-container{
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: space-around;
    height: 100vh;
    background-color: #FFFFFF;
    padding: 12px;
}

.profile-detail-container h2{
    font-weight: 400;
    font-size: 36px;
    text-align: left;
    color:#000000;
    margin-bottom: -24px;
}

.user-profile-picture{
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    margin-bottom: -130px;
}

.user-profile-picture .user-image{
    height: 120px;
    width: 120px;
}

.user-profile-picture input{
    display: none
}

.user-profile-picture label{
    position: relative;
    bottom: 18px;
    left: 50px;
    background-color: #E94057;
    border: 1px solid #FFFFFF;
    border-radius: 50%;
    width: 33px;
    width: 33px;
}

.user-profile-picture label > .el-icon{
    position: relative;
    left: 8px;
    top: 1px;
    color: #FFFFFF;
}

.profile-info{
    display: flex;
    align-items: center;
    width: 100%;
    flex-flow: column wrap;
}

.profile-info  label{
    color:#00000066;
    font-size: 12px;
    font-weight: 400;
    background-color: #FFFFFF;
    position: relative;
    top: 10px;
    right: 90px;
}

.profile-info input{
    border: 1px solid #00000066;
    border-radius: 14px;
    height: 60px;
    width: 75%;
    padding: 5px 10px 5px 10px;
    outline: none;
    font-size: 14px;
    font-weight: 400;
}

</style>