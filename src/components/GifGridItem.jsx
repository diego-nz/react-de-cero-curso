import React from 'react'

export const GifGridItem = ( { id, image, title } ) => {
    return (
        <figure className="card__item ">
            <img src={image} alt={title} />
            <figcaption>{title}</figcaption>
        </figure>
    )
}
