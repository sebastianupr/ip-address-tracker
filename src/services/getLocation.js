import { API_URL, API_KEY } from './config.js'

export default function getLocation(ip) {
    if(ip){
        return fetch(`${API_URL}?apiKey=${API_KEY}&ipAddress=${ip}`)
        .then(data => data.json())
        .then(infoLocation => infoLocation)
        .catch(err => err)
    }
    else{
        return fetch(`${API_URL}?apiKey=${API_KEY}`)
        .then(data => data.json())
        .then(infoLocation => infoLocation)
        .catch(err => err)
    }
}