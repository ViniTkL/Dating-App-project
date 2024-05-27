<script setup>
const props = defineProps(
{  
    title: {
        type: String,
        default: ""
    },
}  
)
</script>

<template>
    <button @click="">{{ title }}</button>
</template>

<style scoped>
button{
    width: 75%;
    height: 56px;
    background-color: #E94057;
    border: 1px solid #E94057;
    border-radius: 10px;
    font-size: 18px;
    color: #FFFFFF;
    }

button:hover{
    cursor: pointer;
}
</style>