import React from 'react';
import PropTypes from 'prop-types';
//import '../stylesheets/CharacterCard.scss';

const CharacterCard = props => {
    const { name, species, image } = props;

    return (
        <div className="card__container">
            <div className="card__img-container">
                <img className="card__img" src={image} alt={`portrait of ${name}`}></img>
            </div>
            <div className="card_info-container">
                <h2 className="card__title">{name}</h2>
                <p className="card__species">{species}</p>
            </div>

        </div>
    );

}

CharacterCard.propTypes = {
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}


export default CharacterCard;