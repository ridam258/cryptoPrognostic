<template>

<!-- <the-header :class="{'lessMargin':!sidebarOpen,'moreMargin':sidebarOpen}" class="top-header"></the-header> -->
<div  class="main-container">
<Nav class="nav-bar"></Nav>
<router-view class="main-content"></router-view>
</div>

</template>

<script>
    
    // import TheHeader from './components/TheHeader.vue';
    import Nav from './components/Navbar.vue';
    export default{
        computed:{
            
        },
        components:{
            Nav,
            // TheHeader
        },
        created(){
            this.loadCoins();
        },
        methods:{
            async loadCoins(){
                try{
                    const response = await fetch ('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false');
                    const responseData = await response.json();
                    this.$store.dispatch('crypto/loadCoins',responseData);
                }
                catch(error){
                    console.log(error);
                    
                }
            },
        }
    }
</script>


<style scoped>
    
    .top-header{
        background-color: #111;
        color: white;
    }
    .main-container{
        display: flex;
    }
    .nav-bar{
        /* flex: 15%; */
        color: white;
        background-color: #111;
    }
    .main-content{
        flex: 70%;
        color: white;
        background-color: #171717;
    }
    .lessMargin{
        margin-left: 85px;
    }
    .moreMargin{
        margin-left: 250px;
    }
</style>
