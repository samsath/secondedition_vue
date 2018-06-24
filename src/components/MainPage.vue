<template>
  <div class="loadsection" @click="goToContact()">
    <div class="carousel" >
      <div class="item " v-bind:class="{ active: working }">
        <img class="bodyimg" src="../../static/working.png">
      </div>
      <div class="item" v-bind:class="{ active: rich }">
        <img class="bodyimg" src="../../static/richman_a.png">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MainPage',
  data () {
    return {
      working: false,
      rich: false,
      interval: null
    }
  },
  methods: {
    switch () {
      if (this.working) {
        this.working = false
        this.rich = true
      } else {
        this.rich = false
        this.working = true
      }
    },
    goToContact () {
      this.$router.push('c')
    }
  },
  created: function () {
    this.working = true
    this.interval = setInterval(function () {
      this.switch()
    }.bind(this), 7000)
  },
  beforeDestroy: function () {
    clearInterval(this.interval)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  body {
    background-color: #f6ec13;
  }

  .bodyimg {
    width:100%;
    height:auto;
  }

  .loadsection {
    display: block !important;
    background-color: #f6ec13;
  }

  .carousel {
    .item {
      -webkit-transition: opacity 3s;
      -moz-transition: opacity 3s;
      -ms-transition: opacity 3s;
      -o-transition: opacity 3s;
      transition: opacity 3s;
      display: none;
      opacity: 0;

      &.active {
        display:block;
        opacity: 1;
      }
    }

    @media only screen
    and (min-device-width : 768px)
    and (max-device-width : 1024px)
    and (orientation : portrait)
    and (-webkit-min-device-pixel-ratio: 1)  {
      .bodyimg{
        width:auto;
        height:100%;
      }
    }
  }
</style>
