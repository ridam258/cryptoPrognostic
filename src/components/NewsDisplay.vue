<template>
    
    <div class="topMost">
        <div class="allHead">
        <div class="dashHead">
            <h1>Crypto News</h1>
            <!-- <p>We have a real time monitoring over 40+ exchanges, so all you need is to enter your mail and ready to enjoy the profit you are about to gain!</p> -->
        </div>
        <div style="flex:3">
            <div class="d-flex filter">
                <h6 @click="loadnews('bitcoin')">
                    Bitcoin
                </h6>
                <h6 @click="loadnews('ethereum')">
                    Ethereum
                </h6>
                <h6 @click="loadnews('crypto headlines')">
                    Headlines
                </h6>
                <h6 @click="loadnews('crypto india')">
                    India Crypto
                </h6>
                <h6 @click="loadnews('dogecoin')">
                    Dogecoin
                </h6>
                <h6 @click="loadnews('binance')">
                    Binance
                </h6>
                <h6 @click="loadnews('crypto market')">
                    Market
                </h6>
                <h6 style="border-right:0" @click="loadnews('blockchain')">
                    Blockchain
                </h6>
            </div>
        </div>
        </div>
        <div class="info">
            <p>
                To catch up with the daily trend, match yourself with the crypto world, and grab all the latest news regarding cryptocurrencies, We have an up-to-date news section. This page will include all the heads you need to know today!
            </p>
        </div>
        <div v-if="loaderactive!=0" style="height:65vh" class="d-flex justify-content-center align-items-center">
        <vue-loaders name="ball-clip-rotate-multiple" color="lightgray" scale="2"></vue-loaders>
      </div>
        <div v-else class="news">
            <div class="newsChild">
                <div class="firstNews d-flex">
                    <div style="flex:1">
                        <img style=" margin:auto; object-fit:contain; height:100%; width:100%" :src="array.media" alt="">
                    </div>
                    <div class="firstNewsContent mx-3" style="flex:2">
                        <p>{{array.published_date}}</p>
                        <a :href="array.link"><h2 class="mx-0" >{{array.title}}</h2></a>
                        <h6 style="height:13vh;display: -webkit-box;-webkit-line-clamp: 4;-webkit-box-orient: vertical;overflow: hidden;">
                            {{array.summary}}
                        </h6>
                        <p>{{array.rights}}</p>
                    </div>
                </div>
                <div class="grid-container">         
                    <div class="grid-item  is-justify-content-space-between" v-for="element in finalArray" :key="element.author">
                    <grid-view :trend='element'></grid-view>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import GridView from './GridView.vue';
// import axios from 'axios';
export default {
    components:{
        GridView
    },
    data(){
        return{
            loaderactive:0,
            array:{},
            finalArray:[]
        }
    },
    methods:{
        async loadnews(query){
            this.loaderactive++;
            const response = await fetch(`https://free-news.p.rapidapi.com/v1/search?q=${query}&lang=en`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "free-news.p.rapidapi.com",
                    "x-rapidapi-key": "4dc18bf43dmsh45053a7a226c5e8p13b081jsnfe85eacf3860"
                }
            });
            const responseData = await response.json();
            console.log(responseData.articles);
            this.array = responseData.articles[0];
            let temp = responseData.articles;
            temp.splice(0,1);
            this.finalArray = [...temp];
            console.log(this.finalArray);
            
            this.loaderactive--;
            
            
        }
    },
    created(){
        this.loadnews('crypto');
    }
    
}
</script>
<style scoped>
    a{
        text-decoration: none;
        color: white;
    }
    .news{
        width:90%;
        margin: 0 auto;
    }
    .dashHead p {
        width: 70%;
    }
    .allHead {
        align-items: center;
        margin: 1rem 0;
        justify-content: space-between;
    }
    .dashHead{
        flex: 1;
    }
    .news h6 {
        font-family: 'Lato', sans-serif;
        color: rgb(177, 177, 177);
        font-size: 1.2rem;
    }
    .news p{
        font-family: 'Lato', sans-serif;
        margin: 0;
        font-size: .8rem;
        color: rgb(177, 177, 177);
    }
    h2{
        font-weight: 600;
        padding: 1rem 0;
    }
    .firstNewsContent{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .grid-container {
       justify-items: center;
        display: inline-grid;
        grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
        grid-gap: 3rem;
        overflow-y: auto;
        overflow-x:hidden;
        width: 100%;
        margin: 3rem 0;
    }
    .grid-container::-webkit-scrollbar{
        width: 5px;
    }
    .filter h6{
        /* border-right: 1px solid grey; */
        color: white;
        margin: 0;
        padding: 0.5rem 1.5rem;
        /* margin: 0 1rem; */
        text-align: center;
        border-right: 1px solid grey;
        cursor: pointer;
        /* color: #8a6ff7; */
        /* border-radius: 25px; */

    }
    .filter h6:hover{

        color: lightgrey;
        /* border-bottom: 1px solid grey; */
        /* border-radius: 20px; */
        transform: scale(1.1);
        /* transition: .5s; */
        transition: ease-in 0.3s;
        color: #5c38ee;
    }
    .filter{
        /* width: 90%; */
        /* flex: 3; */
        /* border: 1px solid grey;
        border-top: 1px solid grey; */
        /* justify-content: space-between; */
        /* margin:0rem auto 3rem; */
        /* padding: 2rem 0; */

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