import React from 'react';
import PropTypes from 'prop-types';
//import '../stylesheets/Filters.scss';

const Filters = props => {
    const handleChange = evt => {
        props.handleChange(evt.target.value)
    }
    return (
        <div className="app__search_containter">
            <label className="app__search-label" htmlFor="inputSearch">introduce tu búsqueda</label>
            <input className="app__search" type="text" value={props.search} onChange={handleChange} placeholder="rick"></input>
        </div>
    );
}

Filters.propTypes = {
    search: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}


export default Filters;