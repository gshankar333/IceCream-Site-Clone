<template>
    <header>
        <div class="headWrapper">
            <div class="categories">
                <a href="#">Shop</a>
                <a href="#">carbon cutting</a>
                <div class="dropdown">

                    <ul>
                        <li v-for="option in options" :key="option.title">
                            <span @click="showSubMenu(option.title)">
                                <a href="#">{{ option.title }}</a>
                            </span>
                            <ul v-if="option.showSubMenu">
                                <li v-for="subItem in option.subMenu" :key="subItem">
                                <router-link :to="subItem.path">{{ subItem.pathName }}</router-link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <router-link class="homelink" to="/"><img class="logoimg" :src="require('@/assets/icecream-logo.png')" alt="logo"></router-link>
                <router-view></router-view>
            <!-- <a href="#" id="logo"><img class="logoimg" :src="require('@/assets/icecream-logo.png')" alt="logo">
                
            </a> -->
            <div class="pageDetails">
                <a href="#">about us</a>
                <a href="#">Recipes</a>
                <a href="#">where to buy</a>
            </div>
        </div>
    </header>
</template>
  
<script>
export default {
    name:'headercomponent',
    data() {
        return {
            options: [
                {
                    title: "products",
                    subMenu: [
                       {pathName:"ice cream",
                        path:'/icecreams',
                        name:'icecreampage',
                    } ,
                    {pathName:"children specials",
                    path:'/kidsSpecials',
                } ,
                {pathName:"puds",
                path:'/shakes&puds'
            } 
                    ],
                    showSubMenu: false,
                },
                // Add more options as needed
            ],
        };
    },
    methods: {
        showSubMenu(title) {
            const option = this.options.find((opt) => opt.title === title);
            if (option) {
                option.showSubMenu = true;
            }
        },
        hideSubMenu(title) {
            const option = this.options.find((opt) => opt.title === title);
            if (option) {
                option.showSubMenu = false;
            }
        },
    },
};
</script>
  
<style>
header {
    position: sticky;
    top: 0;
    background: #ffffff;
}

.headWrapper {
    width: 75%;
    margin: auto;
}

.headWrapper,
.categories,
.pageDetails {
    display: flex;
    justify-content: space-between;
    
    align-items: center;
}

.categories,
.pageDetails {
    width: 40%;
    padding: 10px;
    display: flex;
}

.headWrapper a {
    padding: 5px 5px;
    cursor: pointer;
    transition: 0.4s;
}
.headWrapper>.categories a:hover,.headWrapper>.pageDetails a:hover,.headWrapper a .active{
    /* background-color: #343234; */
    /* color: #ffffff; */
    border-bottom:2px double #ff5858;
}
.homelink{
    border: none;
}
.logoimg {
    width: 100px;
    border: none;
}
.dropdown {
    position: relative;
    display: inline-block;
}

ul {
    list-style: none;
    padding: 0;
    display: flex;
}

li {
    margin-right: 10px;
    position: relative;
    cursor: pointer;
}

ul ul {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #c4eff8;;
    padding: 5px;
    border: 1px solid #c4eff8;
    min-width: 150px;
    border-radius: 15px;
}

ul li:hover ul {
    width: 180px;
    line-height: 35px;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
}

span:hover {
    font-weight: bold;
}
</style>
  