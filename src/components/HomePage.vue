<template>

    <div style="overflow-x:hidden">
      <coin-detail :selected="selectedCoin"></coin-detail>
      <the-header></the-header>
      <div v-if="loaderactive!=0" class="d-flex justify-content-center">
        <vue-loaders name="ball-clip-rotate-multiple" color="lightgray" scale="2"></vue-loaders>
      </div>
      <div v-else class="d-flex justify-content-between topCards">
        <div  data-bs-toggle="modal" data-bs-target="#exampleModal" @click="openModal(chartspriceData['bitcoin'])">
          <div class="d-flex align-items-center mb-2">
            <img style="width:48px" class="mx-1" :src="chartspriceData['bitcoin'].image" alt="">
            <h4 class="m-0">{{chartspriceData['bitcoin'].name}} {{ chartspriceData['bitcoin'].symbol}}</h4>
          </div>
          <base-card class="d-flex flex-row">
            <line-chart :curve="true" :data="chartsData['bitcoin']" :min="minmaxData['bitcoin'].mini" :max="minmaxData['bitcoin'].maxi" :colors="['#F7931A','red']" height="120px" width="60%"></line-chart>
            <div style="align-self:center" class="cardContent">
              <h5>₹{{chartspriceData['bitcoin'].price}}</h5>
              <div class="d-flex align-items-center">
                <h5 class="m-0" :class="{'red':chartspriceData['bitcoin'].percent<0,'green':chartspriceData['bitcoin'].percent>=0}">{{chartspriceData['bitcoin'].percent}}% </h5>
                <img v-if="chartspriceData['bitcoin'].percent>0" src="../assets/up-arrow.png" alt=""> <img v-else src="../assets/down-arrow.png" alt="">
              </div>
               
            </div>
          </base-card>
        </div>
        <div data-bs-toggle="modal" data-bs-target="#exampleModal" @click="openModal(chartspriceData['ethereum'])">
          <div class="d-flex align-items-center mb-2">
            <img style="width:48px" class="mx-1" :src="chartspriceData['ethereum'].image" alt="">
            <h4 class="m-0">{{chartspriceData['ethereum'].name}} {{ chartspriceData['ethereum'].symbol}}</h4>
          </div>
          <base-card class="d-flex flex-row">
            <line-chart :data="chartsData['ethereum']" :min="minmaxData['ethereum'].mini" :max="minmaxData['ethereum'].maxi" :colors="['#6C7398']" height="120px" width="60%"></line-chart>
            <div style="align-self:center" class="cardContent">
              <h5>₹{{chartspriceData['ethereum'].price}}</h5>
              <div class="d-flex align-items-center">
                <h5 class="m-0" :class="{'red':chartspriceData['ethereum'].percent<0,'green':chartspriceData['ethereum'].percent>=0}">{{chartspriceData['ethereum'].percent}}% </h5>
                <img v-if="chartspriceData['ethereum'].percent>0" src="../assets/up-arrow.png" alt=""> <img v-else src="../assets/down-arrow.png" alt="">
              </div>
               
            </div>
          </base-card>
        </div>
        <div data-bs-toggle="modal" data-bs-target="#exampleModal" @click="openModal(chartspriceData['dogecoin'])">
          <div class="d-flex align-items-center mb-2">
            <img style="width:48px" class="mx-1" :src="chartspriceData['dogecoin'].image" alt="">
            <h4 class="m-0">{{chartspriceData['dogecoin'].name}} {{ chartspriceData['dogecoin'].symbol}}</h4>
          </div>
          <base-card class="d-flex flex-row">
            <line-chart :curve="true" :data="chartsData['dogecoin']" :min="minmaxData['dogecoin'].mini" :max="minmaxData['dogecoin'].maxi" :colors="['#F7931A']" height="120px" width="60%" class=""></line-chart>
            <div style="align-self:center" class="cardContent">
              <h5>₹{{chartspriceData['dogecoin'].price}}</h5>
              <div class="d-flex align-items-center">
                <h5 class="m-0" :class="{'red':chartspriceData['dogecoin'].percent<0,'green':chartspriceData['dogecoin'].percent>=0}">{{chartspriceData['dogecoin'].percent}}% </h5>
                <img v-if="chartspriceData['dogecoin'].percent>0" src="../assets/up-arrow.png" alt=""> <img v-else src="../assets/down-arrow.png" alt="">
              </div>
                
            </div>
          </base-card>
        </div>
        
      </div>
      <base-card class="comparisonGraph">
        <div class="d-flex justify-content-between align-items-center mx-3">
          <h2>Comparison Graph</h2>
          <div class="d-flex">
            <select name="coin" id="coin" class="text-line dd-1 mx-3" style="width:100% " v-model="cryptoCoin1" @change="graphData(cryptoCoin1,'left')">
              <option v-for="coins in loadedCoins" :key="coins.name" :value="coins.id">{{coins.symbol}}</option>
            </select>
            <img style="width:30px" src="../assets/versusIcon.png" alt="">
            <select name="coin" id="coin" class="text-line dd-2 mx-3" style="width:100% " v-model="cryptoCoin2" @change="graphData(cryptoCoin2,'right')">
              <option v-for="coins in loadedCoins" :key="coins.name" :value="coins.id">{{coins.symbol}}</option>
            </select>
          </div>
        </div>
        <line-chart width="99%" height = "400px" loading="Loading..." :colors="['#6B4BEF','#CE57EA']" v-if="graphsData[1].name!=''&&graphsData[0].name!=''" :data="graphsData" />
        <div v-else style="height:400px" class="d-flex justify-content-center align-items-center">
                <vue-loaders name="ball-clip-rotate-multiple" color="lightgray" scale="2"></vue-loaders>
            </div>
      </base-card>
      <div class="price">
        <div class="d-flex justify-content-between mx-3 align-items-center">
          <h2>Current Prices</h2>
          <router-link to="/prices"><button class="viewButton">View All <img src="../assets/viewButton.png" alt=""></button></router-link>
        </div>
        <div class="grid-container">         
                <div class="grid-item  is-justify-content-space-between"  data-bs-toggle="modal" data-bs-target="#exampleModal" v-for="coin in loadedCoins2" :key="coin.name" @click="openModal(coin)">
                    <price-grid :coin='coin'></price-grid>
                </div>
            </div>
        </div>
    </div>
    
    
