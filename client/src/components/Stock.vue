<template>
    <div class="stock-container" @click="$emit('select-stock', stock.name)">
        <div>
            <h3 v-bind:class="{'is-stock':stock.completed}">{{stock.name}}</h3>
            <p class="shares">{{stock.shares}} shares</p>
        </div>
        <p class="price">${{stock.value.toFixed(2)}}</p>
    </div>
</template>

<script>
export default {
    name: "Stock",
    props: ["stock"]
}
</script>

<style scoped>
.stock-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}
.stock-container:hover {
    background-color: rgb(229, 234, 243);
}
.stock-container div {
    margin: 10px 20px;
}
.shares {
    color: #767676;
    font-size: .85em;
    margin-top: 2px;
}
.price {
    color: #0BCA10;
    font-weight: 600;
    margin: 10px 20px;
}
.is-stock {
    color: rgb(0, 89, 255);
}
</style>