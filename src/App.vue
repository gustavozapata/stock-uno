<template>
  <div id="app">
    <Header v-on:add-stock="addStock" />
    <main>
      <div>
        <StockContainer v-bind:stocks="stocks" v-on:select-stock="selectStock" />
        <StockContainer v-bind:stocks="currencies" v-on:select-stock="selectStock" />
        <StockContainer v-bind:stocks="api" v-on:select-stock="selectStock" />
      </div>
      <Timeline v-bind:title="title"/>
    </main>
  </div>
</template>

<script>
import Header from './components/Header'
import Timeline from "./components/Timeline"
import StockContainer from './components/StockContainer'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Header,
    StockContainer,
    Timeline
  },
  data(){
    return {
      title: "All stocks",
      currencies: [
         {
          id: 1,
          name: "US",
          shares: 8,
          value: 5119.5
        },
         {
          id: 2,
          name: "UK",
          shares: 5,
          value: 2419.5,
          completed: true
        }
      ],
      stocks: [
        {
          id: 1,
          name: "APPL",
          shares: 8,
          value: 119.5
        },
        {
          id: 1,
          name: "TSLA",
          shares: 1,
          value: 548.24
        },
        {
          id: 1,
          name: "MSFT",
          shares: 1,
          value: 204.0
        }
      ],
      api: []
    }
  },
  methods: {
    selectStock(name){
      this.title = name
    },
    addStock(newStock){
      this.stocks = [...this.stocks, newStock]
    }
  },
  created(){
    // https://financialmodelingprep.com/developer/docs/
    axios.get('https://financialmodelingprep.com/api/v3/quote/AAPL?apikey=demo')
    .then(res => {
      this.api[0] = {
        name: res.data[0].name, 
        value: res.data[0].price,
        shares: res.data[0].change
      }
    })
    .catch(err => console.log(err))
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
}
#app {
  margin: 30px;
}
main {
  display: flex;
  color: #2c3e50;
  /* margin: 20px; */
}
</style>
