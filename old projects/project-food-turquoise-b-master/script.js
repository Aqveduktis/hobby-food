
const apiKey = "d1b80adcb0bf3f17dbfc66d11bc78afd"
const cityId = 82 // Lisbon
const cuisineId = 83 // Seafood
const url = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&cuisines=${cuisineId}`

// ARRAY for json from API
let restaurantList = []
// HTML DIV FOR RESTAURANTS


fetch(url, { headers: { "user-key": apiKey } })
  .then((res) => res.json())
  .then((json) => {
    console.log(json);
    restaurantList = json.restaurants

    restaurantList.forEach((resto) => {
      document.getElementById("restaurants").innerHTML +=
        `<div class="cards"><img class="image" src=${resto.restaurant.photos[0].photo.url}>
      <li><h2>${resto.restaurant.name}</h2> </li>
      <li><h5>Average price: ${resto.restaurant.average_cost_for_two} ${resto.restaurant.currency}</h5></li>
      <li><h4>Adress: ${resto.restaurant.location.address}</h4></li>
      <li><h3>Rating: ${ratingIcon(resto.restaurant.user_rating.aggregate_rating)} <h3></li>
      <li><h3>Price range ${resto.restaurant.price_range}</li>
      </div>`
    })

  });

const ratingIcon = (rating) => {
  if (rating >= 4.8 && rating <= 5) {
    //show restaurants if rating = 5
    return `<img src="./assets/octopus1.png">
      <img src="./assets/octopus1.png">
      <img src="./assets/octopus1.png">
      <img src="./assets/octopus1.png">
      <img src="./assets/octopus1.png">`
  } else if (rating >= 4.4 && rating <= 4.7) {
    return `<img src="./assets/octopus1.png">
      <img src="./assets/octopus1.png">
      <img src="./assets/octopus1.png">
      <img src="./assets/octopus1.png">
      <img src="./assets/octopus05.png">`

  } else if (rating >= 3.8 && rating <= 4.3) {
    return `<img src="./assets/octopus1.png">
      <img src="./assets/octopus1.png">
      <img src="./assets/octopus1.png">
      <img src="./assets/octopus1.png">`
  } else if (rating >= 3.4 && rating <= 3.7) {
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

// Move Restaurant content / info into function to use in filter functions

// const restaurantContent = () => {
//   restaurantList.forEach((item) => {
//        const restaurant = item.restaurant

//       document.getElementById("restaurants").innerHTML +=
//     `<div class="cards"><img class="image" src=${restaurant.photos[0].photo.url}>
//     <li><h2>${restaurant.name}</h2> </li>
//     <li><h5>Average price: ${restaurant.average_cost_for_two} ${resto.restaurant.currency}</h5></li>
//     <li><h4>Adress: ${restaurant.location.address}</h4></li>
//     <li><h3>Rating: ${restaurant.user_rating.aggregate_rating} 🐙<h3></li>
//     <li><h3>Price range ${restaurant.price_range}</li>
//     </div>` 
//       })
// }

// FUNCTIONS
// Filter on price range

document.getElementById("price-3").addEventListener('click', () => {
  filterByPrice(3)
})

const filterByPrice = (priceRange) => {
  // Null all restaurants
  document.getElementById("restaurants").innerHTML = ""
  restaurantList.forEach((resto) => {
    if (resto.restaurant.price_range === (priceRange)) {
      //show restaurants if price range = 3
      document.getElementById("restaurants").innerHTML +=
        `<div class="cards"><img class="image" src=${resto.restaurant.photos[0].photo.url}>
      <li><h2>${resto.restaurant.name}</h2> </li>
      <li><h5>Average price: ${resto.restaurant.average_cost_for_two} ${resto.restaurant.currency}</h5></li>
      <li><h4>Adress: ${resto.restaurant.location.address}</h4></li>
      <li><h3>Rating: ${ratingIcon(resto.restaurant.user_rating.aggregate_rating)} <h3></li>
      <li><h3>Price range ${resto.restaurant.price_range}</li>
      </div>`
    }
  })
}

document.getElementById("price-4").addEventListener('click', () => {
  filterByPrice(4)
})

// const filter4 = () => {
//   // Null all restaurants
//   document.getElementById("restaurants").innerHTML = ""
//   restaurantList.forEach((resto) => {
//     if (resto.restaurant.price_range === 4) {
//       //show restaurants if price range = 4
//       document.getElementById("restaurants").innerHTML +=
//         `<div class="cards"><img class="image" src=${resto.restaurant.photos[0].photo.url}>
//       <li><h2>${resto.restaurant.name}</h2> </li>
//       <li><h5>Average price: ${resto.restaurant.average_cost_for_two} ${resto.restaurant.currency}</h5></li>
//       <li><h4>Adress: ${resto.restaurant.location.address}</h4></li>
//       <li><h3>Rating: ${ratingIcon(resto.restaurant.user_rating.aggregate_rating)} <h3></li>
//       <li><h3>Price range ${resto.restaurant.price_range}</li>
//       </div>`
//     } else {
//       // don't show other restaurants
//       return
//     }
//   })
// }

// Rating filters

document.getElementById("rating-3").addEventListener('click', () => {
  filterByRating(3)
})

const filterByRating = (restaurantRating) => {
  // Null all restaurants
  document.getElementById("restaurants").innerHTML = ""
  restaurantList.forEach((resto) => {
    let rating = resto.restaurant.user_rating.aggregate_rating
    if (rating >= restaurantRating && rating <= restaurantRating + 0.3) {
      //show restaurants if rating = 3
      document.getElementById("restaurants").innerHTML +=
        `<div class="cards"><img class="image" src=${resto.restaurant.photos[0].photo.url}>
    <li><h2>${resto.restaurant.name}</h2> </li>
    <li><h5>Average price: ${resto.restaurant.average_cost_for_two} ${resto.restaurant.currency}</h5></li>
    <li><h4>Adress: ${resto.restaurant.location.address}</h4></li>
    <li><h3>Rating: ${ratingIcon(resto.restaurant.user_rating.aggregate_rating)} <h3></li>
    <li><h3>Price range ${resto.restaurant.price_range}</li>
    </div>`
    } else {
      // don't show other restaurants
      return
    }
  })
}

