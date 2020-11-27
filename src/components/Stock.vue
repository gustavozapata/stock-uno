<template>
    <div class="stock-container" v-on:click="clicado">
        <div>
            <h3 v-bind:class="{'is-stock':stock.completed}">{{stock.name}}</h3>
            <p class="shares">{{stock.shares}} shares</p>
        </div>
        <p class="price">${{stock.value}}</p>
    </div>
</template>

<script>
export default {
    name: "Stock",
    props: ["stock"],
    methods: {
        clicado() {
            console.log(this.stock.name)
        }
    }
}
</script>

<style scoped>
.stock-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    /* margin: 30px 0; */
}
.stock-container:hover {
    background-color: rgb(229, 234, 243);
}
.stock-container div {
    margin: 10px 20px;
}
.shares {
    color: #767676;
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