<template>
    <div class="topMost">
        <div class="allHead align-items-center">
        <div class="dashHead">
            <h2 class="m-0">Current Price</h2>
        </div>
        <div class="searchHead">
            <div class="search"> <i class="fa fa-search"></i><input v-model="searchingString" type="text" class="form-control" placeholder="Search for Crypto ">  </div>
        </div>
        </div>
        <!-- <h1 style="display:none">{{loadedCoins2}}</h1> -->
        <div>
            <!-- <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">24h%</th>
                    <th scope="col">Market Cap</th>
                    <th scope="col">Volume(24h)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="coins in loadedCoins" :key="coins.name">
                    <th scope="row">{{coins.rank}}</th>
                    <td><img style="width:22px; margin: 0 5px; background-color:white" :src="coins.image" alt="">{{coins.name}} <p style="color:#aaa; display:inline; margin:0 5px">{{coins.symbol}}</p></td>
                    <td>₹{{coins.price}}</td>
                    <td :class="{'red':coins.percent<0,'lightgreen': coins.percent>=0}">{{coins.percent}}</td>
                    <td>₹{{coins.market_cap}}</td>
                    <td>₹{{coins.volume}} <p style=" display:inline; margin:0 5px">{{coins.symbol}}</p></td>
                    </tr>
                </tbody>
            </table> -->
            <div class="grid-container">         
                <div class="grid-item  is-justify-content-space-between" v-for="coin in loadedCoins" :key="coin.name">
                    <price-grid :coin='coin'></price-grid>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import PriceGrid from './PriceGrid.vue';
export default {
    components:{
        PriceGrid
    },
    data(){
        return{
            loadedCoins:[],
            mainCoins:[],
            searchingString:''
        }
    },
    computed:{
        // loadedCoins(){
        //     return this.$store.getters['crypto/getCoins'];
        // }
    },
    created(){
        // if(localStorage.getItem('coins')){
        //     console.log(JSON.parse(localStorage.getItem('coins')));
            
        //     this.loadedCoins = JSON.parse(localStorage.getItem('coins'));
        // }
        // else
            // this.loadedCoins = this.$store.getters['crypto/getCoins'];
        this.loadcoin();
       



    },
    methods:{
        async loadcoin(){
            try{
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
                            symbol: crypto.symbol.toUpperCase()
                        }
                        this.mainCoins.push(coin);
                        
                        // console.log(this.loadedCoins);
                        

                    }
                    this.loadedCoins = [...this.mainCoins];
                    
                }
                catch(error){
                    console.log(error);
                }
        },
        searched(event){
            console.log(event.target.value);
            
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
    .topMost{
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
</style>