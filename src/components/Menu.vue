<template>
    <div class="saimo-layout-menu-container">

      <v-list
        nav
        dense
        elevation="0"
      >

        <v-list-item 
          v-for="(o,i) in menuList"
          :key="i"
          link
          @click="menuItemClick(o)"
        >
          <v-list-item-icon>
            <v-icon color="primary">{{o.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{o.label}}</v-list-item-title>
        </v-list-item>
      </v-list>

    </div>
  </template>
  
<script>
  export default {
    data: () => ({
      menuList:[
        {
          icon:"mdi-barcode-scan",
          path:"/code/card",
          label:"片标打码"
        },
        {
          icon:"mdi-alpha-s-circle",
          path:"/code/sn",
          label:"SN扫码"
        },
        {
          icon:"mdi-plus",
          path:"/code/add",
          label:"新增SN码"
        }

        
      ]
    }),
    methods:{
      /**
       * 菜单点击
      */
      menuItemClick:function(option){
        this.$router.push({path: option.path});
      }
    }
  }
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.saimo-layout-menu-container{
  padding-top: 66px;
}
</style>
  