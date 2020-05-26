<template>
  <v-app>
    <NavBar></NavBar>
    <v-content>
      <router-view v-if="isRouterAlive"></router-view>
    </v-content>
  </v-app>
</template>

<script>

import NavBar from "@/components/NavBar";
export default {
  name: 'App',

  components: {
    NavBar: NavBar
  },

  data() {
    return {
      isRouterAlive: true
    }
  },

  method:{
    reload(){
      this.isRouterAlive = false;
      this.$nextTick(function () {
          this.isRouterAlive = true
      })
    }
  }
}
</script>
