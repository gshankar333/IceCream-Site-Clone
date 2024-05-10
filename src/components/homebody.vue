<template>
    <div class="bodyimg">
        <img :src="require('@/assets/body image.jpg')" alt="homeImage">
    </div>
    <div class="introduction">
        <div class="hello"></div>
        <p class="intro" v-text="intro"></p>
        <p class="introDetails" v-text="introDescription">
        </p>
    </div>
    <div class="gallery">
        <div class="gallery-panel" v-for="data in gridDetails" :key="data.img"
            :style="{ background: `url(${require('@/assets/gridimg/' + data.img)}) no-repeat`, backgroundSize: `cover` }">
            <h2 :class="[data.textColor ? 'textWhite' : 'textBlack', 'titles']" v-text="data.title"></h2>
            <h5 :class="[data.textColor ? 'textWhite' : 'textBlack', 'subtitles']" v-text="data.subtitle"></h5>
        </div>
    </div>
    <div class="judesicecream"></div>
    <div class="contestPanel">

        <div class="contestimg" v-for="data in judescream" :key="data"
            :style="{ background: `url(${require('@/assets/imgs/' + data)}) no-repeat`, backgroundSize: `cover` }"></div>
    </div>
</template>

<script>
export default {
    name: 'homebody',
    data() {
        return {
            intro: "We're nitro ice cream freak's, and we love crafting unbelievably delicious stripey tubs of joy.",
            introDescription: "Nitro's ice cream freak is a certified B Corp, as we believe in business as a force for good.We create both super indulgent and healthier products whilst treading as lightly as we can on our planet,and have reduced our carbon intensity by 21% since 2020.",
            gridDetails: [
                {
                    img: 'grid1.jpg',
                    title: 'awards',
                    subtitle: 'for great taste',
                    textColor: false
                },
                {
                    img: 'grid2.jpg',
                    title: 'win micro scooters',
                    subtitle: ' enter your giveway!',
                    textColor: true
                },
                {
                    img: 'grid3.png',
                    title: 'B corp',
                    subtitle: 'business for good',
                    textColor: true,
                },
                {
                    img: 'grid4.jpg',
                    title: 'ice cream for dogs',
                    subtitle: 'totally pawsome',
                    textColor: true,
                },
                {
                    img: 'grid5.jpg',
                    title: 'more fun, less sugar',
                    subtitle: 'little nitro freaks',
                    textColor: false,
                },
                {
                    img: 'grid6.png',
                    title: 'chefs range',
                    subtitle: 'for the best resturants',
                    textColor: false
                },


            ],
            judescream: ['one.jpg', 'two.jpg', 'three.jpg', 'four.jpg', 'five.jpg']
        }
    },
    methods: {

    },


}
</script>
<style>
.bodyimg {
    width: 100%;
}

.bodyimg img {
    width: 100%;

}

.hello {
    /* background-image: url("require()"); */

    background: url('~@/assets/hello.svg') no-repeat center;
    height: 65px;
    padding: 10px;
    margin-top: 10px;
}

.introduction {
    width: 75%;
    margin: auto;
    text-align: center;

}

.introduction p {
    padding: 10px 25px;
    margin: 0 25px;
}

.gallery,
.contestPanel {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    grid-gap: 1rem;
    margin: 30px auto;
    background-size: cover;
}

.contestPanel {
    width: 75%;
    display: flex;
    margin: auto;
    margin-top: 40px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}

.gallery-panel,
.contestimg {
    width: 100%;
    height: 25vw;
    border-radius: 0.75rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: end;
}

.contestimg {
    height: 12vw;
    width: 17%;
}

.textBlack {
    color: #353432;
}

.textWhite {
    color: #ffffff;
}

.titles,
.subtitles {
    text-transform: uppercase;
    padding: 0 45px 0 0;
}

.judesicecream {
    background: url('~@/assets/imgs/instagram-uk.svg') no-repeat center;
    height: 65px;
    padding: 10px;
    margin-top: 10px;
}</style>