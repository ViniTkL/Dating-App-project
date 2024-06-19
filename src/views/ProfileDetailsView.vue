<script setup>
import ButtonComponent from '@/components/ui-components/ButtonComponent.vue';
import { ref } from 'vue';
import { Calendar, CameraFilled, DArrowLeft, ArrowLeftBold, ArrowRightBold, DArrowRight } from "@element-plus/icons-vue"
import {useUserStore} from "@/stores/user"
import { useRouter } from 'vue-router';

const store =  useUserStore();

const router = useRouter();

const userInfos = ref({
    email: '',
    birthday_date: new Date(),
    password: '',
    first_name: '',
    last_name: '',
    pf_picture: ''
});

const calendar = ref('');

const isCalendarOpen = ref(false);

const reader = new FileReader();

const imageUrl = ref('')



const selectDate = (val) => {
    calendar.value.selectDate(val)
}

const formatDate = (date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

// todo - salvar essas informações no backenderson quando estiver pronto, também ver como salvar a porcaria da foto
const onConfirm = async () => {
    
    const newUser = await isNewUser().then((resposta) => { return resposta})
   
    if(!userInfos.value.birthday_date){
        alert("Por favor, Selecione sua data de nascimento");
        return
    }

    if(verifyPassword(userInfos.value.password) && newUser){
        saveUser();
        router.push('/profile-details/i-am');
        return 
    }

    alert('Usuario já cadastrado, por favor faça o log in')
}

const saveUser = () => {
     userInfos.value.birthday_date = formatDate(userInfos.value.birthday_date)
     store.saveUser(userInfos.value)
}

const isNewUser =  () => {
    const isValid =  store.isNewuser(userInfos.value.email);
    return isValid;
}

const verifyPassword = (password) => {
    let lowerCaseQuantity = 0;
    let upperCaseQuantity = 0;
    let numberQuantity = 0;
    let specialCharacterQuantity = 0;


    for( let char of password ){

        if(isNumber(char)){
            numberQuantity += 1;
        }else if(isLowerCase(char)){
            lowerCaseQuantity += 1;
        }else if(isUpperCase(char)){
            upperCaseQuantity += 1;
        }else{
            specialCharacterQuantity += 1;
        }
    }
    
    if(lowerCaseQuantity>=1 && upperCaseQuantity>=1 && numberQuantity>=1 && specialCharacterQuantity>= 1){
        return true
    }

    alert('Senha inválida, Ela dever conter no Mínimo: 1 Carater maiusculo, 1 carater minúsculo, 1 número e 1 carater espacial(@, !, etc...)');
    return false
}

const isNumber = (password) => {
    return password.match(/[0-9]/i);
}

const isLowerCase = (password) => {
    return password.match(/[a-z]/);
}

const isUpperCase = (password) => {
    return password.match(/[A-Z]/);
}

const saveProfilePictue = (file) => {
    const photo = file.target.files[0]
    userInfos.value.pf_picture = photo
    if(photo.name.includes(".jpg") || photo.name.includes(".png")){
        addPhoto(reader);
        reader.readAsDataURL(photo)
        return
    }

    alert('Foto de perfil inválida')
}

const addPhoto = (reader) => {
    reader.onload = () => {
        imageUrl.value = reader.result
    }
}

</script>

<template> 
<main>
    <form class="profile-detail-container" :class="{unfocused: isCalendarOpen}">
            <h2>Profile Details</h2>
            <div class="user-profile-picture">
                <img class="user-image"  :src="imageUrl" alt="foto">
                <label for="user-image"><el-icon><CameraFilled /></el-icon></label>
                <input type="file" name="user-image" id="user-image" @change="saveProfilePictue">
            </div>
            <div class="profile-info" >

                <label for="email" class="email-label">Email</label>
                <input type="email" name="email" id="email" v-model="userInfos.email" required>

                <label for="password">Password</label>
                <input type="password" name="password" id="password" minlength="6" v-model="userInfos.password" required>
                
                <label for="first-name">First name</label>
                <input type="text" name="first-name" id="first-name" v-model="userInfos.first_name" required>

                <label for="last-name">Last name</label>
                <input type="text" name="last-name" id="last-name" v-model="userInfos.last_name"  required>

                <div class="bday-btn" @click="isCalendarOpen = true" >
                    <el-icon :size="30"><Calendar /></el-icon> 
                    <span>Choose birthday date</span> 
                </div>

            </div>
            <div class="calendar-container" v-if="isCalendarOpen">
                        <el-calendar ref="calendar" v-model="userInfos.birthday_date" >
                            <template #header="{ date }">
                                <span>Birthday</span>
                            <el-button-group>
                                <el-button size="small" @click="selectDate('prev-year')">
                                    <el-icon><DArrowLeft /></el-icon>
                                </el-button>
                                <el-button size="small" @click="selectDate('prev-month')">
                                    <el-icon><ArrowLeftBold /></el-icon>
                                </el-button>
                                <el-button size="small" class="bday-date-show" disabled><span>{{ date }}</span></el-button>
                                <el-button size="small" @click="selectDate('next-month')">
                                    <el-icon><ArrowRightBold /></el-icon>
                                </el-button>
                                <el-button size="small" @click="selectDate('next-year')">
                                    <el-icon><DArrowRight /></el-icon>
                                </el-button>
                            </el-button-group>
                            </template>
                        </el-calendar>

                        <ButtonComponent title="Save" @click="isCalendarOpen = false"/>
                    </div>
            <ButtonComponent title="Confirm" @click.prevent="onConfirm()" />
    </form>
</main>
</template>

<style >
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
    font-weight: 700;
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
    margin-bottom: -100px;
}

.user-profile-picture .user-image{
    height: 120px;
    width: 120px;
    border-radius: 24px;
    border: 1px solid #555555
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
    font-size: 14px;
    font-weight: 400;
    background-color: #FFFFFF;
    position: relative;
    top: 10px;
    right: 88px;
    width: 78px;
    text-align: center;
}

.profile-info label.email-label{
    width: 50px;
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

.bday-btn{
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    gap: 12px;
    background-color: #ffc2ca;
    width: 75%;
    border: 1px solid #ffc2ca;
    border-radius: 10px;
    height: 60px;
    margin-top: 22px;
    padding: 10px;
    color: #E94057;
}

.bday-btn span{
    font-weight: 700;
    font-size: 14px;
}

.calendar-container{
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    position: fixed;
    bottom: 0px;
    background: #FFFFFF;
    padding: 8px;
    border-top-left-radius: 26px;
    border-top-right-radius: 26px;
}

.calendar-container .el-calendar{
    color: #E94057;
}

.el-calendar__header{
    display: flex;
    align-items: center;
    flex-flow: column wrap;
    justify-content: center;
    padding: 12px 20px;
}   

.el-calendar__header > span {
    color: #000000;
}

.el-button{
    border: none;
}

.el-button:hover{
  border: 1px solid #E94057;
  border-radius: 50%;
  background-color: #E94057;
  color: #FFFFFF;
  transition: all ease-in-out 180ms;
}

.bday-date-show, .bday-date-show.is-disabled{
    color: #E94057; 
    font-size: 20px;
}

.bday-date-show:hover{
    border: none;
    background: #FFFFFF;
}

.unfocused{
    background: #555555;
}

</style>