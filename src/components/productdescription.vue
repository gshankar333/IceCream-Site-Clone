<template>
    <!-- <headercomponent></headercomponent> -->
    <div class="description">
        <div class="productDisplay">
            <h1 v-text="productTitle"></h1>
            <div class="imgBlock">
                <router-link class="homelink" to="/icecreams"><img :src="require('@/assets/iceccreamImg/'+productimg)" alt=""></router-link>
            </div>
        </div>

        <div class="productDescription">
            <div class="headOne">
                <h3>Nutrients</h3>
                <hr>
            </div>
            <div>
                <div class="nutrientlist" v-for="(item,key) in nutrients" :key="item">
                    <h4>{{ key }} </h4><h4>{{ item }} </h4>
                </div>
            </div>
            <div class="ingredients">
                <div class="headOne">
                <h3>Ingredients</h3>
                <hr>
                </div>
                <h5 v-text="ingredients"></h5>
            </div>
            <div class="buttons">
                <router-link class="homelink" to="/"><button class="btn">return to home</button></router-link>
                <router-link class="homelink" to="/icecreams"><button class="btn">return to ice creams</button></router-link>
                <router-link class="homelink" to="/"><button class="btn">Buy the product</button></router-link>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
// import headercomponent from './headercomponent.vue'
    import data from '@/assets/productsData.json'
    export default {
        name:'PDP',
        components:{
            // headercomponent
        },
        data(){
            return {
                postData: this.$route.params.id,
                productData:data,
                nutrients:{},
                productimg:'logo.png',
                productTitle:'',
                ingredients:'',
                props:['imgs']
            }
        },
        methods:{
        getNutrients(){
            
            let filteredObject=this.productData.find((item) => item.id == this.postData )
            this.nutrients=filteredObject.nutritionInfo
            this.productimg=filteredObject.iceCreamImg
            this.productTitle=filteredObject.title
            this.ingredients=filteredObject.ingredients
            console.log(this.productimg , this.productTitle,this.ingredients)
        },
        },

        mounted(){
            this.getNutrients()
            },
    }
</script>

<style scoped>
.description{
    display: flex;
    width: 75%;
    margin: auto;
    justify-content: space-between;
}
.imgBlock{
    margin-top: 25px;
}
.productDescription{
    width: 40%;
    padding: 15px;
    display: flex;
    flex-direction: column;

}
.nutrientlist,.headOne{
    width: 75%;
    display: flex;
    justify-content: space-between;
    margin:0 auto 15px auto;
}
.headOne{
    flex-direction: column;
}
.ingredients h5{
    width: 75%;
    margin: 16px auto;
    text-align: justify;
    padding: 10px;
}
.buttons{
    display: flex;
    text-transform: capitalize;
    justify-content: space-between;
    margin: 10px;
    width: 100%;
}
.buttons button{
    text-transform: capitalize;
    padding: 7px;
    border: none;
    border-radius: 10px;
    background-color: #c4eff8;
    color: #353234;
    font-weight: bolder;
    cursor: pointer;
}
</style>