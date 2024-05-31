<script setup>
const emit = defineEmits(['passionSelected']);

const passions = [{
            icon: "fa-camera",
            description: 'Photography',
            selected: false
        },
        {
            icon:'fa-bag-shopping',
            description: 'Shopping',
            selected: false
        },
        {
            icon:'fa-microphone',
            description: 'Karaoke',
            selected: false
        } ,
        {
            icon:'fa-brands fa-hornbill',
            description: 'Yoga',
            selected: false
        },
        {
            icon:'fa-fire-burner',
            description: 'Cooking',
            selected: false
        },
        {
            icon:'fa-dumbbell',
            description: 'Gym',
            selected: false
        },
        {
            icon:'fa-palette',
            description: 'Art',
            selected: false
        },
        {
            icon:'fa-wine-glass',
            description: 'Drink',
            selected: false
        },
        {
            icon:'fa-music',
            description: 'Music',
            selected: false
        },
        {
            icon:'fa-gamepad',
            description: 'Video games',
            selected: false
        },
        {
            icon:'fa-person-swimming',
            description: 'Swimming',
            selected: false
        },
        {
            icon:'fa-person-running',
            description: 'Run',
            selected: false
        },
        {
            icon:'fa-parachute-box',
            description: 'Extreme',
            selected: false
        },
        {
            icon:'fa-globe',
            description: 'Traveling',
            selected: false
        }                                    
    ]

const receba = (a) => {
    alert(a)
} 

const checkboxInput = (passion) => {
    let {description, selected} = passion
    
    selected = !selected
    passion.selected = selected

    emit('passionSelected', description, selected)
}
</script>

<template>
<div class="passion-option" v-for="passion in passions" :key="passion.description">
    <input type="checkbox" :id="passion.description" :value="passion.description" @input="checkboxInput(passion)">
    <label :for="passion.description"><font-awesome-icon :icon="passion.icon" />{{ passion.description }}</label>
</div>
</template>

<style scoped>

.passion-option{
    display: flex;
    width: 100%;
    flex: 1;
}

.passion-option > input {
    display: none;
}

.passion-option > label {
    display: flex;
    align-items: center;
    height: 45px;
    width: 146px;
    gap: 10px;
    padding: 0px 8px;
    border: 1px solid #E8E6EA;
    border-radius: 20px; 
    font-size: 14px;
    font-weight: 700;
    color: #000000;
}

.passion-option > input:checked + label {
    background-color: #E94057;
    color: #FFFFFF;
    border: #FFFFFF;
}

@media (max-height: 750px ){
    .passion-option > label {
        height: 30px;
    } 
}

</style>