<template>
    <div class="topMost">
        <div class="d-flex align-items-center justify-content-around">
            <div class="alertHead">
                <h1>Price Alert</h1>
                <h5>We, at CryptoPrognostic, will give you a mail alert every time when your investments goes on a high benefit  so that you can grab the best opportunity and will lie on the profit court!</h5>
            </div>
            <div class="cryptoPhoto">
                <img src="../assets/crypto2.jpg" alt="">
            </div>
        </div>
        <div class="d-flex formParent">
            <div class="formLeft">
                <h3>Get a profit alert every time and trace your crypto currency just right!</h3>
                <img style="width:90%" src="../assets/crypto4.jpg" alt="">
            </div>
            <div class="formRight">
                <h2>Create Alert</h2>
                <div class="d-flex justify-content-around">
                    <h6 @click="priceClicked()" :class="{'bgBlue':radioValue}">By Price</h6>
                    <h6 @click="percentClicked()" :class="{'bgBlue':!radioValue}">By Percentage</h6>
                </div>
                
                <form @submit.prevent="submitForm()">
                    <div class="d-flex justify-content-between" style="">
                        <div style="display:inline">
                            <label for="firstName"> First Name</label>
                            <input type="text" id="firstName" class="text-line" v-model="firstName">
                        </div>
                        <div>
                            <label for="lastName"> Last Name</label>
                            <input type="text" id="lastName" class="text-line" v-model="lastName">
                        </div>
                    </div>
                    <div>
                        <label for="email">Your Email</label>
                        <input type="email" name="email" id="email" class="text-line" style="width:100%" v-model="email">
                    </div>
                    <div>
                        <label for="coin">Your Crypto Currency</label>
                        <select name="coin" id="coin" class="text-line" style="width:100% " v-model="cryptoCoin">
                            <option v-for="coins in loadedCoins" :key="coins.name" :value="coins.id">{{coins.name}}</option>
                        </select>
                    </div>
                    <div v-if="radioValue">
                        <label for="variationPrice">Price goes:</label>
                        <select name="variation" id="variationPrice" class="text-line" style="width:100%" v-model="price">
                            <option value="above"> Above</option>
                            <option value="below">Below</option>
                        </select>
                    </div>
                    <div v-else>
                        <label for="variationPercent">Percentage goes:</label>
                        <select name="variation" id="variationPercent" class="text-line" style="width:100%" v-model="percentage">
                            <option value="above"> Above</option>
                            <option value="below">Below</option>
                        </select>
                    </div>

                    <div v-if="radioValue">
                        <label for="price">Critical Value</label>
                        <input type="text" id="price" placeholder="0.00 in INR" class="text-line" style="width:100%" v-model="criticalValuePrice">
                    </div>
                    <div v-else>
                        <label for="percent">Critical Value</label>
                        <input type="text" id="percent" placeholder="Integer value 1 to 100" class="text-line" style="width:100%" v-model="criticalValuePercent">
                    </div>
                    <button type="submit" class="submitButton">Submit</button>
                </form>
            </div>
        </div>
    </div>
    
</template>


<script>
    import axios from 'axios';
    // import APIURl from '../variable.js'
export default {
    data(){
        return{
            formData:{
                title:'',
                body:'',
                userId:'',

            },
                radioValue:true,
                firstName:'',
                lastName:'',
                email:'',
                cryptoCoin:'',
                price:'',
                criticalValuePrice:'',
                percentage:'',
                criticalValuePercent:''

        }
    },
    methods:{

        priceClicked(){
            this.radioValue = true;
            console.log('price');
            
        },
        percentClicked(){
            this.radioValue = false;
            console.log('percent');
            
        },
        submitForm(){
            const formData = {
                firstName : this.firstName ,
                lastName : this.lastName,
                email:this.email,
                cryptoCoin:this.cryptoCoin,
                price:this.price,
                criticalValuePrice : this.criticalValuePrice,
                percentage:this.percentage,
                criticalValuePercent:this.criticalValuePercent
            }
            console.log(formData);
            
            axios.post('https://crypto-depoly.herokuapp.com/users',formData).then((reponse)=>console.log(reponse.data)).catch((error)=>console.log(error));
        }

        

    },
        computed:{
        loadedCoins(){
            console.log(this.$store.getters['crypto/getCoins']);
            
            return this.$store.getters['crypto/getCoins'];
        }
    },
    created(){
        console.log(this.loadedCoins);
        
    },

}
</script>

<style scoped>
    .topMost{
        padding:2rem 2rem;
    }
    .alertHead{
        flex: 1;
        text-align: center;
    }
    .alertHead h5{
        width: 70%;
        margin: auto;
        line-height: 35px;
    }
    .cryptoPhoto img{
        flex:1;
        width: 70%;
        border: 0px;
        border-radius: 50px;
    }
    .formHead{
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        background-color: #fff;
        padding: 2rem;
        margin: 2rem auto;
        width: 80%;
        color: white;
        background-image: url(../assets/crypto3.jpg);
        background-size: cover;

    }
    .formHead h3{
        text-align: center;
    }
    .formParent{
        border: 0px solid white;
        border-radius: 25px;
        margin: 2rem auto 0;
    }
    form{
        padding: 0rem 5rem 2rem;
    }
    .formLeft{
        background-color: #000;
        text-align: center;
        padding: 5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1.3;
        align-items: center;
    }
    .formLeft img{
        margin: 2rem 0;
    }
    .formRight{
        flex: 1.7;
        background-color: #fff;
        color: black;
    }
    .formRight h2{
        font-weight: 600;
        text-align: center;
        margin: 2rem 0;
    }
    .formRight h6{
        padding:0.5rem 1rem;
        font-size: 1rem;
        cursor: pointer;
    }
    .coinsDropDown{
        display: inline;
        font-size: 1.2rem;
        margin: 0 2rem;
    }

    label{
        color: rgb(100, 100, 100);
        font-size: 0.8rem;
        margin: 1rem 0rem;
        display: block;
    }
    input{
        padding: 0.5rem;
    }
    select{
        padding: 0.5rem;
    }
    .bgBlue{
        background-color: blue;
        color: white;
    }
    .text-line{
        background-color: transparent;
    color: black;
    outline: none;
    outline-style: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: solid black 1px;
    }
    .submitButton{
        background-color: blue;
        padding: 0.5rem 1.5rem;
        color: white;
        font-weight: bold;
        border: 0px;
        border-radius: 12px;
        margin: 1.5rem 0;
    }
</style>