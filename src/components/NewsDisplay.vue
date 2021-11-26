<template>
    <div v-if="loaderactive!=0" class="d-flex justify-content-center">
        <vue-loaders name="ball-clip-rotate-multiple" color="lightgray" scale="2"></vue-loaders>
      </div>
    <div v-else class="topMost">
        <div class="allHead">
        <div class="dashHead">
            <h1>Crypto News</h1>
            <p>We have a real time monitoring over 40+ exchanges, so all you need is to enter your mail and ready to enjoy the profit you are about to gain!</p>
        </div>
        
        </div>
        <div class="news">
            <div class="newsChild">
                <div class="firstNews d-flex">
                    <div style="flex:1">
                        <img style=" margin:auto; object-fit:contain; height:100%; width:100%" :src="array.media" alt="">
                    </div>
                    <div class="firstNewsContent mx-3" style="flex:2">
                        <p>{{array.published_date}}</p>
                        <a :href="array.link"><h1 class="mx-0">{{array.title}}</h1></a>
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
        async loadnews(){
            const response = await fetch("https://free-news.p.rapidapi.com/v1/search?q=crypto&lang=en", {
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
            
            
            
            
        }
    },
    created(){
        this.loadnews();
    }
    
}
</script>
<style scoped>
a{
        text-decoration: none;
        color: white;
    }
    .news{
        width:80%;
        margin: 0 auto;
    }
    .dashHead p {
        width: 70%;
    }
    .allHead {
        align-items: center;
    }
    /* .card{
        box-shadow: rgba(255, 255, 255, 0.24) 0px 3px 8px;
        width: 40%;
        color: black;
    }
    .card h3{
        color: black;
        font-weight: 500;
        font-size: 1.5rem;
        padding: 1rem .5rem 0;
    }
    .card h5{
        color:black;
        font-size: .8rem;
        padding:.5rem .5rem 0;
    }
    
    .card img{
        border: 0px;
    }
    .buttonStyle{
        border: 0px;
        border-radius: 12px;
        color: black;
        background-color: lightgray;
    } */
    h6 {
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
</style>