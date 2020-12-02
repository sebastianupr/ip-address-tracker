import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'
import InfoLocation from 'src/components/InfoLocation'
import MapView from 'src/components/Map'
import Header from 'src/components/Header'
import { useParams } from 'react-router-dom'
import getLocation from 'src/services/getLocation'
import Context from 'src/Context'

const SearchIpStyled = styled.div`
    text-align: center;
    .title{
        color: white;
        margin: 0;
    }
`

export default function SearchIp() {
    const context = useContext(Context)

    const { infoLocation, setInfoLocation } = context

    const {ip} = useParams()

    useEffect(() => {
        getLocation(ip)
            .then(setInfoLocation)
            .catch(err => alert(`Error`))
    },[ip, setInfoLocation])

    if(!infoLocation) return null

    return (
        <SearchIpStyled>
            <Header/>
            <InfoLocation/>
            <MapView/>
        </SearchIpStyled>
    )
}
