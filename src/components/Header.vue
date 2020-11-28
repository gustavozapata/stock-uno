<template>
    <div class="banner">
        <h1>Stock Uno</h1>
        <form @submit="addStock">
            <input type="text" v-model="stock" placeholder="Add Stock">
        </form> 
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
            console.log("hola");
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

<style scoped>
h1 {
    font-weight: 900;
    font-size: 1.6em;
    color: #2c3e50
}
.banner {
    /* border: 1px solid red; */
    width: 550px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>