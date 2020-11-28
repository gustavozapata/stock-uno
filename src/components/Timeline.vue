<template>
  <div id="Timeline">
      <h2>{{title}}</h2>
  </div>
</template>

<script>
export default {
    name: 'Timeline',
    props: ['title']
}
</script>

<style scoped>
#Timeline {
    margin: 25px
}
</style>