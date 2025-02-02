/*-----------------------Start Time---------------------------------------------*/    
/*-----------------------End Time---------------------------------------------*/    


/*-----------------------Start Unsplash Image API--------------------------------------------*/
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`;
        document.getElementById('author').textContent = `By: ${data.user.name}`;
    })
/*-----------------------End Unsplash Image API---------------------------------------------*/    


/*----------------------Start CoinGekco Crytocurrency API----------------------------------------*/
fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
/*-----------------------End CoinGecko Crytocurrency API---------------------------------------------*/    


/*----------------------- Start Open Weather API-----------------------------------------*/    
/*-----------------------End Open Weather API---------------------------------------------*/    
