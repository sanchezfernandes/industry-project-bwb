import React from 'react'
import partnersImg from "../../assets/images/Frame 14.png"
import "./Partners.scss"

const Partners = () => {
    return (
        <section className='partnersSection'>
            <div className='partners'>
                <h2 className='partnerTitle'>NBA PARTNERS IN YOUR AREA [Philippines]</h2>
                <button className='button'>SEE STATS</button>
            </div>
            <div className='partnerImg'>
                <img src={partnersImg} alt="partners image" />
            </div>
        </section>
    )
}

export default Partners