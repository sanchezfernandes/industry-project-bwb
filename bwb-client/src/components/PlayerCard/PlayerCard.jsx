import React from 'react';
import "./PlayerCard.scss";
import { Link } from "react-router-dom";

const PlayerCard = ({ name, region, image }) => {
    return (
        <main>
            <div className='playerCard'>
                {image}
                <div className='playerCard__info'>
                    <h3>{name}</h3>
                    <p>{region}</p>
                </div>
                <div className='link'>
                    <Link className='link__item' to="">Player Info</Link>
                </div>

            </div>
        </main>
    );
};

export default PlayerCard;