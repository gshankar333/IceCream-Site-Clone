<template>
    <div class="coverimg">
        <img :src="require('@/assets/bgimgs/icecreamCover.jpg')" alt="homeImage"> 
    </div>
    <div>
        <div class="iceCreamCatalogue">
            <div class="card" v-for="data in iceCreamData" :key="data">
                <h3>{{ data.title }}</h3>
                <h5>{{ data.subtitle }}</h5>
                <router-link class="redirectbtn" :to="{ name: 'descriptionPage', params: { id: data.id }, props: { imgs: data.iceCreamImg } }">
                <div class="imgBlock">
                    <img :src="require('@/assets/iceccreamImg/'+data.iceCreamImg)" alt="">
                </div>
            </router-link>
                <router-link class="redirectbtn" :to="{ name: 'descriptionPage', params: { id: data.id }, props: { imgs: data.iceCreamImg } }">more Info</router-link>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import PDP from './productdescription.vue'
    import data from '@/assets/productsData.json'
    export default {
        name:'icecream',
        components:{
            PDP
        },
        data(){
            return{
                iceCreamData:data
            }
        },
        props:{
        },
        methods:{
            getProductDetails(id){
                return this.iceCreamData.find((Object)=>Object.id===id)
            }
        }
    }
</script>

<style scoped>

.coverimg,.coverimg > img{
    width:100%;
}
.iceCreamCatalogue{
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin: auto;
}
.card
{
    width: 28%;
    padding: 25px;
    background-color: #f6f6f6;
}
.card img{
    max-width: 100%;
    max-height: 100%;
    display: block;
}
.redirectbtn{
    font-weight: bolder;
    border: none;
    cursor: pointer;
    text-transform: capitalize;
    border-bottom: 2px solid #343232;
}

</style>