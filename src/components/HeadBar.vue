<template>
  <div class="layout-head-box">

    <v-row no-gutters>
      <v-col
        cols="6"
        style="padding-top:12px"
      >
        <span 
          style="display:inline-block;cursor:pointer;"
          @click="toHome"
        >
          <v-img
            class="logo-image"
            max-height="27"
            max-width="32"
            :src="logoImage"
          />
          <v-toolbar-title class="logo-title">赛摩</v-toolbar-title>
        </span>
      </v-col>

      <v-col
        class="layout-head-box-right"
        cols="6"
      >
        <!-- <span>李敏哲</span> -->
        <v-avatar 
          size="36"
          color="primary"
        >
          <v-icon dark>
            mdi-account-circle
          </v-icon>
        </v-avatar>

        <v-menu
          left
          bottom
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              style="text-align:left"
              @click="logOutHandle"
            >
              <v-list-item-title>
                <v-icon color="darken-2">mdi-login-variant</v-icon>
                设置
              </v-list-item-title>
            </v-list-item>
            <v-list-item
              style="text-align:left"
              @click="logOutHandle"
            >
              <v-list-item-title>
                <v-icon color="darken-2">mdi-login-variant</v-icon>
                退出登录
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>


      </v-col>
    </v-row>





  </div>
</template>
  
<script>
  export default {
    data: () => ({  
      logoImage: require("@/assets/logo.svg")
    }),
    methods:{
      /**
       * to home
       */
      toHome:function(){
        this.$router.push({path:"/"});
      },
      /**
       * 退出登录
       */
       logOutHandle:function(){
        console.log("111")
       }

    }
  }
</script>
  

<style scoped lang="scss">
.layout-head-box{
  width:100%;
  text-align: left;

  .logo-image{
    display: inline-block;
  }

  .logo-title{
    display: inline-block;
    margin-left: 12px;
    font-size: 16px;
    font-family: emoji;
  }

  .layout-head-box-right{
    text-align:right;
  }

}
</style>
  