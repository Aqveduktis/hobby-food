// funtion reacts to button

// curl -X GET --header "Accept: application/json" --header "user-key: "c3c54d8037eb79d54e15629d7d4d607e"" "https://developers.zomato.com/api/v2.1/reviews?res_id=17067963"

//const cityApi = document.getElementById('europe').value
const today = document.getElementById('restaurantGrid')
const CityId = 302;
const CousineId = "american";
const apiKey = "c3c54d8037eb79d54e15629d7d4d607e";
const number = Math.ceil((Math.random() * 80))
let restaurantList = []

const url = `https://developers.zomato.com/api/v2.1/search?entity_id=${CityId}&entity_type=city&cuisines=${CousineId}&start=0&count=20`


console.log("page number", number)

const fetchRestaurants = () => {

    fetch(url, { headers: { "user-Key": apiKey } })
        .then(res => res.json())
        .then(json => {
            console.log(json.restaurants)
            restaurantList = foodList(json.restaurants)
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
            highlights: item.restaurant.highlights

        })


    })
    console.log(newList)
    return newList
}
const showList = (inputT) => {
        today.innerHTML = ""
    inputT.forEach((item, index, arr) => {

        today.innerHTML += `<article class="food"><h1>${item.name}</h1>
        <img alt ="food" src = "${item.photo}">
        <p>cuisine: ${item.kitchen} || Rating: ${item.ratingT}  || city: ${item.city} || price: ${item.priceRange}</p></article>`
    })

}
// function that sorts by price (low to high)
const sortList = (restaurants, mode) => {
    if (mode === "cheap"){

    restaurants.sort((a, b) => (a.priceRange > b.priceRange) ? 1 : -1)}
    else if (mode === "good"){
        restaurants.sort((a, b) => (a.ratingN < b.ratingN) ? 1 : -1)}
    
    return restaurants
}

const filterList = (restaurants) => {
    const veryGood = restaurants.filter((restaurant)=>{
        return (restaurant.ratingT === "Excellent")
    })
    
    return veryGood
}

// function that changes colors
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
//var n = fruits.includes("Mango");
const deliveryFilter = (restaurants) => {

   lunchRestaurant = restaurants.filter((restaurant)=>{
        return (restaurant.highlights.includes("Delivery"))
    })
    console.log(lunchRestaurant)
    return lunchRestaurant
}

//Changes from dark mode to bright mode and back
document.getElementById('button').onclick = modeFunc

//Filter restaurants that Delivery


document.getElementById('buttonDelivery').addEventListener("click", (event) => {
    event.preventDefault()
    showList(deliveryFilter(restaurantList))
    
});
// Sorts restaurants by price range or rating
document.getElementById('sortSelect').addEventListener("change", (event) => {
    event.preventDefault()
    showList(sortList(restaurantList, event.target.value))
    
});

// filterPriceCheap.addEventListener('click', (e) => {
//     e.preventDefault()
//     priceFilterCheap(myList, 1, 2)
// })


// singers.sort(compare);