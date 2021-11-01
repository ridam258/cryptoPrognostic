<template>
    <div>
      <the-header></the-header>
      <div class="d-flex justify-content-around">
        <div>
          <div class="d-flex align-items-center mb-2">
            <img style="width:48px" class="mx-2" src="../assets/btcLogo.png" alt="">
            <h4>Bitcoin BTC</h4>
          </div>
          <base-card class="d-flex flex-row">
            <line-chart :data="chartsData['bitcoin']" :min="4000000" :max="5000000" :colors="['#b00', '#000']" height="120px" width="60%"></line-chart>
            <div style="align-self:center" class="cardContent">
              <h5>	₹4544962</h5>
              <div class="d-flex align-items-center">
                <h5 class="m-0" style="color:green">+{{price}}% </h5>
                <img v-if="price>0" src="../assets/up-arrow.png" alt=""> <img v-else src="../assets/down-arrow.png" alt="">
              </div>
               
            </div>
          </base-card>
        </div>
        <div>
          <div class="d-flex align-items-center mb-2">
            <img style="width:48px" class="mx-2" src="../assets/btcLogo.png" alt="">
            <h4>Bitcoin BTC</h4>
          </div>
          <base-card class="d-flex flex-row">
            <line-chart :data="chartData" height="120px" width="60%"></line-chart>
            <div style="align-self:center" class="cardContent">
              <h5>	₹4544962</h5>
              <div class="d-flex align-items-center">
                <h5 class="m-0" style="color:green">+{{price}}% </h5>
                <img v-if="price>0" src="../assets/up-arrow.png" alt=""> <img v-else src="../assets/down-arrow.png" alt="">
              </div>
               
            </div>
          </base-card>
        </div>
        <div>
          <div class="d-flex align-items-center mb-2">
            <img style="width:48px" class="mx-2" src="../assets/btcLogo.png" alt="">
            <h4>Bitcoin BTC</h4>
          </div>
          <base-card class="d-flex flex-row">
            <line-chart :data="chartData" height="120px" width="60%"></line-chart>
            <div style="align-self:center" class="cardContent">
              <h5>	₹4544962</h5>
              <div class="d-flex align-items-center">
                <h5 class="m-0" style="color:red">{{price2}}% </h5>
                <img v-if="price2>0" src="../assets/up-arrow.png" alt=""> <img v-else src="../assets/down-arrow.png" alt="">
              </div>
               
            </div>
          </base-card>
        </div>
        
      </div>
    </div>
    
    
</template>

<script>
import TheHeader from './TheHeader.vue'
    export default{
      data(){
        return{
          price:1.63,
          price2:-2.63,
          chartsData:{
            bitcoin:{},
            ethereum:{},
            dogecoin:{}
          },
          graphsData:{
            left:{},
            right:{}
          },
          chartData:{
            '2017-05-13':2,
            '2017-05-14':8,
            '2017-05-15':15,
            '2017-05-16':22,
            '2017-05-17':18,
            '2017-05-18':51,
            '2017-05-19':2,
            '2017-05-20':8,
            '2017-05-21':12,
          },
        }
      },  
      components: { TheHeader },
      methods:{
        async bitData(coin){
          var days= 10;
          var date = new Date();
          var last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
          const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart/range?vs_currency=inr&from=${last.getTime()/1000}&to=${new Date().getTime()/1000}`);
          const responseData = await response.json();
          console.log(responseData);
         var temp={};
          for (let index = 0; index < responseData.prices.length; index+=12) {
            temp[this.unixToDate(responseData.prices[index][0])]=responseData.prices[index][1];
            
          }
          this.chartsData[coin] = temp;
          console.log(this.chartsData[coin]);
        },
        async graphData(coin,side){
          var days= 20;
          var date = new Date();
          var last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
          const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart/range?vs_currency=inr&from=${last.getTime()/1000}&to=${new Date().getTime()/1000}`);
          const responseData = await response.json();
          console.log(responseData);
          const tempArray=[];
          for (let index = 0; index < responseData.prices.length; index+=12) {
              tempArray.push(responseData.prices[index]);
          }
          this.graphsData[side]=tempArray;
          console.log(this.graphsData);
          
        },
        unixToDate(p){
          return new Date(p*1000).toString().substr(4,6);
        }
      },
      created(){
        this.bitData('bitcoin');
        this.bitData('ethereum');
        this.bitData('dogecoin');
        this.graphData('cardano','left');
        this.graphData('cardano','right');
      }
    }
</script>

<style scoped>
  .cardContent{
    background-color: #171717;
    padding: 1rem;
    border: 0px;
    border-radius: 15px;
    margin: 0 .5rem
  }
</style>