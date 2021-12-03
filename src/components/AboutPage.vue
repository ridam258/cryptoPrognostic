<template>
    <div>
        <div class="firstSection">
            <div class="firstinner">
                <h1>Crypto Prognostic</h1>
                <h5>Your Profit Alert is here!</h5>
            </div>
            <div class="secondinner" @click="scrollDown()">
                <h5>
                    What We Are
                </h5>
                <span><i class="material-icons">expand_circle_down</i></span>
            </div>
        </div>
        <div class="secondSection">
            <div>
                <h1>In A Nutshell</h1>
                <h2>All about our features and what we do.</h2>
            </div>
            <div class="d-flex justify-content-around">
                <div class="priceCard">
                    <div class="d-flex flex-column align-items-center">
                        <span><i class="material-icons">attach_money</i></span>
                        <h5>Price Display</h5>
                        <p>Here we have your QuickGoThrough sections, named - "Prices", where you will not only get the current price of 100+ cryptocurrencies but also, you can keep a keen eye over the percentage change, volume range, market cap, and other relevant information!</p>
                    </div>
                    <div class="first"></div>
                    <div class="second"></div>
                    <div class="third"></div>
                    <div class="d-flex justify-content-center">
                        <router-link to="/prices"><img style="width:48px" src="../assets/right-arrow.svg" alt=""></router-link>
                    </div>
                </div>
                <div class="priceCard">
                    <div class="d-flex flex-column align-items-center">
                        <span><i class="material-icons">add_alert</i></span>
                        <h5>Alerting System</h5>
                        <p>Here goes the highlight of our website - The Price Alert section, which has a form to grab your email and other details that will include when you wish to get an alert. We will send you an email, without a second delay so that your profit measures won't get a bit late!</p>
                    </div>
                    <div class="first"></div>
                    <div class="second"></div>
                    <div class="third"></div>
                    <div class="d-flex justify-content-center">
                        <router-link to="/setAlert"><img style="width:48px" src="../assets/right-arrow.svg" alt=""></router-link>
                    </div>
                </div>
                <div class="priceCard">
                    <div class="d-flex flex-column align-items-center">
                        <span><i class="material-icons">feed</i></span>
                        <h5>Latest News</h5>
                        <p>To ensure you never miss the catch of the newest headlines regarding your cryptos, We have provided a NewsForYou Section, named - ''Crypto News" where you will get the latest news right in your hand so that you can stay up to date!</p>
                    </div>
                    <div class="first"></div>
                    <div class="second"></div>
                    <div class="third"></div>
                    <div class="d-flex justify-content-center">
                        <router-link to="/news"><img style="width:48px" src="../assets/right-arrow.svg" alt=""></router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="thirdSection">
            <!-- <h1></h1> -->
            <h3>We at CryptoPrognostic ensures that you never miss a profit bell by giving a wide awake at the correct time always!
                Here at CryptoPrognostic, we predict your investments to match the best profit you can make, and alert you the right time to gain as much as you can. <br><br>
                We keep a keen look over more than 100+ cryptocurrencies across the world and alert you to the right moment to invest and secure your gain in it.
                Along with this, we have provided News and Prices sections on our website, so that our website can be your one-stop destination to get every info regarding crypto currencies! <br><br>
                The news section have latest heads of what all is must to reaad in the crypto world. <br><br>
                The price section have cover of more than 100+ cryptocurrencies and their exchange along with the graphical analysis of each of them. <br><br>
                In the price alert section, all you need to do is to fill the given form, and you are done with it! You will now just have to relax and let us worry about your investments! <br><br>
                We, at CryptoPrognostic, will give you a mail alert whenever your investments go on a high benefit so that you can grab the best opportunity and will lie on the profit court! <br><br>
                We have real-time monitoring of different platforms, so all you need is to enter your mail and be ready to enjoy the profit you are about to gain!</h3>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        scrollDown(){
            let pageHeight = window.innerHeight;
            window.scroll(0,pageHeight);
        }
    }
}
</script>
<style scoped>
    .first{
        width: 40%;
        height: 20%;
        position: absolute;
        top: 0;
        right: 0;
        background-color: rgba(255, 255, 255, 0.1);
        border-top-right-radius: 15px;
    }
    .second{
        width: 20%;
        height: 15%;
        position: absolute;
        top: 15%;
        right: 0;
        background-color: rgba(255, 255, 255, 0.1);
    }
    .third{
        width: 8%;
        height: 10%;
        position: absolute;
        top: 23%;
        right: 30%;
        background-color: rgba(255, 255, 255, 0.1);
    }
    .priceCard{
        /* width: 33%; */
        /* cursor: pointer; */
        /* width: 100%; */
        background-color: #5C38EE;
        box-shadow: rgba(255, 255, 255, 0.1) 0px 4px 12px;
        border: 0px;
        border-radius: 15px;
        padding: 2rem;
        position:relative;
        margin:2rem;
    }
    .priceCard h5{
        font-size: 1.6rem;
        margin: 1rem 0;
    }
    .priceCard i{
        font-size: 36px;
    }
    .priceCard p{
        font-family: 'Lato', sans-serif;
        font-size: 1.1rem;
        text-align: center;
    }
    .firstSection{
        background-color: #5c38ee;
        height: 100vh;
        position: relative;
        display: flex;
        justify-content: center;
    }
    .firstinner{
        position: absolute;
        top: 30%;
    }
    .firstinner h1{
        font-size: 5rem;
        font-weight: 600;
    }
    .firstinner h5{
        text-align: center;
        font-size: 2rem;
        line-height: 4rem;
    }
    .secondinner{
        position: absolute;
        top: 85%;
        text-align: center;
        cursor: pointer;
    }
    .secondinner h5{
        font-size: 1.5rem;
    }
    .secondinner .material-icons{
        font-size: 36px;
    }
    .secondSection{
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .secondSection h1{
        text-align: center;
    }
    .secondSection h2{
        text-align: center;

    }
    .thirdSection{
        background-color: #5c38ee;
        /* font-size: 1rem; */
        height: 100vh;
        padding: 2rem 5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

    }
    .thirdSection h3{
        font-size: 1.5rem;
        line-height: 1.6rem;
        font-family: 'Lato', sans-serif;
        /* text-align: center; */
    }
    .thirdSection h1{
        text-align: center;
        /* margin: 2rem; */
    }
</style>