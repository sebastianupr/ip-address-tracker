import React, { useEffect, useCallback, useContext} from 'react'
import styled from 'styled-components'
import InfoLocation from 'src/components/InfoLocation'
import MapView from 'src/components/Map'
import Header from 'src/components/Header'
import { useParams, useHistory } from 'react-router-dom'
import getLocation from 'src/services/getLocation'
import getLocationByDomain from 'src/services/getLocationByDomain'
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

    const {address} = useParams()
    const history = useHistory()

    const setInfo = useCallback(infoLocation => {
            if(infoLocation.code === undefined){
                setInfoLocation(infoLocation)
            }
            else{
                alert(infoLocation.messages)
                history.push('/')
            }
        },[setInfoLocation, history])

    useEffect(() => {
        // If address is string getByDomain
        const numbers = [1,2,3,4,5,6,7,8,9,0]
        let isDomain = true

        numbers.map(num => {
            if(address.charAt(0) == num) isDomain = false
        })

        if(isDomain){
            getLocationByDomain(address).then(setInfo)
        }
        else{
            getLocation(address).then(setInfo)
        }
        
    },[address, setInfoLocation, setInfo])

    if(!infoLocation) return null

    return (
        <SearchIpStyled>
            <Header/>
            <InfoLocation/>
            <MapView/>
        </SearchIpStyled>
    )
}
