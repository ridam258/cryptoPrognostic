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
                    <div style="">
                        <img style="width:90%; margin:auto;" src="https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMTAvY2E4ODlkMTktYjM0NC00MmM2LWI4OWYtNzQ1ZjUyNThjYTNhLmpwZw==.jpg" alt="">
                    </div>
                    <div class="firstNewsContent">
                        <p>{{array.publishedAt}}</p>
                        <a :href="array.url"><h1 >{{array.title}}</h1></a>
                        <h6>
                            {{array.description}}
                        </h6>
                        <p>{{array.author}}</p>
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
            this.loaderactive++;
            const res = await fetch('https://newsapi.org/v2/everything?q=crypto&sortBy=publishedAt&language=en&apiKey=6c3d5f8fac27421ea3c5222aff2c2c1a');
            const responseData =await res.json();
            console.log(responseData);
            
            this.array = responseData.articles[0];
            let temp = [...responseData.articles];
            temp.splice(0,1);
            this.finalArray = temp;
            this.loaderactive--;
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