<template>
    <div>
      <the-header></the-header>
      <div class="d-flex justify-content-around">
        <div>
          <div class="d-flex align-items-center">
            <img style="width:48px" class="mx-2" src="../assets/btcLogo.png" alt="">
            <h5>Bitcoin BTC</h5>
          </div>
          <base-card>
            <line-chart :data="chartData" height="100px" width="200px"></line-chart>
          </base-card>
        </div>
        <div>
          <div class="d-flex align-items-center">
            <img style="width:48px" class="mx-2" src="../assets/btcLogo.png" alt="">
            <h5>Bitcoin BTC</h5>
          </div>
          <base-card>

          </base-card>
        </div>
        <div>
          <div class="d-flex align-items-center">
            <img style="width:48px" class="mx-2" src="../assets/btcLogo.png" alt="">
            <h5>Bitcoin BTC</h5>
          </div>
          <base-card>

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
          chartData:{
            '2017-05-13':2,
            '2017-05-14':8,
            '2017-05-15':5
          }
        }
      },  
      components: { TheHeader },
      methods:{
        async callData(){

        }
      }
    }
</script>