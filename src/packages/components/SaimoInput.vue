<template>
    <span>
        <v-text-field
            v-model="currentValue"
            :label="label"
            :clearable="clearable"
            clear-icon="mdi-close-circle"
            :rules="[v => !!v || `${label}必填`]"
            :required="required"

            :type="( typePassword && !showPassword)?'password':'text'"
            :append-icon="typePassword?((showPassword)?'mdi-eye':'mdi-eye-off'):undefined"

            @blur="()=> clearable=false "
            @focus="()=> clearable=true "
            @change="changeHandle"

            @click:append="appendHandle"
          />
    </span>
</template>
    
<script>


    export default {
        model:{
            prop:"value",
            event:"input"
        },
        props: {            
            value:{                
                type: String,                
                default: ""            
            },
            label: {                
                type: String,                
                default: ""            
            },
            typePassword:{
                type: Boolean,                
                default: false    
            },
            required: {                
                type: Boolean,                
                default: false          
            },
                    
        },
        data: () => ({  
            currentValue:"",

            clearable:false,
            showPassword:false,   // 密码

        }),
        watch:{
            value(val){
                this.currentValue=val;
            }
        },
        created(){
            this.currentValue=this.value;
        },
        methods:{
            /**
             * 值改变
            */
            changeHandle(){
                this.$emit("input",this.currentValue)
            },
            /**
             * icon 点击
             */
            appendHandle(){
                if(this.typePassword) this.showPassword=!this.showPassword;
            }

        }
    }
</script>
    
  
<style scoped lang="scss">

</style>
    