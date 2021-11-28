<template>
<div v-if="loaderactive!=0" style="height:100vh" class="d-flex justify-content-center align-items-center">
        <vue-loaders name="ball-clip-rotate-multiple" color="lightgray" scale="2"></vue-loaders>
      </div>
<div v-else>
    <!-- Button trigger modal -->

<!-- Modal -->
    <coin-detail :selected="selectedCoin"></coin-detail>
    <div class="topMost">
        <div class="allHead align-items-center">
        <div class="dashHead">
            <h1 class="m-0">Current Price</h1>
        </div>
        <div class="searchHead">
            <div class="search"> <i class="fa fa-search"></i><input v-model="searchingString" style="color:white" type="text" class="form-control" placeholder="Search for Crypto ">  </div>
        </div>
        </div>
                <div class="info">
            <p>
                This page holds the display of the current price. On click-over, the cards include the performance graph and respective percentage values.
            </p>
        </div>
        <!-- <h1 style="display:none">{{loadedCoins2}}</h1> -->
        <div>
            <div class="grid-container">         
                <div class="grid-item  is-justify-content-space-between " data-bs-toggle="modal" data-bs-target="#exampleModal"  v-for="coin in loadedCoins" :key="coin.name" @click="openModal(coin)">
                    <price-grid :coin='coin'></price-grid>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import PriceGrid from './PriceGrid.vue';
import CoinDetail from './CoinDetail.vue';
export default {
    components:{
        PriceGrid,
        CoinDetail
    },
    data(){
        return{
            loaderactive:0,
            loadedCoins:[],
            mainCoins:[],
            searchingString:'',
            selectedCoin:{}
        }
    },
    computed:{
    },
    created(){
        this.loadcoin();
    },
    methods:{
        async loadcoin(){
            try{
                    this.loaderactive++;
                    const response = await fetch ('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false');
                    console.log(response);
                    const responseData = await response.json(); 
                    console.log(responseData);
                    
                    for (const crypto of responseData){
                        const coin = {
                            name : crypto.name,
                            image : crypto.image,
                            price : crypto.current_price,
                            rank:crypto.market_cap_rank,
                            percent : crypto.price_change_percentage_24h>0?"+"+crypto.price_change_percentage_24h.toFixed(2):crypto.price_change_percentage_24h.toFixed(2),
                            market_cap : crypto.market_cap,
                            volume : crypto.total_volume,
                            symbol: crypto.symbol.toUpperCase(),
                            circulating: crypto.circulating_supply,
                            max_supply : crypto.max_supply,
                            id:crypto.id
                        }
                        this.mainCoins.push(coin);
                        
                        // console.log(this.loadedCoins);
                        

                    }
                    this.loadedCoins = [...this.mainCoins];
                    
                }
                catch(error){
                    console.log(error);
                }
                this.loaderactive--;
        },
        searched(event){
            console.log(event.target.value);
            
        },
        openModal(selectedCoin){
            this.selectedCoin = selectedCoin;
            console.log(selectedCoin);
            
        }
    },
    watch:{
        searchingString(value){
            console.log(value);
                this.loadedCoins = [...this.mainCoins.filter(coin=>coin.name.toLowerCase().includes(value.toLowerCase()))];
        }
    },
    
    
}
</script>

<style scoped>
    .allHead{
        margin: 1rem 0;
    }
    .table{
        background-color: #000;
        color: white;
        width: 90%;
        margin: auto;
        box-shadow: rgba(255, 255, 255, 0.24) 0px 3px 8px;
    }
    th{
        padding: 1rem .5rem;
    }
    td{
        padding: 1rem 0;
    }
    .red{
        color: red;
    }
    .lightgreen{
        color: rgb(80, 245, 80);
    }
    .grid-container {
       justify-items: center;
        display: inline-grid;
        grid-template-columns: repeat(auto-fit, minmax(350px,1fr));
        grid-gap: 2rem;
        overflow-y: auto;
        overflow-x:hidden;
        width: 100%;
        margin: 3rem 0;
   }
   .grid-container::-webkit-scrollbar{
   width: 5px;
}
    .grid-item{
        width: 80%;
        margin: 0 auto;
    }
    .searchHead{
        flex: unset;
        width: 350px;
    }
    .info{
        /* width: 90%; */
        text-align: center;
        padding:1rem 2rem;
        margin: 1rem auto;
        font-family: 'Lato', sans-serif;
        color: lightgrey;
        font-size: 1.2rem;
        border-bottom: 1px solid grey;
        border-top: 1px solid grey;
    }
</style>