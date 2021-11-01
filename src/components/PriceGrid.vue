<template>
    <div class="priceCard">
        <div class="d-flex justify-content-between mb-3">
            <img style="width:48px" :src="coin.image" alt="">
            <h4 :class="{'red':coin.percent<0,'lightgreen': coin.percent>=0}" style="font-weight:bold">{{coin.percent}}%</h4>
        </div>
        <h5 style="font-weight:bold">{{coin.name}}</h5>
        <div class="d-flex align-items-center justify-content-between">
            <h4 style="font-weight:bold">₹ {{ coin.price}}</h4>
            <h5 style="font-weight:bold">{{coin.symbol}}</h5>
        </div>
        <div class="d-flex align-items-center justify-content-between">
            <h6>Market Cap</h6>
            <h5>{{coin.market_cap}}</h5>
        </div>
        <div class="d-flex align-items-center justify-content-between">
            <h6>Volume (24h)</h6>
            <h5>{{coin.volume}}</h5>
        </div>
        <div class="first"></div>
        <div class="second"></div>
        <div class="third"></div>
    </div>
</template>
<script>
export default {
    props:['coin'],
}
</script>
<style scoped>
    .priceCard{
        /* width: 100%; */
        background-color: #5C38EE;
        box-shadow: rgba(255, 255, 255, 0.1) 0px 4px 12px;
        border: 0px;
        border-radius: 15px;
        padding: 1rem;
        position:relative;
    }
    .priceCard img{
        background-color: #fff;
    }
    h6{
        margin: 0;
    }
    h4,h5,p,h6{
        font-family: 'lato';
        margin: 3px 0;
    }
    .first{
        width: 40%;
        height: 30%;
        position: absolute;
        top: 0;
        right: 0;
        background-color: rgba(255, 255, 255, 0.1);
    }
    .second{
        width: 20%;
        height: 30%;
        position: absolute;
        top: 15%;
        right: 0;
        background-color: rgba(255, 255, 255, 0.1);
    }
    .third{
        width: 8%;
        height: 10%;
        position: absolute;
        top: 35%;
        right: 30%;
        background-color: rgba(255, 255, 255, 0.1);
    }
</style>