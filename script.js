// funtion reacts to button

// curl -X GET --header "Accept: application/json" --header "user-key: "c3c54d8037eb79d54e15629d7d4d607e"" "https://developers.zomato.com/api/v2.1/reviews?res_id=17067963"

//const cityApi = document.getElementById('europe').value
const today = document.getElementById('currentWeather')
const CityId = 302;
const CousineId = "american";
const apiKey = "c3c54d8037eb79d54e15629d7d4d607e";
const number = Math.ceil((Math.random() * 80))

const url = `https://developers.zomato.com/api/v2.1/search?entity_id=${CityId}&entity_type=city&cuisines=${CousineId}&start=0&count=20`


console.log(number)

const fetchRestaurants = () => {

    fetch(url, { headers: { "user-Key": apiKey } })
        .then(res => res.json())
        .then(json => {
            console.log(json.restaurants)
            const restaurantList = foodList(json.restaurants)
            //renderRestaurants("all")
            console.log(json)
            showList(restaurantList)

        })
}

fetchRestaurants()

const fetchreview = (resKey) => {
    apiRes = `https://developers.zomato.com/api/v2.1/reviews?res_id=${resKey}`
    fetch(apiRes, { headers: { "user-Key": apiKey } }).then(res => res.json()).then(json => {
        console.log(json)

    })
}



const foodList = (inputT) => {
    const newList = []
    inputT.forEach((item, index, arr) => {
        const picture = ``
        newList.push({
            id: item.restaurant.id,
            name: item.restaurant.name,
            kitchen: item.restaurant.cuisines,
            photo: item.restaurant.photos[0].photo.url,
            averagePrice: item.restaurant.average_cost_for_two,
            priceRange: item.restaurant.price_range,
            adress: item.restaurant.location.address,
            city: item.restaurant.location.city,
            ratingN: item.restaurant.user_rating.aggregate_rating,
            ratingT: item.restaurant.user_rating.rating_text,
            
        })
    
    
})
    console.log(newList)
    return newList 
    }
const showList = (inputT) => {
    
    inputT.forEach((item, index, arr) => {
        
        today.innerHTML += `<article class="food"><h1>${item.name}</h1>
        <img alt ="food" src = "${item.photo}">
        <p>cuisine: ${item.kitchen} || Rating: ${item.ratingT}  || city: ${item.city} || price: ${item.priceRange}</p></article>`
    })
    
}


const modeFunc = () => {
    const myBtn = document.getElementById('button')
    const myThing = document.getElementById('container')
    const myBody = document.getElementById('myBody')
    if (myBtn.innerHTML === 'Light Mode') {
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


