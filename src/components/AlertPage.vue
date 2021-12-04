<template>
    <div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="my-2 px-3">
                    <div class="d-flex align-items-center" v-for="alert in unsubcribingArray" :key="alert._id">
                        <input class="mx-2" style="width:unset; font-size:48px" type="checkbox" id="alert" name="alert" @change="inputChanged(alert._id)" :value="alert._id">
                        <div v-if="alert.price!=''">
                            <h6 class="my-2 mx-3">Alert for {{alert.cryptoCoin.toUpperCase()}} if price goes {{alert.price.toUpperCase()}} {{alert.criticalValuePrice}}.</h6>
                        </div>
                        <div v-else>
                            <h6 class="my-2 mx-3">Alert for {{alert.cryptoCoin.toUpperCase()}} if percentage goes {{alert.percentage.toUpperCase()}} {{alert.criticalValuePercent}}%.</h6>
                        </div>
                    </div>
                    <div>
                        <button data-bs-dismiss="modal" data-bs-target="#exampleModal" @click="deleteList()" class="deleteButton">Delete</button>
                    </div>
                </div>    
            </div>
        </div>
        </div>
        <div class="topMost">
            <div class="left">
                <h1>Price Alert</h1>
                <div>
                    <h6>Get a profit alert every time and trace your crypto currency just right! Fill the given form to get email notifications from us.</h6>
                    <img style="width:99.9%" src="../assets/alertside6.webp" alt="">
                </div>
            </div>
            <div class="right">
                <div class="formRight">
                    <h2>{{pageHead}}</h2>
                    <div class="d-flex justify-content-around forms">
                        <h6 @click="priceClicked()" :class="{'bgBlue':radioValue==0}">By Price</h6>
                        <h6 @click="percentClicked()" :class="{'bgBlue':radioValue==1}">By Percentage</h6>
                        <h6 @click="unsubscribeClicked()" :class="{'bgBlue':radioValue==2}">Unsubscribe</h6>
                    </div>
                    
                    <form v-if="!unsublcribe" @submit.prevent="submitForm()">
                        <div class="d-flex justify-content-between" style="">
                            <div style="width:40%">
                                <label for="firstName"> First Name</label>
                                <input type="text" id="firstName" class="text-line" v-model="firstName">
                            </div>
                            <div style="width:40%" >
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
                        <div v-if="radioValue===0">
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

                        <div v-if="radioValue===0">
                            <label for="price">Critical Value</label>
                            <input type="text" id="price" placeholder="0.00 in INR" class="text-line" style="width:100%" v-model="criticalValuePrice">
                        </div>
                        <div v-else>
                            <label for="percent">Critical Value</label>
                            <input type="text" id="percent" placeholder="Integer value 1 to 100" class="text-line" style="width:100%" v-model="criticalValuePercent">
                        </div>
                        <p style="font-size:1rem; color:red;font-family: 'Lato', sans-serif" class="m-0 py-1" v-if="!formValidate">{{errorString}}</p>
                        <p style="font-size:1rem; color:lime;font-family: 'Lato', sans-serif" class="m-0 py-1" v-if="submitted">Submitted Successfully</p>
                        <button type="submit" class="submitButton">Submit</button>
                        <!-- <button class="submitButton unsub">Unsubscribe</button> -->
                    </form>
                    <form @submit.prevent="unsubscribe()" v-else class="my-5 mx-4">
                        <div>
                            <label for="email">Your Email</label>
                            <input type="email" name="email" id="email" class="text-line" style="width:100%" v-model="emailunsubscribe">
                        </div>
                        <button type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal" class="submitButton">Submit</button>
                    </form>
                </div>
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
                emailunsubscribe:'',
                pageHead:"Create Alert",
                unsublcribe:false,
                radioValue:0,
                firstName:'',
                lastName:'',
                email:'',
                cryptoCoin:'',
                price:'',
                criticalValuePrice:'',
                percentage:'',
                criticalValuePercent:'',
                formValidate:true,
                errorString : 'Something went wrong! Check the input fields you have filled.',
                unsubcribingArray:[],
                returningArray:[],
                submitted:false

        }
    },
    methods:{
        deleteList(){
            axios.post('https://crypto-depoly.herokuapp.com/users/unsubscribe',{choices:this.returningArray}).then((reponse)=>console.log(reponse.data)).catch((error)=>console.log(error));
            this.emailunsubscribe = '';
        },
        inputChanged(id){
            if(this.returningArray.findIndex(ids=>ids===id)!=-1){
                this.returningArray.splice(this.returningArray.findIndex(ids=>ids===id),1);
            }
            else
            this.returningArray.push(id);
            console.log(this.returningArray);
            for (let index = 0; index < this.returningArray.length; index++) {
                const element = this.returningArray[index];
                console.log(element);
                
                
            }
        },
        unsubscribe(){
            axios.get(`https://crypto-depoly.herokuapp.com/users/${this.emailunsubscribe}`).then((reponse)=>{
                console.log(reponse.data);
                this.unsubcribingArray = reponse.data;
            }).catch((error)=>console.log(error));
            
        },
        formReset(){
            this.firstName='';
            this.lastName='';
            this.email='';
            this.cryptoCoin='';
            this.price='';
            this.criticalValuePrice='';
            this.percentage='';
            this.criticalValuePercent=''
        },
        formValidation(){
            let temp1=true,temp2=true;
            if(this.firstName !== '' && this.lastName !== '' && this.email !== '' &&this.cryptoCoin!==''){
                temp1 = true;
            }
            else{
                temp1 = false;
            }
            if((this.price!==''&&this.criticalValuePrice!=='')||(this.percentage!==''&&this.criticalValuePercent!=='')){
                temp2 = true;
            }
            else{
                temp2 = false;
            }
            if(temp1&&temp2){
                this.formValidate = true;
            }
            else{
                this.formValidate = false;
            }
        },
        priceClicked(){
            this.submitted=false;
            this.formReset();
            this.pageHead = "Create Alert"
            this.unsublcribe=false;
            this.radioValue = 0;
            console.log('price');
            
        },
        percentClicked(){
            this.submitted=false;
            this.formReset();
            this.pageHead = "Create Alert";
            this.unsublcribe=false;
            this.radioValue = 1;
            console.log('percent');
            
        },
        unsubscribeClicked(){
            this.submitted = false;
            this.formReset();
            this.pageHead = "Unsubscribe Alert";
            this.unsublcribe=true;
            this.radioValue=2;
        },
        submitForm(){
            this.formValidation();
            if(this.formValidate){
                console.log(this.formValidate);
                
            }
            else{
                console.log(this.formValidate);
                return;
                
            }
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
            
            axios.post('https://crypto-depoly.herokuapp.com/users',formData).then((reponse)=>{console.log(reponse.data);}).catch((error)=>console.log(error));
            this.formReset();
            this.submitted = true;

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
        this.submitted = false;
        
    },

}
</script>

