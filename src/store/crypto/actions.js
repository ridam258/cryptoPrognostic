export default{
    loadCoins(context,payload){
        console.log(context);
        console.log(payload);
        const cryptoList = [];
        for (const crypto of payload){
            const coin = {
                name : crypto.name,
                image : crypto.image,
                price : crypto.current_price,
                rank:crypto.market_cap_rank,
                percent:Math.round((crypto.price_change_percentage_24h*100)/100),
                market_cap : crypto.market_cap,
                volume : crypto.total_volume,
                symbol: crypto.symbol.toUpperCase()
            }
        cryptoList.push(coin);

        }
        context.commit('saveCoins',cryptoList);
        localStorage.setItem('coins',JSON.stringify(cryptoList));
        
        
    }
}