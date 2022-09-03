<template>
    <div>
        <div class="saimo-layout-container">
            <div>
                <HeadBarPage />
            </div>

            <v-row>
                <v-col 

                >
                    222
                </v-col>
                <v-col 

                >
                    1111
                </v-col>

            </v-row>
        </div>


        <!-- <MenuPage /> -->
        <!-- <router-view/> -->
    </div>
  </template>
  
<script>

    import MenuPage from '@/components/Menu.vue'
    import HeadBarPage from '@/components/HeadBar.vue'

    export default {
        components: {
            MenuPage,
            HeadBarPage
        }
    }
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.saimo-layout-container{
    // padding-top: 15px;
    // padding-left: 14px;
    // padding-right: 14px;

}
</style>
  