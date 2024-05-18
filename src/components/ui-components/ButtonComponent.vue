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
        border-radius: 4px;
        border: 1px solid #FFF;
    }
</style>