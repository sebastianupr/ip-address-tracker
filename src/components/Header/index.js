import React from 'react'
import image from 'src/Images/pattern-bg.png'
import Search from 'src/components/Search'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderStyled = styled.header`
    background-image: url(${image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    padding: 15px 5px;
    .title{
        cursor:pointer;
    }
    a{
        text-decoration:none;
        
    }
`

export default function Header() {
    return (
        <HeaderStyled>
            <Link to='/'>
                <h3 className="title">IP Address Tracker</h3>
            </Link>
            <div className="search">
                <Search />
            </div>
        </HeaderStyled>
    )
}