<style scoped>
    .modal-dialog{
        max-width: unset;
        width: 40%;
        margin: auto auto;
        display: flex;
        /* height: 100vh; */
        align-items: space-around;
    }
    .modal-content{
        margin: 2rem 0;
        /* background-color: #111; */
        color: #000;
        border: 0;
    }
    input:-webkit-autofill,
    textarea:-webkit-autofill,
    select:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px #171717 inset !important;
        -webkit-text-fill-color: white !important;
    }
    .topMost{
        /* padding:2rem 2rem; */
        display: flex;
    }
    .left{
        flex: 3;
        background: rgb(255, 255, 255);
        padding: 2rem;
        height: 100vh;
        color: black;
    }
    .left h1{
        font-weight: bold;
    }
    .left h5{
        width: 80%;
        margin: 2rem 0 2rem;
    }
    .right{
        flex: 7;
        /* background: #5c38ee; */
        height: 100vh;
    }
    .alertHead{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex: 1;
        /* text-align: center; */
    }
    .alertHead h3{
        width: 70%;
        /* margin: auto; */
        line-height: 35px;
        text-align: center;
    }

    form{
        padding: 0rem 5rem 0rem;
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
        /* flex: 1.7; */
        /* background-color: #fff; */
        /* color: black; */
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
        color: rgb(199, 199, 199);
        font-size: 0.8rem;
        margin: 1rem 0rem;
        display: block;
    }
    input{
        padding: 0.5rem;
        color: white;
        width: 100%;
    }
    select{
        padding: 0.5rem;
        color: white;
        background: #000;
    }
    option{
        background-color: black;
    }
    option::-webkit-scrollbar{
        width: 5px;
    }
    option::-webkit-scrollbar-thumb{
        background: grey;
    }
    .bgBlue{
        background-color: #5c38ee;
        border: 0;
        border-radius: 12px;
        color: white;
    }
    .text-line{
        background-color: transparent;
    /* color: black; */
    outline: none;
    outline-style: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: solid white 1px;
    }
    .submitButton{
        background-color: #5c38ee;
        padding: 0.5rem 1.5rem;
        color: white;
        font-weight: bold;
        border: 0px;
        border-radius: 12px;
        margin: 1rem 0;
    }
    .unsub{
        margin: 0 2rem;
        background-color: transparent;
        border: 2px solid #5c38ee;
    }
    .submitButton :hover{
        transform: scale(2.1);
    }
    .forms h6{
        border: 1px solid #5c38ee;
        padding: .5rem 1rem;
        border-radius: 12px;
    }
    .deleteButton{
        padding: .2rem 1rem;
        border: 3px solid #5c38ee;
        border-radius: 12px;
        background-color: #5c38ee;
        color: white;
        margin: 1rem 0;

    }

</style>