<template>
  <headercomponent></headercomponent>
  <homebody></homebody>
  <pagefooter></pagefooter>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import headercomponent from '@/components/headercomponent.vue'
import homebody from '@/components/homebody.vue'
import pagefooter from '@/components/pagefooter.vue'
  export default{
    components:{
      headercomponent,homebody,pagefooter
    }
  }
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@100&family=Poppins:wght@200&display=swap');
*{
  margin: 0;
  padding: 0;
  font-family: 'Hanken Grotesk', sans-serif;
font-family: 'Poppins', sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
a{
  text-decoration: none;
  text-transform: uppercase;
  color: #343234;
  font-weight: 700;
}
a:hover{
  font-weight: bold;
}
</style>

