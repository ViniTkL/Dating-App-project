<script setup>

</script>

<template>
<div class="card-container">
    <slot></slot>
</div>

</template>

<style scoped>
.card-container{
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    align-items: center;
}
</style>