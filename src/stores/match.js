import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useMatchStore = defineStore('match', () => {

    const currentUserIndex = ref(0);
    const hasMoreUsers = ref(true)

    const nextUserIndex = () => {
        currentUserIndex.value += 1
    } 

    const noMoreUsers = () => {
        hasMoreUsers.value = false
    }

    const getCurrentUserIndex = computed(() => {
        return currentUserIndex.value
    })

    const getHasMoreUsers = computed(() => {
        return hasMoreUsers.value
    })

    return { getCurrentUserIndex, getHasMoreUsers, nextUserIndex, noMoreUsers }

})
