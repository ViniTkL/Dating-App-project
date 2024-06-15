import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {

    const user = ref({}) 
    const authToken = ref('');
    const passions = ref([]);

    const passionSelected = (passion, isSelected) => {
        if(!isSelected){
          const indexToRemove = passions.value.indexOf(passion)
          passions.value.splice(indexToRemove, 1)
          return
        }
        passions.value.push(passion)
    }

    const createUser = async () => {
        await fetch('http://localhost:3000/profile-details', {
            method: 'POST',
            body: JSON.stringify(user.value),
            headers: {
              "Content-type": "application/json",
              "Access-Control-Allow-Origin": "*"
            },            
        }).then( response => { console.log(response) }).catch(error => { console.log(error)})
    }

    const logIn = async (params) => {
      const response = await fetch('http://localhost:3000/sign-in?' + new URLSearchParams({
          username: params.email,
          password: params.password,
        }), {
          method: 'POST',
          headers: {
            "Content-type": "application/json"
          },            
          mode: "no-cors"
      }).catch(error => { 
        console.log(error); 
      })

      authToken.value = await response.json
      console.log(authToken.value)
  }
    
    const saveUser = (userInfo) => {
      user.value = userInfo
    }
    
    const saveGender = (userGender) => {
      user.value.gender = userGender
    }
    
    const savePassions = () => {
        user.value.passions = passions.value;
    }
   
    const getUserFullName = () =>  `${firstName.value} ${lastName.value}`

  return { passions, authToken, passionSelected, getUserFullName, saveUser, saveGender, savePassions, createUser, logIn }
})
