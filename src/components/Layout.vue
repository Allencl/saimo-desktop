<template>
    <div class="saimo-layout-container">

        <v-navigation-drawer
            permanent
            expand-on-hover
            absolute
            style="z-index: 2;"
        >
            <MenuPage />
        </v-navigation-drawer>   

        <v-app-bar 
            app
            color="#FFF"
        >
            <HeadBarPage />
        </v-app-bar>


        <v-main>
            <div class="saimo-layout-body">
                <router-view />
            </div>
        </v-main>
    </div>
</template>
  
<script>

    import MenuPage from '@/components/Menu.vue'
    import HeadBarPage from '@/components/HeadBar.vue'

    export default {
        components: {
            MenuPage,
            HeadBarPage
        },
        data: () => ({
           
        }),
    }
</script>
  

<style scoped lang="scss">
.saimo-layout-container{

    .saimo-layout-body{
        height: calc(100vh - 10vh);
        overflow-y: auto;
        padding-left: 62px;
        padding-right: 8px;
        padding-top: 20px;
        padding-bottom: 16px;
        overflow-x: hidden;
    }

}

</style>
  