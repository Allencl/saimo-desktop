<template>
    <div>
        <MenuPage />
        <router-view/>
    </div>
  </template>
  
<script>
    import MenuPage from '@/components/Menu.vue'


    export default {
        components: {
            MenuPage
        }
    }
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
  