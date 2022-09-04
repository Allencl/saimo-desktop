<template>
  <div id="app">
    <v-app style="background: inherit;">
      <LayoutPage v-if="isLogin" />
      <LoginPage v-if="!isLogin" />
    </v-app>
  </div>
</template>


<script>
  // @ is an alias to /src
  import LayoutPage from '@/components/Layout.vue'
  import LoginPage from '@/components/Login.vue'

	import {GlobalBus} from '@/plugins/GlobalBus.js';


  export default {
    components: {
      LayoutPage,
      LoginPage
    },
    data: () => ({  
      isLogin:false,


    }),
    created(){
      const that=this;

      // 路由
			GlobalBus.$off("router-toggle");
			GlobalBus.$on("router-toggle", function(active){
				that.isLogin=active;
			});
    }
  }
  </script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
