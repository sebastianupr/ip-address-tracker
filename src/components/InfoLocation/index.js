import React, { useContext } from 'react'
import styled from 'styled-components'
import Context from 'src/Context'

export const InfoLocationStyled = styled.div`
    border-radius: 10px;
    background-color: white;
    z-index: 1000;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    width: 300px;
    h6{
        color: var(--dark);
        margin: 5px 0;
    }
    h4{
        margin: 0;
    }
    .section{
        margin: 12px 0;
    }
    box-shadow: 0 0 30px 5px rgba(0,0,0, .2);
    margin: 0 auto;
    margin-top: -110px;
    margin-bottom: -168px;
    @media (min-width: 768px){
        grid-template-rows: auto;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        width: 700px;
        padding: 10px 20px;
        margin-top: -58px;
        margin-bottom: -55px;
        text-aling: left !important;
        justify-content: left;
        .border{
            border: 1px solid var(--dark);
            border-top: 0;
            border-bottom: 0;
        }
        .borderRight{
            border-right: none;
        }
        h4,h6,p{
            text-align: left;
        }
        .section{
            padding: 3px 0 0 15px;
        }
    }
`

export default function InfoLocationView() {
    const context = useContext(Context)
    const { infoLocation } = context

    if(!infoLocation || infoLocation.status === '422') return null

    const { ip, location, isp } = infoLocation
    const { city, region, postalCode, country, timezone } = location

    return (
        <InfoLocationStyled>
            <div className="section">
                <h6>IP ADDRESS</h6>
                <h4>{ip}</h4>
            </div>
            <div className="section border borderRight">
                <h6>LOCATION</h6>
                <h4>{`${postalCode}, ${city}, ${region} - ${country}`}</h4>
            </div>
            <div className="section border">
                <h6>TIMEZONE</h6>
                <h4>{timezone}</h4>
            </div>
            <div className="section">
                <h6>ISP</h6>
                <h4>{isp}</h4>
            </div>
        </InfoLocationStyled>
    )
}
