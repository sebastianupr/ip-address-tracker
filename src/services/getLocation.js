const API_URL = 'https://geo.ipify.org/api/v1'
const API_KEY = 'at_BkE4hmBwCQBo5yvIoFEsdGdNLHh0l'

export default function getLocation(ip) {
    if(ip){
        return fetch(`${API_URL}?apiKey=${API_KEY}&ipAddress=${ip}`)
        .then(data => data.json())
        .then(infoLocation => infoLocation)
        .catch(err => {
            console.error(err)
            return err
        })
    }
    else{
        return fetch(`${API_URL}?apiKey=${API_KEY}`)
        .then(data => data.json())
        .then(infoLocation => infoLocation)
        .catch(err => {
            console.error(err)
            return err
        })
    }
}