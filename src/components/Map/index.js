import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import Context from 'src/Context'
import iconPin from 'src/Images/icon-location.svg'

const LeafletMap = (lng, lat) => {

    document.getElementById('mapContainer').innerHTML = `
        <div id="mapid" class="map"></div>
    `

    const direction = [lat, lng]
    var map = L.map('mapid').setView(direction, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var icon = L.icon({
        iconUrl: iconPin,
        // shadowUrl: iconPin,
        iconSize:     [50, 65], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    L.marker(direction, {icon}).addTo(map)
}

const MapStyled = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -2;
    .map{
        width: 100%;
        height: 100%;
    }
`

export default function MapView() {
    const context = useContext(Context)
    const { infoLocation } = context

    useEffect(() => {
        if(infoLocation){
            const { lng, lat } = infoLocation.location
            LeafletMap(lng, lat)
        }
    }, [infoLocation])

    if(!infoLocation) return null

    return <MapStyled id="mapContainer">
            {/* <div ></div> */}
        </MapStyled>
}
