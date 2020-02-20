// funtion reacts to button


const cityApi = document.getElementById('europe').value
const today = document.getElementById('currentWeather')
const orginalApi = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=2b9468766d0e54560c7e599762d2e80b'
const weatherapi = 'https://api.openweathermap.org/data/2.5/weather?q='
const apiId = '&appid=2b9468766d0e54560c7e599762d2e80b'
const newApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityApi}&appid=2b9468766d0e54560c7e599762d2e80b`

//fetch today
fetch(newApi).then((response) => {
    return response.json()
}).then((json) => {
    // dealing with json
    const times = (new Date(json.dt * 1000)).toUTCString().split(' ') // dealing with date


})

const secondApi = `https://api.openweathermap.org/data/2.5/forecast?q=${cityApi}&appid=2b9468766d0e54560c7e599762d2e80b`

// fetch 5 -days
fetch(secondApi).then((response) => {
    return response.json()
}).then((jsonweek) => {
    // dealing with json object


})




