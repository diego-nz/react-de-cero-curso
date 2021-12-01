import React from 'react';
import PropTypes from 'prop-types'

export const GifGridItem = ( { image, title } ) => {
    return (
        <figure className="card__item">
            <img src={image} alt={title} />
            <figcaption>{title}</figcaption>
        </figure>
    )
}
// import proptypes imrpcp
// Props requeridas
GifGridItem.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}
