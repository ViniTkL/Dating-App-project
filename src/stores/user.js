import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {

    const user = ref({}) 
    const authToken = ref('');
    const passions = ref([]);
    const newUser = ref(false);

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
            headers: {"Content-Type": "application/json"},
        }).then( response => { console.log(response) }).catch(error => { console.log(error)})
    }

    const logIn = async (params) => {
      const response = await fetch('http://localhost:3000/sign-in?' + new URLSearchParams({
          email: params.email,
          password: params.password,
        }), {
          method: 'POST',
          headers: {
            "Content-type": "application/json"
          }            
      }).catch(error => { 
        console.log(error); 
      })

      authToken.value = await response.json()
  }
    

  const isNewuser = async (params) => {
      const response = await fetch('http://localhost:3000/show-user?'  + new URLSearchParams({
        email: params
      }), {
        method: 'GET',
        headers: {
          "Content-type": "application/json"
        },            
    })

    
    newUser.value = await response.json();

    return newUser.value.email ?  false : true 

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

  return { passions, authToken, passionSelected, getUserFullName, saveUser, saveGender, savePassions, createUser, logIn, isNewuser }
})
