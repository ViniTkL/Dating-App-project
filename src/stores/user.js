import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {

    const firstName = ref('');
    const lastName = ref('');
    const bdayDate = ref();

  return { firstName, lastName, bdayDate }
})
