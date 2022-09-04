<template>
    <div class="saimo-login">
     <img class="login-head-logo" src="./../assets/login-logo.png" alt="">

        <v-container class="login-form-container">
            
            <p class="login-form-title company">山西建设装备制造有限公司</p>
            <p class="login-form-title">工厂信息化系统</p>
            <p class="login-form-title login">欢迎登录</p>


            <v-form
    ref="form"

    lazy-validation
  >
    <v-text-field
      v-model="name"


      label="用户名"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      label="密码"
      required
    ></v-text-field>



    <v-checkbox
      v-model="checkbox"
      label="记住密码"
      required
    ></v-checkbox>



    <v-btn
        block
      color="primary"
      @click="loginHandle"
    >
      登 录
    </v-btn>


            </v-form>
        </v-container>


        <v-snackbar
      v-model="snackbar"
      timeout="2000"
      color="success"
    >
      登录成功
      <template v-slot:action="{ attrs }">
        <v-btn
         
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          关闭
        </v-btn>
      </template>
    </v-snackbar>


    </div>

  </template>
    
<script>
	import {GlobalBus} from '@/plugins/GlobalBus.js';

    export default {
        data: () => ({  
            snackbar:false,
            name: '',
            email: '',
            checkbox: false,

        }),
        methods:{

            /**
             * 登录
            */
            loginHandle:function(){
                this.snackbar=true;
                this.$router.push({path:"/"});

                GlobalBus.$emit("router-toggle",true);

            }
        }
    }
</script>
    
  
<style scoped lang="scss">
@font-face{
    font-family: logonFont;
    src: url('./../assets/font/ALIMAMA_SHUHEITI_BOLD.TTF') 
} 
.saimo-login{
    width: 100%;
    height: 100vh;
    background-size:100% 100%;
    background-image:url('./../assets/background.png');

    .v-text-field{
        padding-top: 0px;
    }


    .login-head-logo{
        position: fixed;
        top: 25px;
        left: 32px;
        width: calc(866px * 0.6);
        height: calc(82px * 0.6);
    }

    .login-form-container{
        position: fixed;
        top: 155px;
        right: 70px;
        // background: #fff;
        width: 400px;
        // height: 500px;
    }
    .login-form-title{
        font-size: 30px;
        font-family:logonFont;
        font-weight: bold;
        color: #000000;
        text-align: left;
        /* line-height: 36px; */
    }

    .login-form-title.company{
        font-size: 20px;
        margin-bottom: 2px;
    }

    .login-form-title.login{
        font-size: 20px;
        margin-top: 20px;
        margin-bottom: 18px;
        color: #999999;
        padding-bottom: 8px;
        border-bottom: 1px solid #999999;
    }

}
</style>
    