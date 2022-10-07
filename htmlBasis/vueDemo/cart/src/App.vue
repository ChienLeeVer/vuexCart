<template>
    <div id="nav" class="text-center">
        <router-link :class="{active: $route.name === 'Home'}" to="/">Home</router-link>
        <router-link :class="{active: $route.name === 'Cart'}" to="/cart">Cart</router-link>
        <router-view></router-view>
    </div>


</template>

<script>


export default {
    name: 'app',
    mounted() {
        this.$store.commit('updateCartFromLocalStorage')
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

html, body {
    margin: 0;
    padding: 0;

}

body {
    background-color: rgb(245, 245, 245);
    color:black;
}

#nav {
    padding: 10px 0;
    width: 100vw;
    height: 30px;
    background-color: white;
    line-height: 30px;
}

a {
    font-weight: bold;
    color: darkgray;
    text-decoration: none;
    margin: 0 5px 0 5px;
    font-size: 1.25rem;
}

a.active {
    color: #2c3e50;
}

.text-center {
    text-align: center;
}
</style>
