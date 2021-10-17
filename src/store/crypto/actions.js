export default{
    loadCoins(context,payload){
        console.log(context);
        console.log(payload);
        const cryptoList = [];
        for (const crypto of payload){
            const coin = {
                name : crypto.name,
                image : crypto.image
            }
        cryptoList.push(coin);

        }
        context.commit('saveCoins',cryptoList);
        
        
    }
}