<template>
    <div class="coverimg">
        <img :src="require('@/assets/bgimgs/shakesCover.jpg')" alt="homeImage"> 
    </div>
    <div>
        <div class="shakespudsCatalogue">
            <div class="card" v-for="data in shakespudsData" :key="data">
                <h3>{{ data.title }}</h3>
                <div class="imgBlock">
                    <img :src="require('@/assets/puds/'+data.itemImg)" alt="">
                </div>
                <router-link class="redirectbtn" :to="{name:'pudsPage',params: { id: data.id }}">more info</router-link>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '@/assets/pudsShakes.json'
    export default {
        name:'shakespudsComponents',
        data(){
            return {
                shakespudsData:data,
            }
        }
    }
</script>

<style scoped>
.coverimg,.coverimg > img{
    width:100%;
}
.shakespudsCatalogue{
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