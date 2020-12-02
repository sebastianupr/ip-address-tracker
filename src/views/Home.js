import React from 'react'
import styled from 'styled-components'
import InfoLocation from 'src/components/InfoLocation'
import MapView from 'src/components/Map'
import Header from 'src/components/Header'

const HomeStyled = styled.div`
    text-align: center;
    .title{
        color: white;
        margin: 0;
    }
`

export default function Home() {
    return (
        <HomeStyled>
            <Header/>
            <InfoLocation/>
            <MapView/>
        </HomeStyled>
    )
}
