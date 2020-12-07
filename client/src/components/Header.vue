<template>
    <div class="banner">
        <h1>Stock Uno</h1>
        <form @submit="addStock">
            <input id="search" type="text" v-model="stock" placeholder="Add Stock">
        </form> 
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/contact">Contact</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    data(){
        return {
            stock: ''
        }
    },
    methods: {
        addStock(e){
            e.preventDefault();
            const newStock = {
                id: 6,
                name: this.stock,
                shares: 0,
                value: 0
            }
            this.$emit('add-stock', newStock);
            this.stock = ''
        }
    }
}
</script>

<style>
h1 {
    font-weight: 900;
    font-size: 1.6em;
    color: #2c3e50
}
.banner {
    /* border: 1px solid red; */
    width: 590px;
    margin: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#search {
    border: 1px solid rgb(179, 179, 179);
    border-radius: 25px;
    padding: 3px 7px;
    font-family: 'Poppins', sans-serif;
    outline: none;
}
#app {
  color: #2c3e50;
}
#nav {
  padding: 20px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>