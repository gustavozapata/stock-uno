<template>
  <div id="Timeline">
      <h2>{{timelineTitle}}</h2>
      <form @submit="addStock">
        <input type="text" :value="title" placeholder="Titulo">
      </form>
  </div>
</template>

<script>
export default {
    props: ['timelineTitle'],
    data(){
        return {
            title: ''
        }
    }
}
</script>

<style>
#Timeline {
    margin: 50px
}
</style>