</template>

<script>
import BaseCard from './BaseCard.vue';
import PriceGrid from './PriceGrid.vue';
import CoinDetail from './CoinDetail.vue';
import TheHeader from './TheHeader.vue'
    export default{
      data(){
        return{
          loaderactive:0,
          loadedCoins2:[],
            mainCoins:[],
          cryptoCoin1:"bitcoin",
          cryptoCoin2:"ethereum",
          price:1.63,
          price2:-2.63,
          chartsData:{
            bitcoin:{},
            ethereum:{},
            dogecoin:{}
          },
          minmaxData:{
            bitcoin:{},
            ethereum:{},
            dogecoin:{}
          },
          graphsData:[
            {name:'',data:{}},
            {name:'',data:{}}
          ],
          chartspriceData:{
            bitcoin:{},
            ethereum:{},
            dogecoin:{}
          },
            selectedCoin:{}
        }
      },  
      components: { TheHeader, BaseCard, PriceGrid, CoinDetail },
      methods:{
        async bitData(coin){
          this.loaderactive++;
          var days= 10;
          var date = new Date();
          var last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
          const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart/range?vs_currency=inr&from=${last.getTime()/1000}&to=${new Date().getTime()/1000}`);
          const responseData = await response.json();
          var temp={};
          let maxi = responseData.prices[0][1];
          let mini = responseData.prices[0][1];
          for (let index = 0; index < responseData.prices.length; index+=15) {
            temp[this.unixToDate(responseData.prices[index][0])]=responseData.prices[index][1];
            maxi =Math.floor( Math.max(maxi,responseData.prices[index][1]));
            mini = Math.floor(Math.min(mini,responseData.prices[index][1]));
          }
            maxi++;
            mini--;
            maxi=Math.floor(maxi*1.01);
            mini=Math.floor(mini*0.99);
            this.minmaxData[coin] = {
              mini:mini,
              maxi:maxi
            }
            this.chartsData[coin] = temp;
            this.loaderactive--;
        },
        async graphData(coin,side){
          this.graphsData[0].name='';
          var days= 20;
          var date = new Date();
          var last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
          const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart/range?vs_currency=inr&from=${last.getTime()/1000}&to=${new Date().getTime()/1000}`);
          const responseData = await response.json();
          var temp={};
          for (let index = 0; index < responseData.prices.length; index+=10) {
            temp[this.unixToDate(responseData.prices[index][0])]=responseData.prices[index][1];
          }
          // const tempobj = {
          //   name:coin,
          //   data:temp
          // }
          if(side=='left'){
            this.graphsData[0].name=coin;
            this.graphsData[0].data = temp;
          }
          if(side=='right'){
            this.graphsData[1].name=coin;
            this.graphsData[1].data = temp;
          }          
          console.log(this.graphsData);
          console.log(side);
          
        },
        async loadCoins(){
          console.log('appvue');
          try{
            const response = await fetch ('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false');
            const responseData = await response.json();
            console.log(responseData);
            for (let index = 0; index < responseData.length; index++) {
              const element = responseData[index];
              if(index<9){
              const coin = {
                            name : element.name,
                            image : element.image,
                            price : element.current_price,
                            rank:element.market_cap_rank,
                            percent : element.price_change_percentage_24h>0?"+"+element.price_change_percentage_24h.toFixed(2):element.price_change_percentage_24h.toFixed(2),
                            market_cap : element.market_cap,
                            volume : element.total_volume,
                            symbol: element.symbol.toUpperCase(),
                            circulating: element.circulating_supply,
                            id:element.id
                        }
                        this.mainCoins.push(coin);
                        console.log(coin);
              }
              // let coin;
              if(element.id==='bitcoin'){
              console.log(element);
                const coin = {
                            name : element.name,
                            image : element.image,
                            price : element.current_price,
                            rank:element.market_cap_rank,
                            percent : element.price_change_percentage_24h>0?"+"+element.price_change_percentage_24h.toFixed(2):element.price_change_percentage_24h.toFixed(2),
                            market_cap : element.market_cap,
                            volume : element.total_volume,
                            symbol: element.symbol.toUpperCase(),
                            circulating: element.circulating_supply,
                            id:element.id
                        }
                console.log(coin);
                  this.chartspriceData.bitcoin=coin;
              }
              if(element.id==='ethereum'){
                const coin = {
                            name : element.name,
                            image : element.image,
                            price : element.current_price,
                            rank:element.market_cap_rank,
                            percent : element.price_change_percentage_24h>0?"+"+element.price_change_percentage_24h.toFixed(2):element.price_change_percentage_24h.toFixed(2),
                            market_cap : element.market_cap,
                            volume : element.total_volume,
                            id:element.id,
                            circulating: element.circulating_supply,
                            symbol: element.symbol.toUpperCase(),
                        }
                this.chartspriceData.ethereum=coin;
              }
              if(element.id === 'dogecoin'){
                const coin = {
                            name : element.name,
                            image : element.image,
                            price : element.current_price,
                            rank:element.market_cap_rank,
                            percent : element.price_change_percentage_24h>0?"+"+element.price_change_percentage_24h.toFixed(2):element.price_change_percentage_24h.toFixed(2),
                            market_cap : element.market_cap,
                            volume : element.total_volume,
                            id:element.id,
                            circulating: element.circulating_supply,
                            symbol: element.symbol.toUpperCase()
                        }
                this.chartspriceData.dogecoin=coin;
              }
            }
                    this.loadedCoins2 = [...this.mainCoins];
            this.$store.dispatch('crypto/loadCoins',responseData);
          }
          catch(error){
            console.log(error);
                    
          }
          console.log(this.chartspriceData);
          
        },
        unixToDate(p){
          // return new Date(p);
          let s = new Date(p).toString().substr(4,11);
          return s.substr(7,4)+"-"+(new Date(p).getMonth()+1)+"-"+new Date (p).getDate();
        },
        openModal(selectedCoin){
            this.selectedCoin = selectedCoin;
            console.log(selectedCoin);
            
        }
      },
      watch:{
        cryptoCoin1(value){
          this.graphData(value,'left');
          this.graphData(this.cryptoCoin2,'right');
        },
        cryptoCoin2(value){
          this.graphData(this.cryptoCoin1,'left');
          this.graphData(value,'right');
        }
      },
      mounted(){
        this.bitData('bitcoin');
        this.bitData('ethereum');
        this.bitData('dogecoin');
        this.graphData('bitcoin','left');
        this.graphData('ethereum','right');
        this.loadCoins();
        console.log(this.loadedCoins2);
        
        
      },
      computed:{
        loadedCoins(){
          return this.$store.getters['crypto/getCoins'];
        }
      }
    }
