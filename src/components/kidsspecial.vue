<template>
    <div class="coverimg">
        <img :src="require('@/assets/bgimgs/kidsCover.jpg')" alt="homeImage"> 
    </div>
    <div>
        <div class="kidsSpcialsCatalogue">
            <div class="card" v-for="data in kidsIcecream" :key="data">
                <h3>{{ data.title }}</h3>
                <div class="imgBlock">
                    <img :src="require('@/assets/kidspcl/'+data.itemImg)" alt="">
                </div>
                <router-link class="redirectbtn" :to="{name:'kidspcldescription',params: { id: data.id }}">more info</router-link>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '@/assets/kidsproductdata.json'
    export default {
        name:'kidsSpcl',
        data(){
            return{
                kidsIcecream:data
            }
        }
    }
</script>

<style scoped>
.coverimg,.coverimg > img{
    width:100%;
}
.kidsSpcialsCatalogue{
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