document.getElementById("rating-3-5").addEventListener('click', () => {
  rating35()
})

const rating35 = () => {
  // Null all restaurants
  document.getElementById("restaurants").innerHTML = ""
  restaurantList.forEach((resto) => {
    let rating = resto.restaurant.user_rating.aggregate_rating
    if (rating >= 3.4 && rating <= 3.7) {
      //show restaurants if rating = 3.5
      document.getElementById("restaurants").innerHTML +=
        `<div class="cards"><img class="image" src=${resto.restaurant.photos[0].photo.url}>
    <li><h2>${resto.restaurant.name}</h2> </li>
    <li><h5>Average price: ${resto.restaurant.average_cost_for_two} ${resto.restaurant.currency}</h5></li>
    <li><h4>Adress: ${resto.restaurant.location.address}</h4></li>
    <li><h3>Rating: ${ratingIcon(resto.restaurant.user_rating.aggregate_rating)} <h3></li>
    <li><h3>Price range ${resto.restaurant.price_range}</li>
    </div>`
    } else {
      // don't show other restaurants
      return
    }
  })
}

document.getElementById("rating-4").addEventListener('click', () => {
  rating4()
})

const rating4 = () => {
  // Null all restaurants
  document.getElementById("restaurants").innerHTML = ""
  restaurantList.forEach((resto) => {
    let rating = resto.restaurant.user_rating.aggregate_rating
    if (rating >= 3.8 && rating <= 4.3) {
      //show restaurants if rating = 4
      document.getElementById("restaurants").innerHTML +=
        `<div class="cards"><img class="image" src=${resto.restaurant.photos[0].photo.url}>
    <li><h2>${resto.restaurant.name}</h2> </li>
    <li><h5>Average price: ${resto.restaurant.average_cost_for_two} ${resto.restaurant.currency}</h5></li>
    <li><h4>Adress: ${resto.restaurant.location.address}</h4></li>
    <li><h3>Rating: ${ratingIcon(resto.restaurant.user_rating.aggregate_rating)} <h3></li>
    <li><h3>Price range ${resto.restaurant.price_range}</li>
    </div>`
    } else {
      // don't show other restaurants
      return
    }
  })
}

document.getElementById("rating-4-5").addEventListener('click', () => {
  rating45()
})

const rating45 = () => {
  // Null all restaurants
  document.getElementById("restaurants").innerHTML = ""
  restaurantList.forEach((resto) => {
    let rating = resto.restaurant.user_rating.aggregate_rating
    if (rating >= 4.4 && rating <= 4.7) {
      //show restaurants if rating = 4.5
      document.getElementById("restaurants").innerHTML +=
        `<div class="cards"><img class="image" src=${resto.restaurant.photos[0].photo.url}>
    <li><h2>${resto.restaurant.name}</h2> </li>
    <li><h5>Average price: ${resto.restaurant.average_cost_for_two} ${resto.restaurant.currency}</h5></li>
    <li><h4>Adress: ${resto.restaurant.location.address}</h4></li>
    <li><h3>Rating: ${ratingIcon(resto.restaurant.user_rating.aggregate_rating)} <h3></li>
    <li><h3>Price range ${resto.restaurant.price_range}</li>
    </div>`
    } else {
      // don't show other restaurants
      return
    }
  })
}

document.getElementById("rating-5").addEventListener('click', () => {
  rating5()
})

const rating5 = () => {
  // Null all restaurants
  document.getElementById("restaurants").innerHTML = ""
  restaurantList.forEach((resto) => {
    let rating = resto.restaurant.user_rating.aggregate_rating
    if (rating >= 4.8 && rating <= 5) {
      //show restaurants if rating = 5
      document.getElementById("restaurants").innerHTML +=
        `<div class="cards"><img class="image" src=${resto.restaurant.photos[0].photo.url}>
    <li><h2>${resto.restaurant.name}</h2> </li>
    <li><h5>Average price: ${resto.restaurant.average_cost_for_two} ${resto.restaurant.currency}</h5></li>
    <li><h4>Adress: ${resto.restaurant.location.address}</h4></li>
    <li><h3>Rating: ${ratingIcon(resto.restaurant.user_rating.aggregate_rating)} <h3></li>
    <li><h3>Price range ${resto.restaurant.price_range}</li>
    </div>`
    } else {
      // don't show other restaurants
      return
    }
  })
}

// Restore all filters filter


document.getElementById("restore-filter").addEventListener('click', () => {
  restoreFilter()
})

const restoreFilter = () => {
  // Null all restaurants
  document.getElementById("restaurants").innerHTML = ""
  restaurantList.forEach((resto) => {
    //show all restaurants 
    document.getElementById("restaurants").innerHTML +=
      `<div class="cards"><img class="image" src=${resto.restaurant.photos[0].photo.url}>
      <li><h2>${resto.restaurant.name}</h2> </li>
      <li><h5>Average price: ${resto.restaurant.average_cost_for_two} ${resto.restaurant.currency}</h5></li>
      <li><h4>Adress: ${resto.restaurant.location.address}</h4></li>
      <li><h3>Rating: ${ratingIcon(resto.restaurant.user_rating.aggregate_rating)} <h3></li>
      <li><h3>Price range ${resto.restaurant.price_range}</li>
      </div>`
  })
}


