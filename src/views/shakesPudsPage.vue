<template>
    <headercomponent></headercomponent>
    <shakespudsComponents></shakespudsComponents>
    <pagefooter></pagefooter>
</template>

<script>
    import headercomponent from '@/components/headercomponent.vue'
    import shakespudsComponents from '@/components/shakesPudsComponent.vue'
    import pagefooter from '@/components/pagefooter.vue'
    export default {
        name:'shakespuds',
        components:{
                headercomponent,shakespudsComponents,pagefooter
        }
    }
</script>

<style scoped>

</style>