<template>
    <headercomponent></headercomponent>
    <pudsDescription></pudsDescription>
    <pagefooter></pagefooter>
</template>

<script>
import pudsDescription from '@/components/pudDescComponent.vue'
import headercomponent from '@/components/headercomponent.vue'
import pagefooter from '@/components/pagefooter.vue'
    export default {
        name:'pudsPage',
        components:{
            pudsDescription,headercomponent,pagefooter
        }

    }
</script>

<style scoped>

</style>