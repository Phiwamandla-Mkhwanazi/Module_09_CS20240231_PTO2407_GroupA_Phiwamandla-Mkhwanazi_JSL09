/*-----------------------Start Time---------------------------------------------*/
function getCurrentTime() {
    // Create a new Date object to get the current date and time
    const date = new Date();

    // Update the text content of the element with ID "time" to display the current time in short format (HH:mm)
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"});
}

// Set an interval to update the time every second (1000 milliseconds)
setInterval(getCurrentTime, 1000);
/*-----------------------End Time---------------------------------------------*/    

/*-----------------------Start Unsplash Image API--------------------------------------------*/
try{
    // Fetch a random landscape image related to nature from Unsplash API
    const pImage = await fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature");
    
    // Convert the response into JSON format
    const pImageData = await pImage.json();
    
    // Set the background image of the body to the URL of the random image
    document.body.style.backgroundImage = `url(${pImageData.urls.regular})`;
    
    // Display the name of the image author in the element with ID "author"
    document.getElementById("author").textContent = `By: ${pImageData.user.name}`;
}
catch(error){
    // In case of error (e.g., network failure), use a default image
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080)`;
    
    // Display the default author's name
    document.getElementById("author").textContent = `By: Dodi Achmad`;   
}
/*-----------------------End Unsplash Image API---------------------------------------------*/    

/*----------------------Start CoinGecko Cryptocurrency API----------------------------------------*/
try{
    // Fetch data about Dogecoin from the CoinGecko API
    const pCrypto = await fetch("https://api.coingecko.com/api/v3/coins/dogecoin");

    // Convert the response into JSON format
    const pCryptoData = await pCrypto.json();
    
    // Display the cryptocurrency name and its logo in the element with ID "crypto-top"
    document.getElementById("crypto-top").innerHTML = `
        <img src=${pCryptoData.image.small} />
        <span>${pCryptoData.name}</span>`;
    
    // Display the current, high, and low prices for Dogecoin in the element with ID "crypto"
    document.getElementById("crypto").innerHTML += `
        <p>🎯: $${pCryptoData.market_data.current_price.usd}</p>
        <p>👆: $${pCryptoData.market_data.high_24h.usd}</p>
        <p>👇: $${pCryptoData.market_data.low_24h.usd}</p>`;
}
catch(error){
    // Log any error that occurs (e.g., if the API request fails)
    console.log(error);
}
/*-----------------------End CoinGecko Cryptocurrency API---------------------------------------------*/    

/*----------------------- Start Open Weather API-----------------------------------------*/    
try {
    // Get the user's current geographic position using the Geolocation API
    navigator.geolocation.getCurrentPosition(async position => {
        
        // Fetch weather data for the user's location from the OpenWeather API
        const pWeather = await fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
        
        // Convert the response into JSON format
        const pWeatherData = await pWeather.json();    

        // Construct the icon URL for the weather condition
        const iconUrl = `http://openweathermap.org/img/wn/${pWeatherData.weather[0].icon}@2x.png`;
        
        // Display the weather data, including the weather icon, temperature, and city name
        document.getElementById("weather").innerHTML = 
        `<img src=${iconUrl} />
        <p class="weather-temp" >${Math.round(pWeatherData.main.temp)}º</p>
        <p class="weather-city">${pWeatherData.name}</p>`;
    });
} 
catch (error) {
    // Log any error that occurs (e.g., if geolocation or the weather API fails)
    console.log(error);
}
/*-----------------------End Open Weather API---------------------------------------------*/    
