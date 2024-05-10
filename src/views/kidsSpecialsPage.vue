<template>
    <headercomponent></headercomponent>
    <kidsSpcl></kidsSpcl>
    <pagefooter></pagefooter>
</template>

<script>
    import headercomponent from '@/components/headercomponent.vue'
    import kidsSpcl from '@/components/kidsspecial.vue'
    import pagefooter from '@/components/pagefooter.vue'
    export default {
        name:'kidspcl',
        components:{
            headercomponent,kidsSpcl,pagefooter
        }
        
    }
</script>

<style scoped>

</style>