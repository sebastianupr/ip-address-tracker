import React, { useState, useContext } from 'react'
import Context from 'src/Context'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import ArrowRight from 'src/components/icons/ArrowRight'

export const SearchStyled = styled.label`
    display: grid;
    grid-template-columns: 85% 15%;
    background-color: white;
    border-radius: 10px;
    width: 300px;
    margin: 0 auto;
    margin-bottom: 125px;
    margin-top: 20px;
    .input{
        padding: 12px 25px;
    }
    input{
        border: 0;
        font-size: 18px;
        width: 90%;
    }
    .arrow{
        background-color: black;
        padding: 12px 12px;
        border-radius: 0 10px 10px 0;
        cursor: pointer;
    }
    button{
        border: 0;
        background: none;
        cursor: pointer;
    }
    svg{
        margin-top: 3px;
    }
    @media (min-width: 768px){
        margin-top: 25px;
        margin-bottom: 65px;
        width: 500px;
        grid-template-columns: 90% 10%;
        input{
            width: 90%;
        }
    }
`

export default function Search() {
    const [address, setAddress] = useState('')

    const context = useContext(Context)
    const { infoLocation } = context

    const handleChange = evt => {
        setAddress(evt.target.value)
    }

    const histoy = useHistory()
    const handleSubmit = evt => {
        evt.preventDefault()

        histoy.push(`/address/${address}`)
    }

    if (!infoLocation) return null
    return (
        <form onSubmit={handleSubmit}>
            <SearchStyled>
                <div className="input">
                    <input type="text" 
                        placeholder="Search for any IP address or domain" 
                        value={address} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="arrow">
                    <button>
                        <ArrowRight/>
                    </button>
                </div>
            </SearchStyled>
        </form>
    )
}
