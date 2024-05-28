<script setup>
import GoBackButton from '@/components/ui-components/GoBackButton.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToPreviousPage = () => {
    router.push('/i-am')
}
</script>

<template>
<main>
    <GoBackButton @click="goToPreviousPage()"/>
</main>
</template>

<style scoped>

</style>