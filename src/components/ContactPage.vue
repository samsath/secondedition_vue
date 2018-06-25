<template>
  <div class="fullpageitem">
    <div class="container">
      <p class="emailtext" @click="goHome()"></p>
      <a href="mailto:info@secondeditions.net" class="emaillink" >info@secondeditions.net</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  methods: {
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">
  .fullpageitem {
    display: flex;
    width: 100%;
    height: 100%;
    vertical-align: middle;
    justify-content: center;

    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .emailtext, .emaillink {
        text-align: center;
        font-size: 14px;
        color: black;
        margin: 0 auto;
        font-family: Helvetica, Arial, sans-serif;
      }
    }
  }
</style>
