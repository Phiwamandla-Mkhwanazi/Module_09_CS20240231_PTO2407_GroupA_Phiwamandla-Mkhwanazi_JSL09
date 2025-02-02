/*-----------------------Start Time---------------------------------------------*/
function getCurrentTime() {
    const date = new Date();
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"});
}

setInterval(getCurrentTime, 1000);

/*-----------------------End Time---------------------------------------------*/    


/*-----------------------Start Unsplash Image API--------------------------------------------*/
try{
    const pImage = await fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature");
    const pImageData = await pImage.json();
    document.body.style.backgroundImage = `url(${pImageData.urls.regular})`;
    document.getElementById("author").textContent = `By: ${pImageData.user.name}`;
}
catch(error){
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080)`;
    document.getElementById("author").textContent = `By: Dodi Achmad`;   
}


/*-----------------------End Unsplash Image API---------------------------------------------*/    


/*----------------------Start CoinGekco Cryptocurrency API----------------------------------------*/
try{
    const pCrypto = await fetch("https://api.coingecko.com/api/v3/coins/dogecoin");
    const pCryptoData = await pCrypto.json();
    document.getElementById("crypto-top").innerHTML = `
        <img src=${pCryptoData.image.small} />
        <span>${pCryptoData.name}</span>`;
    
    document.getElementById("crypto").innerHTML += `
        <p>🎯: $${pCryptoData.market_data.current_price.usd}</p>
        <p>👆: $${pCryptoData.market_data.high_24h.usd}</p>
        <p>👇: $${pCryptoData.market_data.low_24h.usd}</p>`;
}
catch(error){
    console.log(error);
}


/*-----------------------End CoinGecko Crytocurrency API---------------------------------------------*/    


/*----------------------- Start Open Weather API-----------------------------------------*/    
try {
    navigator.geolocation.getCurrentPosition(async position => {
        const pWeather = await fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
        const pWeatherData = await pWeather.json();    
        const iconUrl = `http://openweathermap.org/img/wn/${pWeatherData.weather[0].icon}@2x.png`;
        
        document.getElementById("weather").innerHTML = 
        `<img src=${iconUrl} />
        <p class="weather-temp" >${Math.round(pWeatherData.main.temp)}º</p>
        <p class="weather-city">${pWeatherData.name}</p>`;
    });
} 
catch (error) {
    console.log(error);
}



/*-----------------------End Open Weather API---------------------------------------------*/    
