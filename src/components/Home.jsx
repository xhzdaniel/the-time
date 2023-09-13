import React from 'react'
import sunny from '../media/sunny.png'
import normal from '../media/normal.png'
import cloudy from '../media/cloudy.png'
import ice from '../media/ice.png'

export const Home = ({ data }) => {

    let temp

    if(data.temp >= -30 && data.temp <= 0){ temp = ice }
    if(data.temp >= 1 && data.temp <= 15){ temp = cloudy }
    if(data.temp >= 16 && data.temp <= 25){ temp = normal }
    if(data.temp >= 26 && data.temp <= 55){ temp = sunny }
    return (
        <>
            <img className='img' src={temp} alt="sunny" />
            <div className='info'>
                <h1>{data.temp}<span style={{ opacity: "50%" }}>°C</span></h1>
                <h2>{data.city} <span style={{ opacity: "70%", fontSize: "30px" }}>{data.country}</span></h2>
            </div>
        </>
    )
}
