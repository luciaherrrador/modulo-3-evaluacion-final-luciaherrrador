import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';
import '../stylesheets/CharacterList.scss'

const CharacterList = props => {
    return (
        <ul className="app__list">
            {props.api
                .filter(item => props.search === '' || item.name.toLowerCase().includes(props.search))
                .map(item =>
                    <li className="app__character" key={item.id}>
                        <Link to={`/character-detail/${item.id}`} className="character__link">
                            <CharacterCard
                                image={item.image}
                                name={item.name}
                                species={item.species}
                            ></CharacterCard>
                        </Link>
                    </li>
                )}
        </ul>);
}

CharacterList.propTypes = {
    api: PropTypes.arrayOf(PropTypes.object).isRequired,
    search: PropTypes.string.isRequired
}

export default CharacterList;