<script setup>
import ButtonComponent from '@/components/ui-components/ButtonComponent.vue';
import {useUserStore} from "@/stores/user"

const store = useUserStore();

const clickou = () => {
    alert(`${store.gender}`)
}
</script>

<template>
<main>
    <h2>I am a</h2>
    <form class="iam-choices">
        <div>
            <label for="womam">Womam</label>
            <input type="radio" value="womam" name="gender" id="womam" v-model="store.gender">
        </div>
        <div>
            <label for="man">Man</label>
            <input type="radio" value="man" name="gender" id="man" v-model="store.gender">
        </div>
        <div>
            <label for="another">Another</label>
            <input type="radio" value="another" name="gender" id="another" v-model="store.gender">
        </div>
    </form>
    <ButtonComponent title="Continue" @click="clickou()"/>
    
</main>
</template>

<style scoped>

</style>
