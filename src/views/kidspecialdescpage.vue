<template>
    <headercomponent></headercomponent>
    <kidspclComponent></kidspclComponent>
    <pagefooter></pagefooter>
</template>

<script>
import kidspclComponent from '@/components/kidspclDescComponent.vue'
import headercomponent from '@/components/headercomponent.vue'
import pagefooter from '@/components/pagefooter.vue'
    export default {
        name:'kidspcldescription',
        components:{
            kidspclComponent,headercomponent,pagefooter
        }
    }
</script>

<style scoped>

</style>