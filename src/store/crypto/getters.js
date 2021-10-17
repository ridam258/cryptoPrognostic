export default{
    getCoins(state){
        console.log("called");
        console.log(state);
        
        return state.coinList;
    }
}