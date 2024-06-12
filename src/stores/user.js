import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {

    const user = ref({}) 
    const passions = ref([]);

    const passionSelected = (passion, isSelected) => {
        if(!isSelected){
          const indexToRemove = passions.value.indexOf(passion)
          passions.value.splice(indexToRemove, 1)
          return
        }
        passions.value.push(passion)
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

  return { passions, passionSelected, getUserFullName, saveUser, saveGender, savePassions }
})
