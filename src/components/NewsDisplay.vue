<template>
    <div class="topMost">
        <div class="allHead">
        <div class="dashHead">
            <h1>Crypto News</h1>
            <p>We have a real time monitoring over 40+ exchanges, so all you need is to enter your mail and ready to enjoy the profit you are about to gain!</p>
        </div>
        
        </div>
        <div class="news">
            <!-- <div class="d-flex justify-content-around">
            <div class="card">
                <div class="d-flex">
                    <div>
                        <h3>Satoshi Nakamoto’s Bitcoin white paper is now a 13-year-old teenager</h3>
                        <div class="d-flex justify-content-between">
                            <h5>Cointelegraph By Arijit Sarkar</h5>
                            <h5>2021-10-31</h5>
                        </div>
                        
                    </div>
                    <img style="width:250px" src="https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMTAvY2E4ODlkMTktYjM0NC00MmM2LWI4OWYtNzQ1ZjUyNThjYTNhLmpwZw==.jpg" alt="">
                </div>
                <div>
                    <h4 style="text-align:center;padding:1rem 0">Description</h4>
                    <p>Today, Bitcoin maintains a stable trading value well above $60k after experiencing a gradual appreciation of 7,749,999,900% ever since its launch.</p>
                </div>
                <button class="buttonStyle">View More</button>
            </div>
            <div class="card">
                <h3>Satoshi Nakamoto’s Bitcoin white paper is now a 13-year-old teenager</h3>
            </div>
            </div> -->
            <div class="newsChild">
                <div class="firstNews d-flex">
                    <div style="">
                        <img style="width:90%; margin:auto" src="https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMTAvY2E4ODlkMTktYjM0NC00MmM2LWI4OWYtNzQ1ZjUyNThjYTNhLmpwZw==.jpg" alt="">
                    </div>
                    <div class="firstNewsContent">
                        <p>{{array[0].publishedAt}}</p>
                        <h1>
                            {{array[0].title}}
                        </h1>
                        <h6>
                            {{array[0].description}}
                        </h6>
                        <p>{{array[0].author}}</p>
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
            array:[
{
"source": {
"id": null,
"name": "Cointelegraph"
},
"author": "Cointelegraph By Arijit Sarkar",
"title": "Satoshi Nakamoto’s Bitcoin white paper is now a 13-year-old teenager",
"description": "Today, Bitcoin maintains a stable trading value well above $60k after experiencing a gradual appreciation of 7,749,999,900% ever since its launch.",
"url": "https://cointelegraph.com/news/satoshi-nakamoto-s-bitcoin-white-paper-is-now-a-13-year-old-teenager",
"urlToImage": "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMTAvY2E4ODlkMTktYjM0NC00MmM2LWI4OWYtNzQ1ZjUyNThjYTNhLmpwZw==.jpg",
"publishedAt": "2021-10-31T08:20:00Z",
"content": "The iconic Bitcoin (BTC) white paper celebrates thirteen years of financial disruption after being first published on Oct. 31, 2008, by an anonymous person or entity named Satoshi Nakamoto.\r\nThe whit… [+3339 chars]"
},
{
"source": {
"id": null,
"name": "Cointelegraph"
},
"author": "Cointelegraph By Rodrigo Bezanilla",
"title": "Latinx communities continue to rise above Bitcoin adoption obstacles",
"description": "Latinx communities are driving forward adoption, as crypto is proven to meet their diverse needs in a way that traditional finance cannot.",
"url": "https://cointelegraph.com/news/latinx-communities-continue-to-rise-above-bitcoin-adoption-obstacles",
"urlToImage": "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMTAvNTY3OTg1Y2EtNmViYi00OGVhLWE5OTYtOTIwODFkOWY2MDg4LmpwZw==.jpg",
"publishedAt": "2021-10-31T07:11:00Z",
"content": "Digital assets have recently become more and more prevalent in our daily lives in the news, popular culture and our personal interactions. In the first quarter of 2021, the number of global daily Bit… [+6852 chars]"
},
{
"source": {
"id": null,
"name": "Visual.ly"
},
"author": "edwardwikland",
"title": "Online Trading Coin Crypto Wallet | Coinsshield.com",
"description": "Searching for a digital currency trading platform online? Coinsshield.com is the best online crypto coin trading platform and online bitcoin trading p",
"url": "https://visual.ly/community/Infographics/business/online-trading-coin-crypto-wallet-coinsshieldcom-0",
"urlToImage": "http://thumbnails-visually.netdna-ssl.com/online-trading-coin-crypto-wallet--coinsshieldcom_617e3b27a0495_w250_h250.gif",
"publishedAt": "2021-10-31T06:43:51Z",
"content": "= Crypto OE BTC/USDT O x = Chart BTC/USDT Time - 15m O X O BTC/USDT Time - 15m 1 month Symbol BTC/USDT B: 0 D: 18.09.2019 T: 13:00:00 O: 10 174,35 H: 10 195,86 L: 10 173,36 C: 10 191. AUTO Account 10… [+550 chars]"
},
{
"source": {
"id": null,
"name": "News18"
},
"author": "Afp",
"title": "There's a Squid Game Cryptocurrency, but It Could Prove to Be a Risky Investment",
"description": "The warning from CoinMarketCap comes amid a recent spate of \"Squid Game\"-related scams and malware, with cybercriminals looking to lure fans.",
"url": "https://www.news18.com/news/tech/theres-a-squid-game-cryptocurrency-but-it-could-prove-to-be-a-risky-investment-4385888.html",
"urlToImage": "https://images.news18.com/ibnlive/uploads/2021/10/squid-games-2-163549090316x9.jpg",
"publishedAt": "2021-10-31T05:42:45Z",
"content": "A mysterious Squid Game token recently appeared on the PancakeSwap marketplace. While it may get attention through its name, it could well turn out to be a scam attempt to lure fans of the series and… [+2260 chars]"
},
{
"source": {
"id": "the-times-of-india",
"name": "The Times of India"
},
"author": "Sachin Dave",
"title": "Meme crypto coin that's turning many Indians into crorepatis overnight",
"description": "Many Indians may have become crorepatis at least on paper due to Shiba Inu, say industry trackers",
"url": "https://economictimes.indiatimes.com/markets/cryptocurrency/meme-crypto-coin-thats-turning-many-indians-into-crorepatis-overnight/articleshow/87417201.cms",
"urlToImage": "https://img.etimg.com/thumb/msid-87417815,width-1070,height-580,imgsize-30102,overlay-etmarkets/photo.jpg",
"publishedAt": "2021-10-31T03:57:56Z",
"content": "Mumbai: Vinod Kumar, 36, a Bengaluru-based investment banker at a private equity firm, has seen his \"risk portfolio\" investment in Shiba Inu coin jump four times in the past two days.\r\nKumar had inve… [+2806 chars]"
},
{
"source": {
"id": null,
"name": "Howardlindzon.com"
},
"author": "Howard Lindzon",
"title": "Sunday Reads and Listens… Listen To This Podcast With Chris Dixon and Naval on Crypto and Web 3.0",
"description": "Before I get started…\nI pushed it hard for two weeks in New York and I am exhausted.\nI will be back in New York the week of the 15th and Toronto for my mom’s 80th so I need some rest. \nMy diet was awful and I feel awful. New York food is my curse. \nOnwards…\nI…",
"url": "https://howardlindzon.com/sunday-reads-and-listens-listen-to-this-podcast-with-chris-dixon-and-naval-on-crypto-and-web-3-0/",
"urlToImage": "https://howardlindzon.com/wp-content/uploads/2016/06/hl-popcorn-siteicon.png",
"publishedAt": "2021-10-31T03:00:35Z",
"content": "Before I get started…\r\nI pushed it hard for two weeks in New York and I am exhausted.\r\nI will be back in New York the week of the 15th and Toronto for my mom’s 80th so I need some rest. \r\nMy diet was… [+865 chars]"
},

],
finalArray:[]
        }
    },
    created(){
        const finalArray = [...this.array];
        finalArray.splice(0,1);
        this.finalArray = finalArray;
    }
    
}
</script>
<style scoped>
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
        font-size: 1.2rem;
    }
    .news p{
        font-family: 'Lato', sans-serif;
        margin: 0;
        font-size: .8rem;
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