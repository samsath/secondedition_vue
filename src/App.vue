<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  margin: 0;
}
#app {
  margin: 0;
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
}
</style>
