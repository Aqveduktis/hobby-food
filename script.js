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
            const smallList = filter
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
    const myBtn = document.getElementById('button')
    const myThing = document.getElementById('container')
    const myBody = document.getElementById('myBody')
    if (myBtn.innerHTML === 'Light Mode'){
        myBtn.innerHTML = 'Dark Mode'
        myBody.style.backgroundColor = 'Aliceblue'
    }
    else {
        myBtn.innerHTML = 'Light Mode'
        myBody.style.backgroundColor = '#333'
    }

    myThing.classList.toggle('light')
    myBtn.classList.toggle('btnLight')

}



document.getElementById('button').onclick = modeFunc

document.getElementById('buttonCheap').addEventListener("click", () => {
    
    
});


