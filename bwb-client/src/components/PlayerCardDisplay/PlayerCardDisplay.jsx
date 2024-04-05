import React from 'react';
import "./PlayerCardDisplay.scss";
import PlayerCard from '../PlayerCard/PlayerCard';
import Adama from "../../assets/images/Adama-Sanogo.png.png";
import Charles from "../../assets/images/Charles-Bediako.png.png";
import Lindell from "../../assets/images/Lindell-Wigginton.png.png";
import Azoulas from "../../assets/images/Azuolas-Tubelis.png.png";
import redCard from "../../assets/images/Red Card image.png"
import rui from "../../assets/images/image 8.png"

const PlayerCardDisplay = () => {
    const playerData = [
        { name: 'RUI HACHIMURA', image: <img src={rui} alt="Hachimura" />, region: 'Global 2016' },
        { name: 'AZOULAS TUBELIS', image: <img src={Azoulas} alt="Azoulas" />, region: 'EUROPE 2019, Global 2020' },
        { name: 'CHARLES BEDAIKO', image: <img src={Charles} alt="Charles" />, region: 'Global 2020' },
        { name: 'LINDELL WIGGINTON', image: <img src={Lindell} alt="Lindell" />, region: 'Global 2016' },
        { name: 'ADAMA SANAGO', image: <img src={Adama} alt="Adama" />, region: 'GLOBAL 2020' },
    ];

    return (
        <main className='cardDisplay'>
            <div>
                <h2 className='sectionTitle'>PAST PLAYERS</h2>

                <div className='redDiv'>
                    <img src={redCard} alt="red info card" />
                </div>
                <div className='scroll'>
                    {playerData.map((player, index) => (
                        <PlayerCard key={index} name={player.name} region={player.region} image={player.image} />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default PlayerCardDisplay;