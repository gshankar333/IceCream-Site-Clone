<template>
<headercomponent></headercomponent>
 <PDP></PDP>
 <pagefooter></pagefooter>
</template>

<script>
    import PDP from '@/components/productdescription.vue'
    import headercomponent from '@/components/headercomponent.vue'
    import pagefooter from '@/components/pagefooter.vue'
    export default {
        name:'descriptionPage',
        components:{
            PDP,pagefooter,headercomponent
        },
        data(){
            return{
                key:this.$route.params.id
            }
        }
    }
</script>

<style scoped>

</style>