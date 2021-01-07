let trackerInput = document.querySelector('.tracker_input')
let trackerBtn = document.querySelector('.tracker_btn')
let tracker = document.querySelector('.tracker')

let ipAdress = document.querySelector('.ip h3')
let locationText = document.querySelector('.location h3')
let timezone = document.querySelector('.timezone h3')
let isp = document.querySelector('.isp h3')

let ip;

window.addEventListener('load', checkIp(ip = 0))

function checkIp(ip){
    let api = ''
    if( ip === 0){
        api = `https://geo.ipify.org/api/v1?apiKey=at_ia4cnIpTTftFWY63EnVrkxbZTZpie`
    }else{
        api = `https://geo.ipify.org/api/v1?apiKey=at_ia4cnIpTTftFWY63EnVrkxbZTZpie&ipAddress=${ip}`
    }
    fetch(api)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            let {lat, lng} = data.location
            isp.innerText = data.isp
            timezone.innerText = 'UTC ' + data.location.timezone
            locationText.innerText = data.location.city
            ipAdress.innerText = data.ip
            map(lng, lat)
        })
    }
    
function map(lng, lat){
    mapboxgl.accessToken = 'pk.eyJ1IjoiZ2lsbGlhbXMiLCJhIjoiY2p0enlvcjFoMm55cjQ1bnBtdGEwdnNsMiJ9.7uHDsA3WRg0z2UexWHm55Q';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng,lat],
        zoom: 12
        }
    );
    const el = document.createElement('div')
    el.className = 'marker'
    var marker = new mapboxgl.Marker(el)
    .setLngLat([lng, lat])
    .addTo(map);
    
}

trackerBtn.addEventListener('click', getIp)
    
function getIp(e){
    e.preventDefault()
    ip = trackerInput.value
    checkIp(ip)
    ipAdress.innerText = trackerInput.value
    trackerInput.value = ''
}
    
