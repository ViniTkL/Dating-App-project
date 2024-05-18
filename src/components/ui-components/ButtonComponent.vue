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
</style>