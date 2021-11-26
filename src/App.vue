<template>

<!-- <the-header :class="{'lessMargin':!sidebarOpen,'moreMargin':sidebarOpen}" class="top-header"></the-header> -->
<div  class="main-container">
<Nav class="nav-bar" @mini="mini"></Nav>
<router-view :class="{'lessMargin':!active,'moreMargin':active}" class="main-content"></router-view>

</div>

</template>

<script>
    
    // import TheHeader from './components/TheHeader.vue';
    import Nav from './components/Navbar.vue';
    // import CoinDetail from './components/CoinDetail.vue';
    export default{
        data(){
            return{
                active:false
            }
        },
        computed:{
            coins(){
            return this.$store.getters['crypto/getCoins'];

            }
        },
        components:{
            Nav,
            // CoinDetail
            // TheHeader
        },
        created(){
            this.loadCoins();
            console.log(this.active);
            
        },
        methods:{
            async loadCoins(){
                console.log('appvue');
                
                try{
                    const response = await fetch ('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false');
                    const responseData = await response.json();
                    this.$store.dispatch('crypto/loadCoins',responseData);
                }
                catch(error){
                    console.log(error);
                    
                }
            },
            mini(){
                this.active=!this.active;
            }
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
        /* position: fixed; */
    }
    .main-content{
        flex: 70%;
        color: white;
        margin-left: 85px;
        background-color: #171717;
        transition: .5s;
    }
    .lessMargin{
        margin-left: 85px;
    }
    .moreMargin{
        margin-left: 250px;
    }
</style>
