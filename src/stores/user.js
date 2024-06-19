import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {

    const user = ref({}) 
    const authToken = ref('');
    const passions = ref([]);
    const newUser = ref(false);
    const usersArray = ref([])

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
          username: params.email,
          password: params.password,
        }), {
          method: 'POST',
          headers: {
            "Content-type": "application/json"
          } ,
      }).catch(error => { 
        console.log(error); 
      })

      user.value = await response.json();

      return user.value.message ? false : true; 
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

  const fetchUsers = async () => {
    const response = await fetch('http://localhost:3000/show-users', {
      method: 'GET',
      headers: {
        "Content-type": "application/json"
      },            
  })

  usersArray.value = await response.json();

  return usersArray.value
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
   
  const getUserFullName = () =>  `${user.value.first_name} ${user.value.last_name}`

  const getUser = computed(() => user.value)

  const getUsers = computed(() => usersArray.value)


  return { passions, authToken, getUser, getUsers, passionSelected, getUserFullName, saveUser, saveGender, savePassions, createUser, logIn, isNewuser, fetchUsers }
})
