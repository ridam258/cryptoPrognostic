<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
            <div class="modalhead d-flex justify-content-between align-items-center">
                <div class="d-flex px-2 py-4 align-items-center">
                    <img style="width:50px" :src="clickedCoin.image" alt="">
                    <h2 class="mb-0 mx-2">{{clickedCoin.name}}</h2>
                    <h6 style="font-weight:200; color: lightgrey;" class="mb-0 ml-2 pt-2">({{clickedCoin.symbol}})</h6>
                </div>
                <div class="d-flex align-items-center px-2 modalheadRight">
                    <h1 class="me-4">{{clickedCoin.price}} <span style="color:lightgrey; font-size:1rem">(INR)</span></h1>
                    <h2 class="mx-2" :class="{'red':clickedCoin.percent<0,'lightgreen': clickedCoin.percent>=0}">{{clickedCoin.percent}}% <span style="color:lightgrey; font-size:1rem">(24h)</span></h2>
                </div>
            </div>  
            <div class="d-flex modal-con">
                <div class="division">
                    <h6>Market Cap Rank</h6>
                    <h4>*{{clickedCoin.rank}}</h4>    
                </div> 
                <div class="division">
                    <h6>Market Cap</h6>
                    <h4>₹{{clickedCoin.market_cap}}</h4>    
                </div>
                <div class="division">
                    <h6>Volume (24h)</h6>
                    <h4>₹{{clickedCoin.volume}}</h4>    
                </div>
                <div class="division" style="border:0px">
                    <h6>Circulating Supply</h6>
                    <h4>{{clickedCoin.circulating}} <span style="font-size:.8rem; color:lightgrey">{{clickedCoin.symbol}}</span></h4>    
                </div>
            </div> 
            <div v-if="loaderactive!=0" style="height:50vh;background-color:#111" class="d-flex justify-content-center align-items-center">
                <vue-loaders name="ball-clip-rotate-multiple" color="lightgray" scale="2"></vue-loaders>
            </div>
            <div v-else class="grapharea">
                <h5 class="mb-2">{{clickedCoin.name}} Charts (1 month)</h5>
                <area-chart :data="graphData" :colors="['#5C38EE']"></area-chart>
            </div>     
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            loaderactive:0,
            clickedCoin:{},
            graphData:{}
        }
    },
    props:['selected'],
    watch:{
        selected(value){
            this.clickedCoin = value;
            this.loadGraphData(value.id);
            console.log(value);
            
        }
    },
    methods:{
        async loadGraphData(coin){
            this.loaderactive++;
            var days= 30;
            var date = new Date();
            var last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart/range?vs_currency=inr&from=${last.getTime()/1000}&to=${new Date().getTime()/1000}`);
            const responseData = await response.json();
            console.log(responseData);
            let temp = {};
            for (let index = 0; index < responseData.prices.length; index+=10) {
              temp[this.unixToDate(responseData.prices[index][0])]=responseData.prices[index][1];  
            }
            this.graphData = temp;
            console.log(temp);
            this.loaderactive--;
            

        },
        unixToDate(p){
            return new Date(p);
        }
    },
    mounted(){
        // this.loadGraphData(this.selected.name);
    }
}
</script>
<style scoped>
.modal{
        color:white;
        /* font-family: 'Lato', sans-serif; */
    }
    .modal-header{
        background-color: #111;
        border: 0px;
    }
    .modal-content{
        border: 0px;
    }
    .modal-dialog{
        max-width: unset;
        width: 70%;
        margin: auto auto;
        display: flex;
        height: 100vh;
        align-items: center;
    }
    .modal-content{
        margin: auto 0;
    }
    .modalhead{
        background-color: #2B2F31;
        padding: 0 2rem;
    }
    .modalheadRight{
        font-family: 'Lato', sans-serif;

    }
    .btn-close{
        color:white;
    }
    .red{
        color: red;
    }
    .lightgreen{
        color: #3ec73e;
    }
    .modal-con{
        background-color: #111;
        justify-content: space-between;
        text-align: end;
        border-bottom: 1px solid rgba(211, 211, 211, 0.5);
    }
    .division{
        border-right: 1px solid rgba(211, 211, 211, 0.5);
        padding:3rem 1rem 3rem 2rem ;
        /* flex: 1; */
    }
    .division h6{
        color: lightgray;
        margin: 0rem 0 1rem;
    }
    .division h4{
        font-family: 'Lato', sans-serif;
    }
    .grapharea{
        background-color: #111;
        padding:2rem 2rem;
    }
</style>