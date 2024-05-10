<template>
    <div class="signup">
        <div class="scoop"></div>
        <span v-text="signupText"></span>
        <form action="#">
            <input type="email" v-model="email" placeholder="Enter your email address">
            <button>signup</button>
        </form>
    </div>
    <div class="links">
        <a href="#">T&CS</a>
        <a href="#">PRIVACY </a>
        <a href="#">MODERN SLAVERY </a>
        <a href="#">ENVIRONMENT</a>
        <a href="#">SITEMAP</a>
    </div>
    <div class="copyright">
        <span v-text="copyright"></span>
    </div>
</template>

<script>
export default {
    name: 'pagefooter',
    data() {
        return {
            signupText: 'Sign up for news, recipes and competitions.',
            email: '',
            copyright: '© 2023 JUDES, NORTHFIELDS FARM, HAZELEY ROAD, TWYFORD, WINCHESTER, HANTS, SO21 1QA '

        }
    },
}
</script>

<style scoped>
.signup {
    margin-top: 4rem;
    margin-bottom: 1rem;
    padding: 15px;
    background-color: #c4eff8;
}

.scoop {
    background: url('~@/assets/imgs/the-scoop.svg') no-repeat center;
    height: 65px;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 30px;
}

form {
    margin-top: 10px;
}

form input[type=email] {
    width: 25%;
    padding: 12px 20px;
    margin: 8px 5px;
    box-sizing: border-box;
}

form button {
    width: 10%;
    padding: 12px 20px;
    box-sizing: border-box;
    color: #ffffff;
    background-color: #353432;
    text-transform: uppercase;
    cursor: pointer;

}

.links {
    width: 75%;
    display: flex;
    justify-content: space-between;
    margin: 2px auto 12px auto;
}

.links a {
    padding: 5px;
    cursor: pointer;
}

.copyright {
    padding: 10px;
    color: #ffffff;
    background-color: #353432;
    font-size: 12px;
}
</style>