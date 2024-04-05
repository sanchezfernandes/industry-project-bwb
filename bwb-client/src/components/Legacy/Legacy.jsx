import React from 'react';
import legacyImg from "../../assets/images/Legacy.png";
import "./Legacy.scss";
import legacyText from "../../assets/images/Blue Image.png"

const Legacy = () => {
    return (
        <main className='mainLegacy'>
            <h2 className='legacyTitle'>BASKETBALL WITHOUT BORDERS LEGACY</h2>
            <section className='legacySection'>
                <div>
                    <img className='player' src={legacyImg} alt="player photo" />
                </div>
                <div>
                    <img className='text' src={legacyText} alt="text" />
                </div>

            </section>

        </main>
    )
}

export default Legacy