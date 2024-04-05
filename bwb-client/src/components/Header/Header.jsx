import React from 'react'
import "./Header.scss"
import ButtonNba from '../../assets/svg/btn-nba.png'

const Header = () => {
    return (
        <header className='header'>
            <div className='header__pre'>
                <img className='header__btn' src={ButtonNba} alt='btn alt'/>
                <h1>
                
                </h1>
            </div>
            <div></div>
        </header>
    )
}

export default Header