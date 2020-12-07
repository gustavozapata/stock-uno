<template>
  <Header v-on:add-stock="addStock" />
  <router-view/>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>
