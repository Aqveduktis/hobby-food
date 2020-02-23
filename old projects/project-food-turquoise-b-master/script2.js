const apiKey = "d1b80adcb0bf3f17dbfc66d11bc78afd"
const cityId = 82 // Lisbon
const cuisineId = 83 // Seafood
const url = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&cuisines=${cuisineId}`

// ARRAY for json from API
let restaurantList = []

fetch(url, { headers: { "user-key": apiKey } })
  .then(res => res.json())
  .then(json => {
    console.log(json)
    restaurantList = json.restaurants

    restaurantList.forEach(resto => {
      renderRestaurant(resto)
    })
  })

///// HELPER FUNCTION to use for ratings /////
const roundHalf = number => {
  return Math.round(number * 2) / 2
}

///// RENDER FUNCTIONS /////

// html stuff for one restaurant
const renderRestaurant = resto => {
  document.getElementById(
    "restaurants"
  ).innerHTML += `<div class="cards"><img class="image" src=${
    resto.restaurant.photos[0].photo.url
  }>
  <li><h2>${resto.restaurant.name}</h2> </li>
  <li><h5>Average price: ${resto.restaurant.average_cost_for_two} ${
    resto.restaurant.currency
  }</h5></li>
  <li><h4>Adress: ${resto.restaurant.location.address}</h4></li>
  <li><h3>Rating: ${ratingIcon(
    resto.restaurant.user_rating.aggregate_rating
  )} <h3></li>
  <li><h3>Price range ${resto.restaurant.price_range}</li>
  </div>`
}

// Here we can use the roundHalf function again.
const ratingIcon = rating => {
  if (roundHalf(rating) === 5) {
    return `<img src="./assets/octopus1.png">
      <img src="./assets/octopus1.png">
      <img src="./assets/octopus1.png">
      <img src="./assets/octopus1.png">
      <img src="./assets/octopus1.png">`
  } else if (roundHalf(rating) === 4.5) {
    return `<img src="./assets/octopus1.png">
      <img src="./assets/octopus1.png">
      <img src="./assets/octopus1.png">
      <img src="./assets/octopus1.png">
      <img src="./assets/octopus05.png">`
  } else if (roundHalf(rating) === 4) {
    return `<img src="./assets/octopus1.png">
      <img src="./assets/octopus1.png">
      <img src="./assets/octopus1.png">
      <img src="./assets/octopus1.png">`
  } else if (roundHalf(rating) === 3.5) {
    return `<img src="./assets/octopus1.png">
      <img src="./assets/octopus1.png">
      <img src="./assets/octopus1.png">
      <img src="./assets/octopus05.png">`
  } else {
    return `<img src="./assets/octopus1.png">
     <img src="./assets/octopus1.png">
     <img src="./assets/octopus1.png">`
  }
}

///// FILTER FUNCTIONS /////

const filterByPrice = priceRange => {
  nullRestaurantList()

  restaurantList.forEach(resto => {
    if (resto.restaurant.price_range === priceRange) {
      renderRestaurant(resto)
    }
  })
}

// To cover all possible ratings, we check if the rating is between the passed in value +- 0.25
const filterByRating = restaurantRating => {
  nullRestaurantList()

  restaurantList.forEach(resto => {
    const rating = resto.restaurant.user_rating.aggregate_rating
    const rounded = roundHalf(rating) //rounding the rating to nearest whole or half number.
    if (rounded === restaurantRating) {
      renderRestaurant(resto)
    }
  })
}

const restoreFilter = () => {
  nullRestaurantList()

  restaurantList.forEach(resto => {
    renderRestaurant(resto)
  })
}

const nullRestaurantList = () => {
  // Null all restaurants
  document.getElementById("restaurants").innerHTML = ""
}

///// BUTTON EVENTS /////

// Filter by price buttons
document.getElementById("price-3").addEventListener("click", () => {
  filterByPrice(3)
})

document.getElementById("price-4").addEventListener("click", () => {
  filterByPrice(4)
})

// Filter by rating buttons
document.getElementById("rating-3").addEventListener("click", () => {
  filterByRating(3)
})
document.getElementById("rating-3-5").addEventListener("click", () => {
  filterByRating(3.5)
})
document.getElementById("rating-4").addEventListener("click", () => {
  filterByRating(4)
})
document.getElementById("rating-4-5").addEventListener("click", () => {
  filterByRating(4.5)
})
document.getElementById("rating-5").addEventListener("click", () => {
  filterByRating(5)
})

// Reset filter button
document.getElementById("restore-filter").addEventListener("click", () => {
  restoreFilter()
})
