/*-----------------------Start Time---------------------------------------------*/
function getCurrentTime() {
    const date = new Date()
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
}

setInterval(getCurrentTime, 1000);

/*-----------------------End Time---------------------------------------------*/    


/*-----------------------Start Unsplash Image API--------------------------------------------*/
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`;
        document.getElementById('author').textContent = `By: ${data.user.name}`;
    }) 
    .catch(err => {
        // Use a default background image/author
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080)`
		document.getElementById("author").textContent = `By: Dodi Achmad`
    })
/*-----------------------End Unsplash Image API---------------------------------------------*/    


/*----------------------Start CoinGekco Crytocurrency API----------------------------------------*/
fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        console.log(res.status)
        return res.json()
    })
    .then(data => {
        
        document.getElementById("crypto-top").innerHTML = 
        `<img src=${data.image.small} /> 
        <span>${data.name}</span>`;

        document.getElementById("crypto").innerHTML += 
        `
        <p>🎯: $${data.market_data.current_price.usd}</p>
        <p>👆: $${data.market_data.high_24h.usd}</p>
        <p>👇: $${data.market_data.low_24h.usd}</p>`;
    })
    .catch(err => console.error(err))
/*-----------------------End CoinGecko Crytocurrency API---------------------------------------------*/    


/*----------------------- Start Open Weather API-----------------------------------------*/    
navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
        })
        .catch(err => console.error(err))
});

/*-----------------------End Open Weather API---------------------------------------------*/    
