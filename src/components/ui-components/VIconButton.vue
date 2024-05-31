<script setup>
    const props = defineProps(['icon'])
</script>

<template>
<button ><font-awesome-icon :icon=icon /></button>
</template>

<style scoped> 
button{
    display: flex;
    width: 15%;
    height: 52px;
    justify-content: center;
    align-items: center;
    border: 1px solid #E8E6EA;
    border-radius: 16px;
    color: #E94057;
    font-size: 20px;
    background-color: #FFFFFF;
}
</style>