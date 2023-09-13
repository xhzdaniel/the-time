import React from 'react'
import Logo from "../media/sunny.png"

export const Header = () => {
    return (
        <div className='header'>
            <img src={Logo} alt="logo" />
            <div>
                <a href="/"><h1>The Time</h1></a>
                <div className='a'><a href='https://github.com/xhzdaniel/xhzdaniel' >By: xhzdaniel</a></div>
            </div>
        </div>
    )
}
