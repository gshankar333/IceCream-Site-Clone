<template>
    <headercomponent></headercomponent>
    <icecream></icecream>
    <pagefooter></pagefooter>
</template>

<script>
import headercomponent from '@/components/headercomponent.vue'
import icecream from '@/components/icecreamcomponent.vue'
import pagefooter from '@/components/pagefooter.vue'
    export default {
        name:'icecreampage',
        components:{icecream,headercomponent,pagefooter
        }
        
    }
</script>

<style scoped>

</style>