import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {

    const firstName = ref('');
    const lastName = ref('');
    const bdayDate = ref();
    const gender = ref('')
    const email = ref('');
    const password = ref('');
    const passions = ref([]);

    const passionSelected = (passion, isSelected) => {
        if(!isSelected){
          const indexToRemove = passions.value.indexOf(passion)
          passions.value.splice(indexToRemove, 1)
          return
        }
        passions.value.push(passion)
    }

  return { firstName, lastName, bdayDate, gender, email, password, passions, passionSelected }
})
