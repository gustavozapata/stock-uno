<template>
    <div class="container">
        <p class="all-stocks" @click="$emit('select-stock', 'All stocks')">All stocks</p>
        <div v-bind:key="stock.id" v-for="stock in stocks">
            <Stock v-bind:stock="stock" v-on:select-stock="$emit('select-stock', stock.name)" />
        </div>
    </div>
</template>

<script>
import Stock from './Stock'

export default {
    name: "StockContainer",
    components: {
        Stock
    },
    props: ["stocks"]
}
</script>

<style scoped>
.container {
    background-color: #F9F9F9;
    width: 230px;
    padding: 5px 0px 15px 0;
    margin: 20px 0;
    border-radius: 15px;
    /* border: 1px solid blue; */
}
.all-stocks {
    text-decoration: underline;
    font-weight: 600;
    margin: 10px 20px;
    cursor: pointer;
}
</style>