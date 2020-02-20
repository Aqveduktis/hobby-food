// funtion reacts to button


//const cityApi = document.getElementById('europe').value
const today = document.getElementById('currentWeather')
const CityId = 280;
const CousineId = 162;
const apiKey = "c3c54d8037eb79d54e15629d7d4d607e";

const url = `https://developers.zomato.com/api/v2.1/search?entity_id=${CityId}&entity_type=city&cuisines=${CousineId}`

const fetchRestaurants = () => {

    fetch(url, { headers: { "user-Key": apiKey } })
        .then(res => res.json())
        .then(json => {
            restaurants = json.restaurants
            //renderRestaurants("all")
            console.log(json)
            console.log(restaurants)
            showing(restaurants)
        })
}

fetchRestaurants()

const showing = (inputT) => {
    inputT.forEach((item, index, arr) =>{
        const picture = ``
        
        today.innerHTML += `<article><h1>${item.restaurant.name}</h1>
        <img alt ="food" class = "food" src = "${item.restaurant.photos[0].photo.url}">
        <p>cuisine: ${item.restaurant.cuisines} || establishment: ${item.restaurant.establishment[0]}</p></article>`
        
    })
    
}
const modeFunc = () => {
    const myThing = document.getElementById('container')
    myThing.classList.toggle('light')
}




document.getElementById('button').onclick = modeFunc




