<template>
  <div id="app">
    <div>
      <Header />
      <StockContainer v-bind:stocks="stocks" v-on:select-stock="selectStock" />
      <StockContainer v-bind:stocks="currencies" v-on:select-stock="selectStock" />
    </div>
    <Timeline v-bind:title="timelineTitle"/>
  </div>
</template>

<script>
import Header from './components/Header'
import Timeline from "./components/Timeline"
import StockContainer from './components/StockContainer'

export default {
  name: 'App',
  components: {
    Header,
    StockContainer,
    Timeline
  },
  data(){
    return {
      timelineTitle: "All stocks",
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
      ]
    }
  },
  methods: {
    selectStock(name){
      this.timelineTitle = name
    }
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
  display: flex;
  color: #2c3e50;
  margin: 20px;
}
</style>