</script>

<style scoped>
    body{
      overflow-x: hidden;
    }
  .cardContent{
    background-color: #171717;
    padding: 1rem;
    border: 0px;
    border-radius: 15px;
    margin: 0 .5rem
  }
  .red{
    color: red;
  }
  .green{
    color: #3ec73e;
  }
  .topCards{
    cursor: pointer;
    margin: 0 3rem;
  }
  .comparisonGraph{
    margin: 3rem;
  }
  .text-line{
    background-color: #111111;
    color: white;
  }
  .text-line{
    outline: none;
    outline-style: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border: 0px;
    border-radius: 2px;
    padding: 5px;
    /* border-bottom: solid white 1px; */
    }
    .dd-1{
      cursor: pointer;
      background-color: #6B4BEF;
    }
    .dd-2{
      cursor: pointer;
      background-color: #CE57EA;
    }
    .grid-container {
       justify-items: center;
        display: inline-grid;
        grid-template-columns: repeat(auto-fit, minmax(350px,1fr));
        grid-gap: 4rem;
        overflow-y: auto;
        overflow-x:hidden;
        width: 100%;
        margin: 3rem 0;
   }
   .grid-container::-webkit-scrollbar{
   width: 5px;
}
    .grid-item{
        width: 100%;
        margin: 0 auto;
    }
    .viewButton{
      background-color: #111111;
      border: 0;
      color: white;
      padding: 1rem 1.5rem;
      border: 0px;
      border-radius: 12px;
      box-shadow: rgba(255, 255, 255, 0.15) 1.95px 1.95px 2.6px;
      margin: 0;
    }
    .viewButton img{
      width: 20px;
      margin: 0 .5rem;
    }
    .price{
      margin: 3rem;

    }
  
</style>